import Link from "next/link";
import { Youtube, Github, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-void-gray mt-auto">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-400">
                            &copy; {new Date().getFullYear()} Use AI with Tech Dad. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            href="https://www.youtube.com/@UseAIwithTechDad"
                            target="_blank"
                            className="text-slate-400 hover:text-brand-orange transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5" />
                        </Link>
                        {/* Add other socials if/when available */}
                        {/* 
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link> 
            */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
