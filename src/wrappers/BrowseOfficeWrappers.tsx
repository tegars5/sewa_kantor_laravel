import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import axios from "axios";
import { Office } from "../types/type";
import { Link } from "react-router-dom";

export default function BrowseOfficeWrappers() {
  const [offices, setCities] = useState<Office[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/offices`, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        console.log("Offices data:", response.data);
        // Handle response structure
        const officesData = response.data.data || response.data;
        setCities(Array.isArray(officesData) ? officesData : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching offices:", error);
        setError(error.message || "Failed to load offices");
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
          <p className="text-red-400 text-lg">Failed to load offices</p>
          <p className="text-gray-500 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="Fresh-Space" className="py-24 px-6 bg-gradient-to-b from-purple-950/5 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-5xl md:text-6xl text-white mb-6">Featured Workspaces</h2>
          <p className="text-gray-400 text-xl font-light">Handpicked spaces for your productivity</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {offices.map((office) => (
            <Link key={office.id} to={`/office/${office.slug}`}>
              <OfficeCard office={office}></OfficeCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
