"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Search } from "lucide-react";
import { useState, useEffect } from "react";
import clsx from "clsx";

const navItems = [
    { name: "The Briefing", href: "/briefing" },
    { name: "The Lab", href: "/lab" },
    { name: "Manifesto", href: "/manifesto" },
];

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-void-gray/80 backdrop-blur-md border-void-gray/20 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl font-mono font-bold tracking-tighter text-white">
                            Tech Dad <span className="text-brand-cyan">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-brand-cyan",
                                    pathname === item.href
                                        ? "text-brand-cyan"
                                        : "text-slate-400"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                            aria-label="Search"
                        >
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {mounted && theme === "light" ? (
                                <Moon className="w-5 h-5" />
                            ) : (
                                <Sun className="w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-void-gray/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={clsx(
                                "text-lg font-medium py-2",
                                pathname === item.href ? "text-brand-cyan" : "text-slate-300"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="flex items-center gap-2 text-slate-400"
                        >
                            {mounted && theme === "light" ? (
                                <>
                                    <Moon className="w-5 h-5" /> <span>Dark Mode</span>
                                </>
                            ) : (
                                <>
                                    <Sun className="w-5 h-5" /> <span>Light Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
