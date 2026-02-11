import { getPlaylistVideos } from "@/lib/youtube";
import { VideoGrid } from "@/components/content/VideoGrid";
import { SITE_CONFIG } from "@/lib/config";

export const revalidate = 3600; // IR (Incremental Regen) every hour

export default async function BriefingPage() {
    // Fallback to empty array if ID is placeholder to prevent fetch errors
    const isConfigured = !SITE_CONFIG.youtube.playlists.briefing.includes("PLACEHOLDER");
    const videos = isConfigured
        ? await getPlaylistVideos(SITE_CONFIG.youtube.playlists.briefing)
        : [];

    return (
        <main className="min-h-screen py-10 px-4 md:px-8 max-w-7xl mx-auto">
            <header className="mb-12 border-b border-white/10 pb-8">
                <h1 className="text-4xl md:text-5xl font-mono font-bold text-white mb-4">
                    <span className="text-brand-cyan">/</span> The Briefing
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl">
                    Incoming intelligence stream. Latest updates on AI, hardware, and system architecture.
                </p>
            </header>

            <section>
                <VideoGrid videos={videos} />
            </section>
        </main>
    );
}
