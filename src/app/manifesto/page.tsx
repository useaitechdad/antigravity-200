export default function ManifestoPage() {
    return (
        <main className="min-h-screen py-10 px-4 md:px-8 max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
                <h1 className="font-mono text-4xl mb-8">
                    <span className="text-slate-500">#</span> Manifesto
                </h1>

                <div className="bg-void-gray/50 border border-white/10 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4 mt-0">About the Channel</h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Welcome to <strong>Use AI with Tech Dad</strong>. I'm a Tech Entrepreneur and System Architect with a
                        30-year track record building software for everything from startups to the Fortune 500.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed mt-4">
                        Now, I'm proving that the next generation of software won't be written—it will be <strong>orchestrated</strong>.
                    </p>
                </div>

                <h3>The Mission</h3>
                <p>
                    We are moving from the era of "Coding" to the era of "Architecture". The barrier to entry isn't syntax anymore; it's imagination and system design.
                    This channel is dedicated to demystifying the tools, hardware, and workflows that empower you to build at the speed of thought.
                </p>

                <h3>The Stack</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    <li><strong>Core:</strong> Local LLMs (Ollama, LM Studio)</li>
                    <li><strong>Orchestration:</strong> LangChain, AutoGen, CrewAI</li>
                    <li><strong>Hardware:</strong> Mac Studio (M2 Ultra), NVIDIA 4090 Rigs</li>
                    <li><strong>Philosophy:</strong> Private, Offline-First, High-Performance</li>
                </ul>

            </article>

            <div className="mt-20 border-t border-white/10 pt-10 text-center">
                <h3 className="text-xl font-mono text-slate-400 mb-6">Connect</h3>
                <a
                    href="https://www.youtube.com/@UseAIwithTechDad"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors"
                >
                    Subscribe on YouTube
                </a>
            </div>
        </main>
    );
}
