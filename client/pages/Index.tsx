import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Code, Zap } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <Rocket className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Fusion Starter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A production-ready full-stack React application template with integrated Express server, 
            featuring modern tooling and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>
                React 18, TypeScript, Vite, and Express with hot reload
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• React Router 6 SPA mode</li>
                <li>• TailwindCSS 3 + Radix UI</li>
                <li>• Vitest for testing</li>
                <li>• TypeScript throughout</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Developer Experience</CardTitle>
              <CardDescription>
                Optimized for rapid development and deployment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Single-port development</li>
                <li>• Shared TypeScript types</li>
                <li>• Path aliases configured</li>
                <li>• Production builds ready</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Ready to Deploy</CardTitle>
              <CardDescription>
                Multiple deployment options for any environment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Netlify/Vercel ready</li>
                <li>• Docker support</li>
                <li>• Binary executables</li>
                <li>• Environment configs</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="mr-4">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>
      </div>
    </div>
  );
}