"use client";

import { Brain, Github, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { getGitHubVersion } from "@/lib/version";

export default function Navigation() {
  const [version, setVersion] = useState("1.3.4");

  useEffect(() => {
    getGitHubVersion().then(setVersion);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950"></div>
            </div>
            <div>
              <div className="text-2xl font-bold">mongoose-ai</div>
              <div className="text-xs text-slate-400">
                Intelligent Document Processing
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
              v{version}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#capabilities"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Capabilities
            </a>
            <a
              href="#examples"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Examples
            </a>
            <a
              href="#solutions"
              className="text-slate-300 hover:text-white transition-colors font-medium"
            >
              Solutions
            </a>
            <a
              href="https://github.com/jmndao/mongoose-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 px-4 py-2 rounded-lg transition-all group"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <div className="flex items-center space-x-1 ml-2">
                <Star className="w-3 h-3 text-yellow-400" />
                <span className="text-xs text-yellow-400">Star</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
