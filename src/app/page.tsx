// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Brain,
//   Zap,
//   Database,
//   Shield,
//   Target,
//   ArrowRight,
//   Code,
//   Github,
//   BookOpen,
//   CheckCircle,
//   Sparkles,
//   ShoppingCart,
//   FileText,
//   Headphones,
//   Users,
//   TrendingUp,
//   Settings,
//   Globe,
//   Star,
// } from "lucide-react";

// // SEO Head Component
// const SEOHead: React.FC = () => {
//   useEffect(() => {
//     // Update document title
//     document.title =
//       "mongoose-ai - AI-Powered MongoDB Plugin | Auto-Summarization & Function Calling";

//     // Create or update meta tags
//     const updateMetaTag = (
//       name: string,
//       content: string,
//       property?: string
//     ) => {
//       const selector = property
//         ? `meta[property="${property}"]`
//         : `meta[name="${name}"]`;
//       let meta = document.querySelector(selector) as HTMLMetaElement;

//       if (!meta) {
//         meta = document.createElement("meta");
//         if (property) {
//           meta.setAttribute("property", property);
//         } else {
//           meta.setAttribute("name", name);
//         }
//         document.head.appendChild(meta);
//       }
//       meta.setAttribute("content", content);
//     };

//     // Basic SEO meta tags
//     updateMetaTag(
//       "description",
//       "AI-powered Mongoose plugin for MongoDB with intelligent summarization, semantic search, and universal function calling. Works with OpenAI and Anthropic Claude."
//     );
//     updateMetaTag(
//       "keywords",
//       "mongoose, mongodb, ai, artificial intelligence, openai, anthropic, claude, gpt, summarization, semantic search, function calling, javascript, typescript, node.js, automation, document processing"
//     );
//     updateMetaTag("author", "Jonathan Moussa NDAO");
//     updateMetaTag("robots", "index, follow");
//     updateMetaTag("language", "en");
//     updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

//     // Open Graph meta tags
//     updateMetaTag("", "mongoose-ai - AI-Powered MongoDB Plugin", "og:title");
//     updateMetaTag(
//       "",
//       "AI-powered Mongoose plugin with intelligent summarization, semantic search, and universal function calling. Built for production with TypeScript support.",
//       "og:description"
//     );
//     updateMetaTag("", "website", "og:type");
//     updateMetaTag("", "https://mongoose-ai.dev", "og:url");
//     updateMetaTag("", "https://mongoose-ai.dev/og-image.png", "og:image");
//     updateMetaTag("", "mongoose-ai", "og:site_name");

//     // Twitter Card meta tags
//     updateMetaTag("twitter:card", "summary_large_image");
//     updateMetaTag("twitter:title", "mongoose-ai - AI-Powered MongoDB Plugin");
//     updateMetaTag(
//       "twitter:description",
//       "Add AI powers to your Mongoose schemas with auto-summarization, semantic search, and intelligent function calling."
//     );
//     updateMetaTag("twitter:image", "https://mongoose-ai.dev/twitter-card.png");
//     updateMetaTag("twitter:creator", "@jmndao");

//     // Technical meta tags
//     updateMetaTag("application-name", "mongoose-ai");
//     updateMetaTag("theme-color", "#3b82f6");
//     updateMetaTag("msapplication-TileColor", "#1e293b");

//     // JSON-LD structured data
//     const structuredData = {
//       "@context": "https://schema.org",
//       "@type": "SoftwareApplication",
//       name: "mongoose-ai",
//       description:
//         "AI-powered Mongoose plugin for MongoDB with intelligent summarization, semantic search, and universal function calling",
//       applicationCategory: "DeveloperApplication",
//       operatingSystem: "Node.js",
//       programmingLanguage: ["JavaScript", "TypeScript"],
//       author: {
//         "@type": "Person",
//         name: "Jonathan Moussa NDAO",
//         url: "https://github.com/jmndao",
//       },
//       downloadUrl: "https://www.npmjs.com/package/@jmndao/mongoose-ai",
//       softwareVersion: "1.3.0",
//       datePublished: "2024",
//       license: "https://opensource.org/licenses/MIT",
//       keywords: [
//         "mongoose",
//         "mongodb",
//         "ai",
//         "openai",
//         "anthropic",
//         "summarization",
//         "semantic search",
//         "function calling",
//       ],
//       offers: {
//         "@type": "Offer",
//         price: "0",
//         priceCurrency: "USD",
//       },
//     };

