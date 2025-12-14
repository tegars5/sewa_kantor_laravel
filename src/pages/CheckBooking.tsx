import { useState } from "react";
import { z } from "zod";
import { BookingDetails } from "../types/type";
import { viewBookingSchema } from "../types/ValidationBooking";
import axios from "axios";

export default function CheckBooking() {
  const [formData, setFormData] = useState({
    phone_number: "",
    booking_trx_id: "",
  });

  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const [error, setError] = useState<string | null>(null);

  const apiBaseUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Validating form data :");
    const validation = viewBookingSchema.safeParse(formData);

    if (!validation.success) {
      console.log("Validation failed", validation.error.issues);
      setFormErrors(validation.error.issues);
      return;
    }
    console.log("Form data is valid. Submitting", formData);

    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${apiBaseUrl}/check-booking`,
        {
          ...formData,
        },
        {
          headers: {
            "X-API-KEY": apiKey,
          },
        }
      );

      console.log("We are checking your booking ", response.data.data);
      setBookingDetails(response.data.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("Error submitting form", error.message);
        setError(error.message);
      } else {
        console.error("Unexpected error", error);
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id="Banner" className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]">
        <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">Cek Detail Sewa Kantor</h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img src="assets/images/thumbnails/thumbnail-details-5.png" className="absolute w-full h-full object-cover object-top" alt="" />
      </div>
      <section id="Check-Booking" className="relative flex flex-col w-[930px] shrink-0 gap-[30px] mx-auto mb-[100px] z-20">
        <form onSubmit={handleSubmit} className="flex items-end rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[16px] bg-white">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name" className="font-semibold">
              ID Transaksi Sewa (TRX)
            </label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-violet-500">
              <img src="assets/images/icons/receipt-text-black.svg" className="w-6 h-6" alt="icon" />
              <input
                type="text"
                name="booking_trx_id"
                onChange={handleChange}
                value={formData.booking_trx_id}
                id="name"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Masukkan ID transaksi sewa"
              />
            </div>
            {formErrors.find((error) => error.path.includes("booking_trx_id")) && <p className="text-red-500">ID transaksi sewa wajib diisi</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="phone" className="font-semibold">
              Nomor HP
            </label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-violet-500">
              <img src="assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
              <input
                type="tel"
                name="phone_number"
                onChange={handleChange}
                value={formData.phone_number}
                id="phone"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Masukkan nomor yang terdaftar"
              />
            </div>
            {formErrors.find((error) => error.path.includes("phone_number")) && <p className="text-red-500">Nomor HP wajib diisi</p>}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="flex items-center justify-center rounded-full p-[12px_30px] gap-3 bg-violet-600 hover:bg-violet-700 disabled:opacity-60 disabled:cursor-not-allowed font-bold text-white transition-colors"
          >
            <span className="text-nowrap">{isLoading ? "Memeriksa..." : "Cek Sewa"}</span>
          </button>
        </form>
        {error && <div className="rounded-[16px] border border-red-200 bg-red-50 px-4 py-3 text-red-700">{error}</div>}
        {bookingDetails && (
          <div id="Result" className="grid grid-cols-2 gap-[30px]">
            <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                  <img src="assets/images/thumbnails/thumbnail-details-4.png" className="w-full h-full object-cover" alt="thumbnail" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl leading-[30px]">{bookingDetails.office.name}</p>
                  <div className="flex items-center gap-[6px]">
                    <img src="assets/images/icons/location.svg" className="w-6 h-6" alt="icon" />
                    <p className="font-semibold">{bookingDetails.office.city.name}</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">Data Penyewa</h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Nama Lengkap</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img src="assets/images/icons/security-user-black.svg" className="w-6 h-6" alt="icon" />
                    <p className="font-semibold">{bookingDetails.name}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Nomor HP</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img src="assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
                    <p className="font-semibold">{bookingDetails.phone_number}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Mulai Sewa</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img src="assets/images/icons/calendar-black.svg" className="w-6 h-6" alt="icon" />
                    <p className="font-semibold">{bookingDetails.started_at}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Selesai Sewa</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img src="assets/images/icons/calendar-black.svg" className="w-6 h-6" alt="icon" />
                    <p className="font-semibold">{bookingDetails.ended_at}</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center gap-3">
                <img src="assets/images/icons/shield-tick.svg" className="w-[30px] h-[30px]" alt="icon" />
                <p className="font-semibold leading-[28px]">Data sewa Anda aman bersama kami.</p>
              </div>
            </div>
            <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
              <h2 className="font-bold">Detail Transaksi</h2>
              <div className="flex flex-col gap-5">
                {bookingDetails.is_paid ? (
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Status Pembayaran</p>
                    <p className="rounded-full w-fit p-[6px_16px] bg-violet-600 font-bold text-sm leading-[21px] text-white">LUNAS</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Status Pembayaran</p>
                    <p className="rounded-full w-fit p-[6px_16px] bg-amber-500 font-bold text-sm leading-[21px] text-white">MENUNGGU</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="font-semibold">Booking TRX ID</p>
                  <p className="font-bold">{bookingDetails.booking_trx_id}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Duration</p>
                  <p className="font-bold">{bookingDetails.duration} Hari</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Total Amount</p>
                  <p className="font-bold text-[22px] leading-[33px] text-violet-600">Rp {bookingDetails.total_amount.toLocaleString("id")}</p>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <h2 className="font-bold">Fasilitas Tambahan</h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <img src="assets/images/icons/coffee.svg" className="w-[34px] h-[34px]" alt="icon" />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Minuman & Snack</p>
                    <p className="text-sm leading-[21px]">Biar kerja makin nyaman</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img src="assets/images/icons/group.svg" className="w-[34px] h-[34px]" alt="icon" />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Bantuan Setup</p>
                    <p className="text-sm leading-[21px]">Mulai kerja lebih cepat</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <a href="" className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[12px_20px] gap-3 bg-white font-semibold">
                <img src="assets/images/icons/call-black.svg" className="w-6 h-6" alt="icon" />
                <span>Hubungi Admin</span>
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
