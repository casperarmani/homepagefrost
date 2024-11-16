import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, BarChart3, Video, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/home/Navbar';
import { FeatureCard } from '@/components/home/FeatureCard';
import { GlassCard } from '@/components/home/GlassCard';
import { SearchBar } from '@/components/home/SearchBar';
import { ModelCard } from '@/components/home/ModelCard';
import { CompanySlider } from '@/components/home/CompanySlider';
import { RotatingText } from '@/components/home/RotatingText';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <h1 className="text-7xl font-light mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                Transform Your Videos<br />With AI Analysis
              </h1>
              <RotatingText />
              <div className="mt-12">
                <SearchBar />
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <GlassCard className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-light text-gray-800">Popular Models</h2>
                    <p className="text-sm text-gray-600">Start with our most used analysis models</p>
                  </div>
                  <Link to="/app">
                    <Button variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100">
                      View All <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ModelCard
                    name="Video Analysis"
                    size="6.7B"
                    type="Base Model"
                  />
                  <ModelCard
                    name="Learning Assistant"
                    size="3.8B"
                    type="Fine-tuned"
                  />
                  <ModelCard
                    name="Content Analyzer"
                    size="14.0B"
                    type="Specialized"
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-20 overflow-hidden border-t border-b border-gray-100 bg-white/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-light tracking-wider text-gray-500 uppercase">Trusted by industry leaders</p>
            </div>
            <CompanySlider />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6" id="features">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-2 rounded-2xl bg-gray-50 backdrop-blur-xl border border-gray-100 mb-4">
                <p className="text-gray-600 text-sm px-4">Advanced Technology</p>
              </div>
              <h2 className="text-4xl font-light text-gray-800 mb-4">
                Powerful Video Analysis Tools
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to analyze and understand your video content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={Brain}
                title="AI Analysis"
                description="Advanced machine learning algorithms analyze your video content in real-time"
              />
              <FeatureCard
                icon={Zap}
                title="Instant Results"
                description="Get comprehensive analysis and insights in minutes, not hours"
              />
              <FeatureCard
                icon={BarChart3}
                title="Deep Insights"
                description="Detailed metrics and actionable insights to improve your content"
              />
              <FeatureCard
                icon={Video}
                title="Any Format"
                description="Support for all major video formats and resolutions"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-50 backdrop-blur-xl border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <GlassCard className="p-12">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <h2 className="text-4xl font-light text-gray-800 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of users who are already analyzing their videos with AI
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Link to="/app">
                  <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-6 text-lg">
                    Start Analyzing
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-8 py-6 text-lg">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-gray-500 text-sm ml-2">© 2023 Video Analysis AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms</Link>
              <Link to="#" className="text-gray-500 hover:text-gray-700 text-sm">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}