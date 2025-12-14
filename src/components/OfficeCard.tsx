import { Office } from "../types/type";

export default function OfficeCard({ office }: OfficeCardProps) {
  const baseURL = "http://127.0.0.1:8000/storage";

  return (
    <div className="card group">
      <div className="flex flex-col rounded-3xl border-2 border-gray-800 bg-gradient-to-br from-gray-900/80 to-gray-900/40 overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2">
        <div className="thumbnail-container relative w-full h-[260px] overflow-hidden">
          <div className="absolute top-5 left-5 z-10 flex items-center gap-3">
            <span className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 backdrop-blur-md font-bold text-sm text-white shadow-lg shadow-violet-500/30">Popular</span>
            <span className="px-4 py-2 rounded-xl bg-gray-900/90 backdrop-blur-md font-bold text-sm text-white flex items-center gap-2 shadow-lg">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {office.rating}
            </span>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40"></div>

          <img src={`${baseURL}/${office.thumbnail}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={office.name} />
        </div>

        <div className="card-detail-container flex flex-col p-7 gap-5">
          <h3 className="line-clamp-2 font-bold text-2xl text-white h-[64px] group-hover:text-violet-300 transition-colors leading-tight">{office.name}</h3>

          <div className="flex items-center justify-between pb-5 border-b border-gray-800/50">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-1.5 font-medium">Starting from</span>
              <p className="font-bold text-3xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Rp {(office.price / 1000000).toFixed(1)}M</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-xs text-gray-500 mb-1.5 font-medium">Duration</span>
              <div className="flex items-center gap-2">
                <p className="font-bold text-2xl text-white">{office.duration}</p>
                <span className="text-gray-400 text-sm font-medium">days</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-violet-500/10">
                <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-300">{office.city.name}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 transition-colors" title="High-speed WiFi">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 hover:text-violet-400 transition-colors" title="Secure">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OfficeCardProps {
  office: Office;
}
