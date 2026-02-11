import { getMergedPlaylistVideos, getChannelVideos } from "@/lib/youtube";
import { VideoGrid } from "@/components/content/VideoGrid";
import { SITE_CONFIG } from "@/lib/config";

export const revalidate = 3600;

export default async function LabPage() {
    const isConfigured = !SITE_CONFIG.youtube.playlists.lab[0].includes("PLACEHOLDER");
    let videos = [];

    if (isConfigured) {
        videos = await getMergedPlaylistVideos(SITE_CONFIG.youtube.playlists.lab);
    }

    if (videos.length === 0) {
        console.log("Lab playlist empty or failed, falling back to channel feed");
        videos = await getChannelVideos(SITE_CONFIG.youtube.channelId);
    }

    return (
        <main className="min-h-screen py-10 px-4 md:px-8 max-w-7xl mx-auto">
            <header className="mb-12 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                    <span className="text-brand-orange">/</span> The Lab
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl">
                    Operational Workspace. Tutorials, configurations, and deployment guides.
                </p>
            </header>

            <section>
                <VideoGrid videos={videos} />
            </section>
        </main>
    );
}
