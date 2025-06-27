import { Brain, Star, Target } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-2 border-slate-800/50 py-16 px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">mongoose-ai</div>
                <div className="text-slate-400">
                  Intelligent Document Processing
                </div>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md text-lg leading-relaxed">
              The most advanced AI-powered Mongoose plugin for intelligent
              document processing with universal function calling.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/jmndao/mongoose-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-white transition-colors"
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-slate-400">Star on GitHub</span>
              </a>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-green-400" />
                <span className="text-slate-400">Production Ready</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Documentation</h4>
            <div className="space-y-4 text-slate-400">
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Get Started Guide
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md#function-calling"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Function Calling
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md#configuration"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Configuration
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md#api"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                API Reference
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md#performance"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Performance Guide
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md#migration"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Migration Guide
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-xl">Community</h4>
            <div className="space-y-4 text-slate-400">
              <a
                href="https://github.com/jmndao/mongoose-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                GitHub Repository
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Issue Tracker
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Discussions
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/tree/main/examples"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Usage Examples
              </a>
              <a
                href="https://github.com/jmndao/mongoose-ai/blob/main/readme.md#scaling"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors cursor-pointer"
              >
                Scaling Guide
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-12 pt-8 text-center text-slate-400">
          <p className="text-lg">
            &copy; 2024 mongoose-ai. Built with intelligence for the MongoDB
            community.
          </p>
        </div>
      </div>
    </footer>
  );
}
