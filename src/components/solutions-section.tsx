import {
  ShoppingCart,
  FileText,
  Headphones,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  code: string;
  metrics: string;
}

const realWorldExamples: Solution[] = [
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Optimization",
    description:
      "Automatically optimize product listings, calculate SEO scores, manage inventory levels, and predict pricing strategies.",
    code: "AISetup.ecommerce(apiKey)",
    metrics: "38% increase in conversion rates",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Intelligence",
    description:
      "Analyze readability, extract key topics, optimize for search engines, and categorize content automatically.",
    code: "AISetup.contentManagement(apiKey)",
    metrics: "65% reduction in manual content work",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Support Automation",
    description:
      "Intelligent ticket routing, priority assessment, response generation, and escalation detection.",
    code: "AISetup.customerSupport(apiKey)",
    metrics: "50% faster response times",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "User Analytics",
    description:
      "Behavioral analysis, segmentation, personalization engines, and predictive user modeling.",
    code: "AISetup.userIntelligence(apiKey)",
    metrics: "3x better user insights",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Business Intelligence",
    description:
      "Automated reporting, trend analysis, anomaly detection, and strategic recommendation generation.",
    code: "AISetup.businessIntelligence(apiKey)",
    metrics: "90% faster decision making",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Custom Solutions",
    description:
      "Build domain-specific AI solutions with our flexible function calling architecture.",
    code: "createCustomAI(requirements)",
    metrics: "Unlimited possibilities",
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Real-World Solutions
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light text-balance">
            Production-ready AI solutions for every industry and use case
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realWorldExamples.map((example, index) => (
            <div
              key={index}
              className="bg-slate-950/50 border-2 border-slate-800/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                  {example.icon}
                </div>
                <span className="text-xs text-green-400 font-semibold">
                  {example.metrics}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {example.title}
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {example.description}
              </p>
              <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
                <code className="text-blue-400 font-mono text-sm">
                  {example.code}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
