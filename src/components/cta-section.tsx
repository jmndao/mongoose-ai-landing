import { CheckCircle, Zap, Github } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Ready to Transform Your Data?
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light text-balance">
          Join organizations building the next generation of intelligent
          applications
        </p>

        <div className="bg-slate-900/50 border-2 border-slate-800/50 rounded-2xl p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <div className="text-slate-400 mb-3 font-semibold">
                Installation
              </div>
              <code className="text-blue-400 text-xl font-mono">
                npm install @jmndao/mongoose-ai
              </code>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">TypeScript Native</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">Zero Breaking Changes</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">Production Tested</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://www.npmjs.com/package/@jmndao/mongoose-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-5 rounded-xl font-semibold text-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/25"
          >
            <Zap className="w-6 h-6" />
            <span>Get Started Now</span>
          </a>
          <a
            href="https://github.com/jmndao/mongoose-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-slate-600 hover:border-slate-400 px-10 py-5 rounded-xl font-semibold text-xl transition-all hover:bg-slate-800/30 flex items-center justify-center space-x-3"
          >
            <Github className="w-6 h-6" />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </section>
  );
}
