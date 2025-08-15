export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-white text-[#1e3d59] mt-16 shadow-inner rounded-t-3xl overflow-hidden"
      role="contentinfo"
    >
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-gray-200">

        {/* Brand Column */}
        <div className="lg:border-r lg:pr-6 border-gray-200">
          <h2 className="text-2xl font-extrabold tracking-wide">
            Tracking<span className="text-[#ff6e40]">Odyssey</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#1e3d59]/80 max-w-sm">
            Real-time parcel tracking designed for speed, accuracy, and seamless SEO performance. Find what you need, faster.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="text-left lg:px-6 lg:border-r border-gray-200" aria-label="Footer Navigation">
          <h3 className="text-lg font-semibold text-[#ff6e40] mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Courier Partners", href: "/couriers" },
            ].map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:text-[#ff6e40] transition duration-200">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="text-left lg:text-left lg:px-6 lg:border-r border-gray-200">
          <h3 className="text-lg font-semibold text-[#ff6e40] mb-5">Contact Us</h3>
          <address className="not-italic text-sm leading-relaxed space-y-3 text-[#1e3d59]/80">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:support@trackingodyssey.com"
                className="text-blue-600 hover:text-[#ff6e40] transition"
              >
                support@trackingodyssey.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:text-[#ff6e40] transition"
              >
                +1 (234) 567-890
              </a>
            </p>
            <p>Karachi, Pakistan</p>
          </address>
        </div>

        {/* Legal */}
        <nav className="text-left lg:text-left lg:pl-6" aria-label="Legal Navigation">
          <h3 className="text-lg font-semibold text-[#ff6e40] mb-5">Legal</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <a href="/terms" className="hover:text-[#ff6e40] transition duration-200">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[#ff6e40] transition duration-200">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-[#1e3d59]/60 py-5 bg-gray-50">
        <p>
          © {year} <strong className="text-[#1e3d59]">Tracking Odyssey</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
