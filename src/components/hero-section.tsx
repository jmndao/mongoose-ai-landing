import { Sparkles, ArrowRight, Code, BookOpen } from "lucide-react";
import PerformanceStats from "./performance-stats";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">
                Introducing Universal Function Calling
              </span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Intelligence
            </span>
            <br />
            <span className="text-white">That Acts</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light text-balance">
            Transform your MongoDB documents with AI that doesn&apos;t just
            analyze—
            <span className="text-blue-400 font-medium"> it takes action</span>.
            Built for production with universal function calling for Mongoose
            schemas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://www.npmjs.com/package/@jmndao/mongoose-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg lg:text-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/25"
            >
              <Code className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>npm install @jmndao/mongoose-ai</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-600 hover:border-slate-400 px-8 py-4 rounded-xl font-semibold text-lg lg:text-xl transition-all hover:bg-slate-800/30 flex items-center justify-center space-x-3"
            >
              <BookOpen className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>Documentation</span>
            </a>
          </div>

          <PerformanceStats />
        </div>
      </div>
    </section>
  );
}
