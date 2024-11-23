import { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, Zap, Target, BarChart3, TrendingUp, Quote, Instagram } from 'lucide-react';

export default function VATLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-['Mont']">
            <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/mont');
      `}</style>

            <a
                href="https://www.instagram.com/taxwithazeez/profilecard/?igsh=MTV5NTBtMzNpbXpt"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
            >
                <Instagram className="w-6 h-6" />
            </a>

            <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50 border-b">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-blue-900">VAT Insights Pro</h1>
                        <a
                            href="https://www.instagram.com/taxwithazeez/profilecard/?igsh=MTV5NTBtMzNpbXpt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </header>

            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        Filing VAT in the UAE? Transform Your Business with Elite Insights
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Discover how top entrepreneurs use the same data to manage their business like pros
                    </p>
                    <div className="bg-blue-600 text-white rounded-xl p-8 mb-8">
                        <h3 className="text-3xl font-bold mb-4">EXCLUSIVE OFFER</h3>
                        <div className="text-6xl font-bold mb-4">
                            <span className="line-through opacity-50">1,000 AED</span>
                        </div>
                        <div className="text-7xl font-bold text-yellow-300 mb-4">
                            100 AED
                        </div>
                        <p className="text-xl mb-2">⚡️ URGENT: Only 20 Spots Left! ⚡️</p>
                        <div className="bg-blue-500/50 rounded-lg p-4 mt-4">
                            <p className="text-sm opacity-90">10 spots already taken! Only 20 remaining from original 30</p>
                            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                                <div className="bg-yellow-300 h-2 rounded-full" style={{ width: '66%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-2xl font-bold text-center mb-12">What You'll Get</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50">
                            <BarChart3 className="text-blue-600 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Complete VAT Filing</h4>
                                <p className="text-gray-600">Hassle-free compliance with UAE regulations</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50">
                            <TrendingUp className="text-blue-600 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Business Performance Dashboard</h4>
                                <p className="text-gray-600">Real-time insights into your business metrics</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50">
                            <Target className="text-blue-600 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Hidden Profit Pattern Detection</h4>
                                <p className="text-gray-600">Uncover opportunities for growth</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 rounded-xl bg-blue-50">
                            <Zap className="text-blue-600 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold mb-2">Strategic Growth Insights</h4>
                                <p className="text-gray-600">Data-driven recommendations for success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-2xl font-bold text-center mb-12">Why Top Businesses Choose Us</h3>
                    <div className="space-y-4">
                        {[
                            "Turn tax data into growth strategies",
                            "Spot opportunities others miss",
                            "Make decisions like industry leaders",
                            "Stay ahead of competition"
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg">
                                <CheckCircle2 className="text-green-500 w-6 h-6" />
                                <span className="text-gray-700">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <h3 className="text-2xl font-bold text-center mb-12">What Our Clients Say</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Mohammed", text: "The insights from this VAT service helped us increase our profit margins by 23% in just 3 months!" },
                            { name: "Sarah", text: "Their business insights transformed how we make decisions. Worth every dirham!" },
                            { name: "Ahmed", text: "The strategic insights are game-changing! Highly recommend taking advantage of this offer." }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                                <Quote className="text-blue-600 w-8 h-8 mx-auto mb-4" />
                                <p className="text-gray-600 mb-4 text-lg">{testimonial.text}</p>
                                <p className="font-bold text-blue-900">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <div className="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-200">
                        <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">RISK-FREE GUARANTEE</h3>
                        <p className="text-lg mb-2">Try for 100 AED - Get a full refund if not satisfied</p>
                        <p className="text-sm text-gray-600">(Regular price: 1,000 AED)</p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-blue-900 text-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <Zap className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-6">⚡️ HURRY: 20 SPOTS REMAINING ⚡️</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <div className="bg-blue-800 rounded-xl p-6">
                            <p className="text-lg mb-2">Only 20 spots left</p>
                            <p className="text-sm opacity-75">Out of original 30</p>
                        </div>
                        <div className="bg-blue-800 rounded-xl p-6">
                            <p className="text-lg mb-2">90% OFF regular price</p>
                            <p className="text-sm opacity-75">Save 900 AED</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <a
                            href="https://www.instagram.com/taxwithazeez/profilecard/?igsh=MTV5NTBtMzNpbXpt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center"
                        >
                            Secure Your Spot Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <p className="text-sm opacity-75">
                        #UAEBusiness #BusinessGrowth #VATSolutions
                    </p>
                </div>
            </footer>
        </div>
    );
}