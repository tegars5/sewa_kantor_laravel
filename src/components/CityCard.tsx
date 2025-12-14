import { City } from "../types/type";

export default function CityCard({ city }: CityCardProps) {
  const baseURL = "http://127.0.0.1:8000/storage";
  return (
    <div className="card group cursor-pointer">
      <div className="relative flex shrink-0 w-[300px] h-[400px] rounded-3xl overflow-hidden border-2 border-gray-800 hover:border-violet-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-violet-500/20">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

        {/* Decorative gradient orb */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl group-hover:bg-violet-500/30 transition-all duration-500"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-end w-full h-full p-8 z-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/20 backdrop-blur-md border border-violet-500/30">
              <svg className="w-4 h-4 text-violet-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-violet-200">{city.officeSpaces_count} offices</span>
            </div>
          </div>
          <h3 className="font-bold text-3xl text-white mb-2 group-hover:text-violet-300 transition-colors">{city.name}</h3>
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <p className="text-sm font-medium">Explore workspaces</p>
          </div>
        </div>

        {/* Image */}
        <img src={`${baseURL}/${city.photo}`} className="absolute w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={city.name} />
      </div>
    </div>
  );
}

interface CityCardProps {
  city: City;
}
