import { Video } from "@/lib/youtube";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export function VideoGrid({ videos }: { videos: Video[] }) {
    if (videos.length === 0) {
        return (
            <div className="text-center py-20 text-slate-500">
                <p>No transmissions received. The stream is silent.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
                <article
                    key={video.id}
                    className="group relative flex flex-col bg-void-gray/40 border border-white/10 rounded-xl overflow-hidden hover:border-brand-cyan/50 transition-all duration-300"
                >
                    {/* Thumbnail */}
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                        <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                        <div className="text-xs text-brand-cyan font-mono mb-2">
                            {video.pubDate}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-cyan transition-colors">
                            <Link href={video.link} target="_blank">
                                {video.title}
                            </Link>
                        </h3>
                        <p className="text-sm text-slate-400 line-clamp-3 mb-4 flex-1">
                            {video.description}
                        </p>
                        <Link
                            href={video.link}
                            target="_blank"
                            className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors mt-auto"
                        >
                            Watch Transmission &rarr;
                        </Link>
                    </div>
                </article>
            ))}
        </div>
    );
}
