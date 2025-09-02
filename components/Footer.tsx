import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-white text-[#1e3d59] mt-16 shadow-inner rounded-t-3xl overflow-hidden"
      role="contentinfo"
    >
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-gray-200">

        {/* Brand Column */}
        <div className="lg:border-r lg:pr-6 border-gray-200">
          <Link href="/" aria-label="Go to Tracking Odyssey homepage">
            <h2 className="text-2xl font-extrabold tracking-wide hover:text-orange-400 transition">
              Tracking<span className="text-orange-400">Odyssey</span>
            </h2>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-[#1e3d59]/80 max-w-sm">
            Real-time parcel tracking designed for speed, accuracy, and seamless SEO performance. Find what you need, faster.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="text-left lg:px-6 lg:border-r border-gray-200" aria-label="Footer Navigation">
          <h3 className="text-xl font-semibold text-orange-400 mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Courier Partners", href: "/couriers" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#ff6e40] transition duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>


        {/* Legal */}
        <nav className="text-left lg:pl-6" aria-label="Legal Navigation">
          <h3 className="text-lg font-semibold text-[#ff6e40] mb-5">Legal</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li>
              <Link href="/terms" className="hover:text-[#ff6e40] transition duration-200">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#ff6e40] transition duration-200">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-[#1e3d59]/60 py-5 border-t border-gray-200 shadow-md bg-white">
        <p>
          © {year} <strong className="text-[#1e3d59]">Tracking <span className='text-orange-400'>Odyssey</span></strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
