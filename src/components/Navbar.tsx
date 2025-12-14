import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-gray-800/30">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-5 px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-all group-hover:scale-105">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">Workspace</span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </Link>
          </li>
          <li>
            <a href="#Cities" className="text-gray-300 hover:text-white transition-colors font-medium">
              Cities
            </a>
          </li>
          <li>
            <a href="#Fresh-Space" className="text-gray-300 hover:text-white transition-colors font-medium">
              Offices
            </a>
          </li>
          <li>
            <Link to="/check-booking" className="text-gray-300 hover:text-white transition-colors font-medium">
              My Booking
            </Link>
          </li>
        </ul>

        <Link
          to="/check-booking"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="hidden sm:inline">Check Booking</span>
        </Link>
      </div>
    </nav>
  );
}
