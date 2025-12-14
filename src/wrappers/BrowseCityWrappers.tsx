import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import { City } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BrowseCity() {
  const [cities, setCities] = useState<City[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/cities`, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        console.log("Cities data:", response.data);
        // Handle both response structures: {data: [...]} or {"0": [...]}
        const citiesData = response.data.data || response.data["0"] || response.data;
        setCities(Array.isArray(citiesData) ? citiesData : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
        setError(error.message || "Failed to load cities");
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-red-400 text-lg">Failed to load cities</p>
          <p className="text-gray-500 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }
  return (
    <section id="Cities" className="py-24 px-6 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-bold text-5xl md:text-6xl text-white mb-4">Explore Cities</h2>
            <p className="text-gray-400 text-xl font-light">Find your perfect location</p>
          </div>
          <a
            href="#Fresh-Space"
            className="hidden md:inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-gray-700 hover:border-violet-500/50 bg-gray-900/30 hover:bg-gray-900/50 text-gray-200 hover:text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>View All Offices</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <div className="swiper w-full">
          <Swiper direction="horizontal" spaceBetween={32} slidesPerView="auto" className="!pb-4">
            {cities.map((city) => (
              <SwiperSlide key={city.id} className="!w-fit">
                <Link to={`/city/${city.slug}`}>
                  <CityCard city={city}></CityCard>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