//     // Add or update structured data
//     let jsonLd = document.querySelector('script[type="application/ld+json"]');
//     if (!jsonLd) {
//       jsonLd = document.createElement("script");
//       jsonLd.setAttribute("type", "application/ld+json");
//       document.head.appendChild(jsonLd);
//     }
//     jsonLd.textContent = JSON.stringify(structuredData);

//     // Add canonical URL
//     let canonical = document.querySelector(
//       'link[rel="canonical"]'
//     ) as HTMLLinkElement;
//     if (!canonical) {
//       canonical = document.createElement("link");
//       canonical.setAttribute("rel", "canonical");
//       document.head.appendChild(canonical);
//     }
//     canonical.setAttribute("href", "https://mongoose-ai.dev");
//   }, []);

//   return null;
// };

// const LandingPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const codeExamples = [
//     {
//       title: "Intelligent Summarization",
//       description: "Transform documents into actionable insights automatically",
//       code: `// Transform any document into intelligent insights
// const documentSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   metadata: Object
// });

// documentSchema.plugin(aiPlugin, {
//   ai: {
//     model: "summary",
//     provider: "openai",
//     field: "insights",
//     credentials: { apiKey: process.env.OPENAI_API_KEY }
//   }
// });

// await document.save();
// // Intelligent summary generated automatically
// console.log(document.insights.summary);`,
//       highlight: "Auto-processing on save",
//     },
//     {
//       title: "Semantic Intelligence",
//       description: "Search by meaning, not just keywords - understand context",
//       code: `// Search by meaning, not just text matching
// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   specifications: Object
// });

// productSchema.plugin(aiPlugin, {
//   ai: {
//     model: "embedding",
//     provider: "openai",
//     field: "semanticIndex"
//   }
// });

// // Natural language queries
// const results = await Product.semanticSearch(
//   "durable outdoor equipment for harsh weather",
//   { threshold: 0.8 }
// );
// // Finds relevant products by understanding intent`,
//       highlight: "Intent-based discovery",
//     },
//     {
//       title: "Universal Automation",
//       description: "AI that takes action - not just analysis",
//       code: `// AI that acts, not just analyzes
// const businessSchema = new mongoose.Schema({
//   name: String,
//   industry: String,
//   priority: String,
//   tags: [String],
//   riskScore: Number
// });

// businessSchema.plugin(aiPlugin, {
//   ai: {
//     model: "summary", // Works with ANY model
//     provider: "openai",
//     field: "analysis",
//     advanced: { enableFunctions: true },
//     functions: [
//       QuickFunctions.updateField("priority", ["low", "high", "critical"]),
//       QuickFunctions.scoreField("riskScore", 0, 100),
//       QuickFunctions.manageTags("industry")
//     ]
//   }
// });

// // AI automatically analyzes AND takes action
// await business.save();
// console.log(business.priority);   // "critical" (AI decided)
// console.log(business.riskScore);  // 87 (AI calculated)`,
//       highlight: "Intelligent automation",
//     },
//   ];

