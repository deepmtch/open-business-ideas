import React, { useState } from 'react';
import { Search, ArrowRight, Loader2 } from 'lucide-react';

const ParagraphLink = ({ paragraph, linkedParagraph }) => (
  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg shadow-sm mb-4 transition-all duration-300 hover:shadow-md">
    <p className="text-sm mb-3 text-gray-700">{paragraph}</p>
    <div className="flex items-center">
      <ArrowRight className="mr-3 text-blue-500" size={16} />
      <p className="text-sm text-blue-600">{linkedParagraph}</p>
    </div>
  </div>
);

const MatchingPair = ({ pair }) => {
  const [showParagraphLinks, setShowParagraphLinks] = useState(false);
  const [paragraphLinks, setParagraphLinks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetParagraphLinks = () => {
    setIsLoading(true);
    // Simulating API call for paragraph links
    setTimeout(() => {
      setParagraphLinks([
        {
          paragraph: "Sustainable living involves making choices that reduce our environmental impact. From reducing energy consumption to minimizing waste, every action counts.",
          linkedParagraph: "Fast fashion contributes significantly to environmental degradation. The industry's rapid production cycles and low-quality garments lead to excessive waste."
        },
        {
          paragraph: "One key aspect of sustainable living is reducing waste. Composting, recycling, and choosing products with minimal packaging can make a significant difference.",
          linkedParagraph: "The fast fashion industry generates an enormous amount of textile waste. Many garments end up in landfills after only a few wears, contributing to pollution."
        }
      ]);
      setShowParagraphLinks(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-blue-600">{pair.matchPercentage}% Match</span>
        <button 
          onClick={handleGetParagraphLinks}
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            "Get Paragraph Links"
          )}
        </button>
      </div>
      <div className="flex items-stretch space-x-4 mb-6">
        <div className="flex-1 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{pair.post1.title}</h3>
          <p className="text-sm text-gray-600">{pair.post1.snippet}</p>
        </div>
        <ArrowRight className="self-center text-gray-400" size={24} />
        <div className="flex-1 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2 text-gray-800">{pair.post2.title}</h3>
          <p className="text-sm text-gray-600">{pair.post2.snippet}</p>
        </div>
      </div>
      {showParagraphLinks && paragraphLinks && (
        <div className="mt-4">
          <h4 className="font-semibold text-lg mb-3 text-gray-800">Paragraph-Level Links:</h4>
          {paragraphLinks.map((link, index) => (
            <ParagraphLink key={index} {...link} />
          ))}
        </div>
      )}
    </div>
  );
};

const BlogCrossLinkingPairsMockup = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const matchingPairs = [
    {
      matchPercentage: 85,
      post1: {
        title: "10 Essential Tips for Sustainable Living",
        snippet: "In today's world, sustainable living is more important than ever. This post explores 10 practical tips to reduce your carbon footprint and live a more eco-friendly lifestyle."
      },
      post2: {
        title: "The Impact of Fast Fashion on the Environment",
        snippet: "Fast fashion has become a major concern for environmentalists. This article delves into the environmental costs of rapidly changing fashion trends and disposable clothing."
      }
    },
    {
      matchPercentage: 78,
      post1: {
        title: "How to Start a Home Composting System",
        snippet: "Composting is an excellent way to reduce waste and create nutrient-rich soil for your garden. This guide walks you through setting up your own composting system at home."
      },
      post2: {
        title: "10 Essential Tips for Sustainable Living",
        snippet: "In today's world, sustainable living is more important than ever. This post explores 10 practical tips to reduce your carbon footprint and live a more eco-friendly lifestyle."
      }
    },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Blog Cross-Linking Tool</h1>
      
      <div className="mb-8">
        <label htmlFor="profileUrl" className="block text-lg font-medium text-gray-700 mb-2">
          Enter your blog profile URL:
        </label>
        <div className="flex">
          <input
            type="text"
            id="profileUrl"
            className="flex-grow px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            value={profileUrl}
            onChange={(e) => setProfileUrl(e.target.value)}
            placeholder="e.g., https://medium.com/@yourusername"
          />
          <button
            onClick={handleAnalyze}
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-r-full hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 text-lg font-semibold"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <span className="flex items-center">
                <Loader2 className="animate-spin mr-2" size={24} />
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center">
                <Search className="mr-2" size={24} />
                Analyze
              </span>
            )}
          </button>
        </div>
      </div>

      {analysisComplete && (
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Matching Blog Post Pairs</h2>
          {matchingPairs.map((pair, index) => (
            <MatchingPair key={index} pair={pair} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCrossLinkingPairsMockup;
