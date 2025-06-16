'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Energized Fitness
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-red-500 transition-colors">About</a>
              <a href="#gallery" className="hover:text-red-500 transition-colors">Gallery</a>
              <a href="#membership" className="hover:text-red-500 transition-colors">Membership</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-2 rounded-full hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/20 z-20"></div>
        <img 
          src="/img/workout Area_1.png" 
          alt="Workout Area Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90 z-10"
        />
        
        <div className="relative z-30 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="block">TRANSFORM</span>
            <span className="block bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              YOUR LIMITS
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-delay">
            Experience the ultimate fitness journey at Energized Fitness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

       
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              NO PAINS. NO GAINS.
              <span className="block text-red-500">BELIEVES YOURSELF.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Energized Fitness, we believe in pushing boundaries and achieving the impossible. 
              Our state-of-the-art facility is designed to help you unlock your true potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Equipment</h3>
              <p className="text-gray-400">Latest fitness technology and equipment for optimal results</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">🏋️</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-gray-400">Certified professionals to guide your fitness journey</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Personalized Plans</h3>
              <p className="text-gray-400">Customized workout plans tailored to your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our <span className="text-red-500">Arena</span></h2>
            <p className="text-xl text-gray-300">Step into a world-class fitness facility</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/img/Reception Gym_1.png"
                alt="Gym Reception"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">Reception Area</h3>
                  <p className="text-gray-300">Welcome to excellence</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/img/gym area_1.png"
                alt="Main Gym Floor"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">Main Gym Floor</h3>
                  <p className="text-gray-300">Where champions are made</p>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src="/img/workout Area_1.png"
                alt="Training Zone"
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">Training Zone</h3>
                  <p className="text-gray-300">Push your limits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Choose Your <span className="text-red-500">Plan</span></h2>
            <p className="text-xl text-gray-300">Flexible membership options for every fitness goal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="text-4xl font-bold mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Gym Access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Locker Room</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic Equipment</li>
              </ul>
              <button className="w-full bg-gray-700 py-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                Choose Plan
              </button>
            </div>
            
            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-red-600 to-orange-600 p-8 rounded-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <div className="text-4xl font-bold mb-4">$59<span className="text-lg text-gray-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> All Basic Features</li>
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Personal Trainer</li>
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Group Classes</li>
                <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Nutrition Plan</li>
              </ul>
              <button className="w-full bg-white text-red-600 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 font-bold">
                Choose Plan
              </button>
            </div>
            
            {/* Elite Plan */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-4">Elite</h3>
              <div className="text-4xl font-bold mb-4">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All Premium Features</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 Access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> VIP Lounge</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Recovery Suite</li>
              </ul>
              <button className="w-full bg-gray-700 py-3 rounded-full hover:bg-red-600 transition-colors duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Ready to <span className="text-red-500">Transform?</span></h2>
            {/* <p className="text-xl text-gray-300">Get in touch with us today</p> */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-red-500 mr-4">📍</span>
                  <span>Gulgasht Multan </span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-4">📞</span>
                  <span>+9231234567</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-500 mr-4">✉️</span>
                  <span>info@energizedfitness.com</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>5:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>7:00 AM - 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="bg-gray-900 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-gray-800 p-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
              Energized Fitness
            </div>
            <p className="text-gray-400 mb-8">Transform your limits. Achieve greatness.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">YouTube</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500">
              <p>&copy; 2024 Energized Fitness. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}