//   const capabilities = [
//     {
//       icon: <Sparkles className="w-8 h-8" />,
//       title: "Universal Function Calling",
//       description:
//         "Revolutionary architecture that adds intelligent automation to any model type. Not limited to specific use cases.",
//       impact: "Transform static analysis into dynamic action",
//       highlight: "Game Changer",
//     },
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "Multi-Provider Intelligence",
//       description:
//         "Seamlessly work with OpenAI and Anthropic. Switch providers without changing your code architecture.",
//       impact: "Future-proof your AI integrations",
//       highlight: "Production Ready",
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Zero Breaking Changes",
//       description:
//         "100% backward compatibility guaranteed. Upgrade confidently without touching existing implementations.",
//       impact: "Safe adoption for production systems",
//       highlight: "Production Safe",
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Performance Optimized",
//       description:
//         "Built for scale with intelligent caching, retry logic, and cost optimization. Handle millions of documents.",
//       impact: "99.7% faster than manual processing",
//       highlight: "High Performance",
//     },
//     {
//       icon: <Database className="w-8 h-8" />,
//       title: "Native MongoDB Integration",
//       description:
//         "Deep integration with Mongoose. Works with your existing schemas, queries, and database operations.",
//       impact: "No infrastructure changes required",
//       highlight: "Seamless",
//     },
//     {
//       icon: <Settings className="w-8 h-8" />,
//       title: "Developer Experience",
//       description:
//         "TypeScript-first with intelligent autocomplete, comprehensive error handling, and extensive documentation.",
//       impact: "Reduce development time by 80%",
//       highlight: "DX Focused",
//     },
//   ];

//   const realWorldExamples = [
//     {
//       icon: <ShoppingCart className="w-6 h-6" />,
//       title: "E-commerce Optimization",
//       description:
//         "Automatically optimize product listings, calculate SEO scores, manage inventory levels, and predict pricing strategies.",
//       code: "AISetup.ecommerce(apiKey)",
//       metrics: "38% increase in conversion rates",
//     },
//     {
//       icon: <FileText className="w-6 h-6" />,
//       title: "Content Intelligence",
//       description:
//         "Analyze readability, extract key topics, optimize for search engines, and categorize content automatically.",
//       code: "AISetup.contentManagement(apiKey)",
//       metrics: "65% reduction in manual content work",
//     },
//     {
//       icon: <Headphones className="w-6 h-6" />,
//       title: "Support Automation",
//       description:
//         "Intelligent ticket routing, priority assessment, response generation, and escalation detection.",
//       code: "AISetup.customerSupport(apiKey)",
//       metrics: "50% faster response times",
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "User Analytics",
//       description:
//         "Behavioral analysis, segmentation, personalization engines, and predictive user modeling.",
//       code: "AISetup.userIntelligence(apiKey)",
//       metrics: "3x better user insights",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Business Intelligence",
//       description:
//         "Automated reporting, trend analysis, anomaly detection, and strategic recommendation generation.",
//       code: "AISetup.businessIntelligence(apiKey)",
//       metrics: "90% faster decision making",
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Custom Solutions",
//       description:
//         "Build domain-specific AI solutions with our flexible function calling architecture.",
//       code: "createCustomAI(requirements)",
//       metrics: "Unlimited possibilities",
//     },
//   ];

//   const performanceStats = [
//     {
//       number: "99.7%",
//       label: "Faster Processing",
//       description: "vs manual analysis",
//     },
//     {
//       number: "38/min",
//       label: "Document Throughput",
//       description: "intelligent processing",
//     },
//     {
//       number: "$0.0003",
//       label: "Cost Per Document",
//       description: "optimized pricing",
//     },
//     {
//       number: "100%",
//       label: "Backward Compatible",
//       description: "zero breaking changes",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
//       <SEOHead />

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 z-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-950"></div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold">mongoose-ai</div>
//                 <div className="text-xs text-slate-400">
//                   Intelligent Document Processing
//                 </div>
//               </div>
//               <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30">
//                 v1.3.0
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a
//                 href="#capabilities"
//                 className="text-slate-300 hover:text-white transition-colors font-medium"
//               >
//                 Capabilities
//               </a>
//               <a
//                 href="#examples"
//                 className="text-slate-300 hover:text-white transition-colors font-medium"
//               >
//                 Examples
//               </a>
//               <a
//                 href="#solutions"
//                 className="text-slate-300 hover:text-white transition-colors font-medium"
//               >
//                 Solutions
//               </a>
//               <button className="flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 px-4 py-2 rounded-lg transition-all group">
//                 <Github className="w-4 h-4" />
//                 <span>GitHub</span>
//                 <div className="flex items-center space-x-1 ml-2">
//                   <Star className="w-3 h-3 text-yellow-400" />
//                   <span className="text-xs text-yellow-400">Star</span>
//                 </div>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="flex justify-center mb-8">
//               <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3">
//                 <Sparkles className="w-5 h-5 text-blue-400" />
//                 <span className="text-blue-300 font-medium">
//                   Introducing Universal Function Calling
//                 </span>
//                 <ArrowRight className="w-4 h-4 text-blue-400" />
//               </div>
//             </div>

