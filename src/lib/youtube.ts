import { XMLParser } from "fast-xml-parser";

const BASE_URL = "https://www.youtube.com/feeds/videos.xml";

export interface Video {
    id: string;
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    description: string;
    isoDate: Date;
}

async function fetchFeed(url: string): Promise<Video[]> {
    try {
        const res = await fetch(url, {
            next: { revalidate: 3600 },
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5"
            }
        });

        if (!res.ok) {
            console.error(`YouTube Fetch Error: ${res.status} ${res.statusText}`);
            return [];
        }

        const xml = await res.text();
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "@_"
        });
        const result = parser.parse(xml);
        const entries = result.feed?.entry;

        if (!entries) return [];

        const items = Array.isArray(entries) ? entries : [entries];

        return items.map((item: any) => {
            const videoId = item["yt:videoId"];
            const published = new Date(item.published);
            return {
                id: videoId,
                title: item.title,
                link: item.link["@_href"],
                pubDate: published.toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                isoDate: published,
                thumbnail: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
                description: item["media:group"]["media:description"] || ""
            };
        });
    } catch (error) {
        console.error("Error fetching videos:", error);
        return [];
    }
}

export async function getChannelVideos(channelId: string): Promise<Video[]> {
    return fetchFeed(`${BASE_URL}?channel_id=${channelId}`);
}

export async function getPlaylistVideos(playlistId: string): Promise<Video[]> {
    return fetchFeed(`${BASE_URL}?playlist_id=${playlistId}`);
}

export async function getMergedPlaylistVideos(playlistIds: string[]): Promise<Video[]> {
    const promises = playlistIds.map(id => getPlaylistVideos(id));
    const results = await Promise.all(promises);

    // Flatten and deduplicate by ID
    const allVideos = results.flat();
    const uniqueVideos = Array.from(new Map(allVideos.map(v => [v.id, v])).values());

    // Sort by date (newest first)
    return uniqueVideos.sort((a, b) => b.isoDate.getTime() - a.isoDate.getTime());
}
