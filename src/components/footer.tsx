export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            EverTrust Realty
          </h3>
          <p className="text-sm leading-relaxed">
            Your trusted partner in mobile home sales.  
            Affordable, reliable, nationwide delivery.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/about" className="hover:text-green-400">About</a></li>
            <li><a href="/services" className="hover:text-green-400">Services</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 (302) 230-1063</li>
            <li>📧 info@evertrustrealty.com</li>
            <li>📍7189 4th Street
Houston, TX 77087 – USA</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h4 className="font-semibold text-white mb-3">Get Started</h4>
          <p className="text-sm mb-4">
            Looking for your next home?
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} EverTrust Realty. All rights reserved.
      </div>
    </footer>
  );
}
