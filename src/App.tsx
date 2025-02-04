import React, { useState, useEffect } from 'react';
import { ChevronRight, Cpu, Car as GpuCard, Monitor, MemoryStick as Memory, HardDrive, Battery, Award, Play, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=2400&q=80",
    "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=2400&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const specs = {
    processor: 'Intel® Core™ i9-14900HX',
    gpu: 'NVIDIA® GeForce RTX™ 4090 16GB GDDR6',
    display: '18" UHD+ (3840x2400), Mini LED, 165Hz',
    memory: '64GB DDR5 5600MHz',
    storage: '2TB NVMe PCIe Gen4x4 SSD',
    battery: '99.9 WHr'
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Auto Slider */}
      <div className="relative h-screen">
        <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
          {heroImages.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`MSI Titan Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-60' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">MSI Titan 18 HX</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Unleash Ultimate Gaming Power</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-flex items-center text-base md:text-lg font-semibold transition-all w-fit">
            Explore Now <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Revolutionary Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Intel® Core™ i9', desc: 'Next-gen processing power' },
              { icon: <GpuCard className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'RTX™ 4090', desc: 'Ultimate gaming performance' },
              { icon: <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Mini LED Display', desc: '165Hz UHD+ clarity' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl hover:bg-gray-700 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                <div className="text-red-500 mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-4 bg-gray-900 p-4 sm:p-6 rounded-lg hover:bg-gray-800 transition-all transform hover:-translate-y-1">
                {key === 'processor' && <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />}
                {key === 'gpu' && <GpuCard className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />}
                {key === 'display' && <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />}
                {key === 'memory' && <Memory className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />}
                {key === 'storage' && <HardDrive className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />}
                {key === 'battery' && <Battery className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 flex-shrink-0" />}
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-400 capitalize text-sm sm:text-base">{key}</h3>
                  <p className="font-semibold text-sm sm:text-base truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-12 md:py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Award-Winning Excellence</h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center space-x-2 bg-gray-800 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-gray-700 transition-all">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-sm sm:text-base whitespace-nowrap">Best Gaming Laptop {2024 - idx}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Experience the Future of Gaming</h2>
          <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">Pre-order now and receive exclusive gaming bundle</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-flex items-center justify-center text-base md:text-lg font-semibold transition-all">
              Pre-order Now
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg inline-flex items-center justify-center text-base md:text-lg font-semibold transition-all">
              <Play className="w-5 h-5 mr-2" /> Watch Review
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About MSI</h3>
              <p className="text-gray-400">Leading gaming technology innovator delivering premium experiences through cutting-edge hardware.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Service Centers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe for updates and exclusive offers</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              © CHAMODYA B HERATH
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;