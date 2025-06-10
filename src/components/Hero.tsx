import { Link } from "react-router-dom";
import Home from "../assets/images/Home.png";
export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-blue-400">Innovative</span> IT Solutions For Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Code Forge transforms your business ideas into powerful digital realities. 
              Our expert team specializes in cutting-edge technology solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-center">
                Get Started
              </Link>
              <Link to="/services" className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border border-white transition-colors duration-300 text-center">
                Our Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-20"></div>
              <img 
                src={Home} 
                alt="IT Consulting Services" 
                className="relative z-10 rounded-xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 