//             <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
//                 Intelligence
//               </span>
//               <br />
//               <span className="text-white">That Acts</span>
//             </h1>

//             <p className="text-2xl md:text-3xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
//               Transform your MongoDB documents with AI that doesn't just
//               analyze—
//               <span className="text-blue-400 font-medium">
//                 {" "}
//                 it takes action
//               </span>
//               . Built for production with universal function calling for
//               Mongoose schemas.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-5 rounded-xl font-semibold text-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/25">
//                 <Code className="w-6 h-6" />
//                 <span>npm install @jmndao/mongoose-ai</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="border-2 border-slate-600 hover:border-slate-400 px-10 py-5 rounded-xl font-semibold text-xl transition-all hover:bg-slate-800/30 flex items-center justify-center space-x-3">
//                 <BookOpen className="w-6 h-6" />
//                 <span>Documentation</span>
//               </button>
//             </div>

//             {/* Performance Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//               {performanceStats.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="text-center p-6 bg-slate-900/30 rounded-xl border border-slate-800/50"
//                 >
//                   <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-white font-semibold mb-1">
//                     {stat.label}
//                   </div>
//                   <div className="text-slate-400 text-sm">
//                     {stat.description}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Code Examples */}
//       <section id="examples" className="py-24 px-6 lg:px-8 bg-slate-900/20">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-bold mb-8">
//               See Intelligence in Action
//             </h2>
//             <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
//               From passive analysis to intelligent automation—witness the
//               transformation
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-5 gap-12 items-start">
//             <div className="lg:col-span-2 space-y-6">
//               {codeExamples.map((example, index) => (
//                 <div
//                   key={index}
//                   className={`p-8 rounded-2xl cursor-pointer transition-all ${
//                     activeTab === index
//                       ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30 shadow-xl shadow-blue-500/10"
//                       : "bg-slate-800/30 border-2 border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/50"
//                   }`}
//                   onClick={() => setActiveTab(index)}
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-2xl font-bold text-white">
//                       {example.title}
//                     </h3>
//                     <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
//                       {example.highlight}
//                     </span>
//                   </div>
//                   <p className="text-slate-300 text-lg leading-relaxed">
//                     {example.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <div className="lg:col-span-3">
//               <div className="bg-slate-950/80 border-2 border-slate-800/50 rounded-2xl overflow-hidden shadow-2xl">
//                 <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-800/50">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                     </div>
//                     <span className="text-slate-400 font-mono text-sm">
//                       {codeExamples[activeTab].title
//                         .toLowerCase()
//                         .replace(/\s+/g, "-")}
//                       .js
//                     </span>
//                   </div>
//                 </div>
//                 <pre className="p-8 text-base overflow-x-auto bg-slate-950/50">
//                   <code className="text-slate-200 font-mono whitespace-pre-wrap leading-relaxed">
//                     {codeExamples[activeTab].code}
//                   </code>
//                 </pre>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Capabilities */}
//       <section id="capabilities" className="py-24 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-bold mb-8">
//               Revolutionary Capabilities
//             </h2>
//             <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
//               Enterprise-grade AI infrastructure that scales with your ambitions
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {capabilities.map((capability, index) => (
//               <div
//                 key={index}
//                 className="group bg-slate-900/30 border-2 border-slate-800/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
//                     {capability.icon}
//                   </div>
//                   <span className="text-xs px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30">
//                     {capability.highlight}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-white">
//                   {capability.title}
//                 </h3>
//                 <p className="text-slate-300 leading-relaxed mb-4 text-lg">
//                   {capability.description}
//                 </p>
//                 <div className="text-blue-400 font-semibold">
//                   {capability.impact}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Real World Solutions */}
//       <section id="solutions" className="py-24 px-6 lg:px-8 bg-slate-900/20">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-bold mb-8">
//               Real-World Solutions
//             </h2>
//             <p className="text-2xl text-slate-300 max-w-4xl mx-auto font-light">
//               Production-ready AI solutions for every industry and use case
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {realWorldExamples.map((example, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-950/50 border-2 border-slate-800/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all group"
//               >
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
//                     {example.icon}
//                   </div>
//                   <span className="text-xs text-green-400 font-semibold">
//                     {example.metrics}
//                   </span>
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-white">
//                   {example.title}
//                 </h3>
//                 <p className="text-slate-300 mb-6 leading-relaxed">
//                   {example.description}
//                 </p>
//                 <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
//                   <code className="text-blue-400 font-mono text-sm">
//                     {example.code}
//                   </code>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-5xl md:text-6xl font-bold mb-8">
//             Ready to Transform Your Data?
//           </h2>
//           <p className="text-2xl text-slate-300 mb-12 font-light">
//             Join organizations building the next generation of intelligent
//             applications
//           </p>

//           <div className="bg-slate-900/50 border-2 border-slate-800/50 rounded-2xl p-10 mb-12">
//             <div className="grid md:grid-cols-2 gap-8 text-left">
//               <div>
//                 <div className="text-slate-400 mb-3 font-semibold">
//                   Installation
//                 </div>
//                 <code className="text-blue-400 text-xl font-mono">
//                   npm install mongoose-ai
//                 </code>
//               </div>
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span className="text-slate-300">TypeScript Native</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span className="text-slate-300">Zero Breaking Changes</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <CheckCircle className="w-5 h-5 text-green-400" />
//                   <span className="text-slate-300">Production Tested</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-5 rounded-xl font-semibold text-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-xl shadow-blue-500/25">
//               <Zap className="w-6 h-6" />
//               <span>Get Started Now</span>
//             </button>
//             <button className="border-2 border-slate-600 hover:border-slate-400 px-10 py-5 rounded-xl font-semibold text-xl transition-all hover:bg-slate-800/30 flex items-center justify-center space-x-3">
//               <Github className="w-6 h-6" />
//               <span>View Source</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="border-t-2 border-slate-800/50 py-16 px-6 lg:px-8 bg-slate-950/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div className="col-span-2">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
//                   <Brain className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold">mongoose-ai</div>
//                   <div className="text-slate-400">
//                     Intelligent Document Processing
//                   </div>
//                 </div>
//               </div>
//               <p className="text-slate-400 mb-6 max-w-md text-lg leading-relaxed">
//                 The most advanced AI-powered Mongoose plugin for intelligent
//                 document processing with universal function calling.
//               </p>
//               <div className="flex items-center space-x-6">
//                 <div className="flex items-center space-x-2">
//                   <Star className="w-5 h-5 text-yellow-400" />
//                   <span className="text-slate-400">Star on GitHub</span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Target className="w-5 h-5 text-green-400" />
//                   <span className="text-slate-400">Production Ready</span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-6 text-xl">Documentation</h4>
//               <div className="space-y-4 text-slate-400">
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Get Started Guide
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Function Calling
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Configuration
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   API Reference
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Performance Guide
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Migration Guide
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-6 text-xl">Community</h4>
//               <div className="space-y-4 text-slate-400">
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   GitHub Repository
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Issue Tracker
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Discussions
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Usage Examples
//                 </div>
//                 <div className="hover:text-white transition-colors cursor-pointer">
//                   Scaling Guide
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-slate-800/50 mt-12 pt-8 text-center text-slate-400">
//             <p className="text-lg">
//               &copy; 2024 mongoose-ai. Built with intelligence for the MongoDB
//               community.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CodeExamples from "@/components/code-examples";
import CapabilitiesSection from "@/components/capabilities-section";
import SolutionsSection from "@/components/solutions-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      <Navigation />
      <HeroSection />
      <CodeExamples />
      <CapabilitiesSection />
      <SolutionsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
