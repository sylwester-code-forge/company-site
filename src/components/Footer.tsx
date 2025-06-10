import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">Code</span>
              <span>Forge</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Transforming ideas into powerful digital solutions since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-blue-400">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-gray-400 hover:text-blue-400">Mobile Apps</Link></li>
              <li><Link to="/services/cloud-solutions" className="text-gray-400 hover:text-blue-400">Cloud Solutions</Link></li>
              <li><Link to="/services/it-consulting" className="text-gray-400 hover:text-blue-400">IT Consulting</Link></li>
              <li><Link to="/services/cybersecurity" className="text-gray-400 hover:text-blue-400">Cybersecurity</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-blue-400">Our Projects</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-blue-400">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>500 Bethania-Rural Hall Road, 115, Rural Hall, NC 27045, USA</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>vijaiaaravindh@code-forge.co</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Code Forge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 