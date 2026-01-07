export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">LiFi</h3>
            <p className="text-gray-400">
              Revolutionizing wireless communication through the power of light.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Technology</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">How It Works</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Specifications</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Research Papers</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Applications</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Smart Homes</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Healthcare</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Industrial</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Commercial</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2026 LiFi Technology. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
