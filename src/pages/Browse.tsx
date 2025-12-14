import Navbar from "../components/Navbar";
import BrowseCityWrapper from "../wrappers/BrowseCityWrappers";
import BrowseOfficeWrappers from "../wrappers/BrowseOfficeWrappers";

export default function Browse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#0f0f1a] to-[#0A0A0A]">
      <Navbar></Navbar>

      {/* Hero Section - Modern Minimalist */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 backdrop-blur-md shadow-lg shadow-violet-500/5">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-lg shadow-violet-400/50"></div>
              <span className="text-sm font-semibold text-violet-200">Trusted by 500+ Companies Worldwide</span>
            </div>
          </div>

          {/* Hero Title */}
          <div className="text-center max-w-5xl mx-auto mb-14">
            <h1 className="text-7xl md:text-8xl font-extrabold mb-8 leading-[1.1]">
              <span className="bg-gradient-to-r from-white via-violet-100 to-white bg-clip-text text-transparent">Premium Workspace</span>
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-purple-300 to-violet-400 bg-clip-text text-transparent">for Modern Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">Discover exceptional office spaces designed to elevate productivity and inspire innovation. From startups to enterprises.</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <a
              href="#Fresh-Space"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-violet-500/25 hover:shadow-2xl hover:shadow-violet-500/40 hover:scale-105"
            >
              <span className="relative font-bold text-lg text-white">Browse Offices</span>
              <svg className="relative w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#Cities"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-gray-700 hover:border-violet-500/50 bg-gray-900/30 hover:bg-gray-900/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <span className="font-bold text-lg text-gray-200 hover:text-white transition-colors">Explore Cities</span>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto pt-12 border-t border-gray-800/50">
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">580M+</div>
              <div className="text-sm text-gray-500 font-medium">Square Feet</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-sm text-gray-500 font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">90+</div>
              <div className="text-sm text-gray-500 font-medium">Countries</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">139K+</div>
              <div className="text-sm text-gray-500 font-medium">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <BrowseCityWrapper></BrowseCityWrapper>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Why Choose Our Workspace?</h2>
            <p className="text-gray-400 text-xl font-light">Everything you need to scale your business</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-900 hover:to-violet-950/20 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">Privacy-First Design</h3>
              <p className="text-gray-400 leading-relaxed">Secure, private offices with enterprise-grade security systems and 24/7 access control.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-900 hover:to-violet-950/20 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">Flexible Access</h3>
              <p className="text-gray-400 leading-relaxed">Move in seamlessly with flexible terms and easy booking process for your team.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-900 hover:to-violet-950/20 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">Scalable Spaces</h3>
              <p className="text-gray-400 leading-relaxed">From small teams to entire departments, find spaces that grow with your business.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-900 hover:to-violet-950/20 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">Premium Amenities</h3>
              <p className="text-gray-400 leading-relaxed">Top-rated facilities with modern furniture, high-speed internet, and meeting rooms.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-900 hover:to-violet-950/20 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">Complimentary Services</h3>
              <p className="text-gray-400 leading-relaxed">Enjoy free coffee, snacks, and refreshments throughout your workday.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800/50 hover:border-violet-500/30 transition-all duration-500 hover:bg-gradient-to-br hover:from-gray-900 hover:to-violet-950/20 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 flex items-center justify-center mb-6 group-hover:from-violet-500/20 group-hover:to-purple-500/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">Business Growth</h3>
              <p className="text-gray-400 leading-relaxed">Join a thriving community of entrepreneurs and innovators driving success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <BrowseOfficeWrappers></BrowseOfficeWrappers>
    </div>
  );
}
