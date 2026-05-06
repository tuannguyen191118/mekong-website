"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Palette,
  Printer,
  Truck,
  Phone,
  Eye,
} from "lucide-react";

function ProductMockup() {
  return (
    <div className="relative h-full min-h-[260px] w-full">
      <div className="absolute bottom-8 left-4 h-24 w-44 rounded-md bg-[#101820] shadow-2xl md:left-8 md:h-28 md:w-52 flex items-center justify-center text-orange-400 font-bold">
        mekong
      </div>

      <div className="absolute bottom-20 left-36 h-40 w-28 rounded-sm bg-[#b98343] shadow-xl md:left-48 md:h-44 md:w-32 flex items-center justify-center text-slate-900 font-serif">
        mekong
      </div>

      <div className="absolute bottom-14 left-[250px] hidden h-40 w-24 rounded-sm border bg-white shadow-xl md:flex items-center justify-center text-xs">
        MEKONG
      </div>

      <div className="absolute bottom-8 right-10 h-44 w-28 rounded bg-[#181818] shadow-2xl border border-orange-900/40 md:right-24 md:h-52 md:w-32 flex items-center justify-center text-orange-400 text-xs">
        PREMIUM
      </div>

      <div className="absolute bottom-6 right-0 h-24 w-36 rounded bg-[#090909] shadow-xl md:w-44" />

      <div className="absolute bottom-6 left-[300px] hidden h-24 w-20 rounded bg-white shadow-xl md:flex items-center justify-center text-[10px]">
        Cup
      </div>

      <div className="absolute bottom-6 left-[385px] hidden h-28 w-24 rounded bg-[#a5a070] shadow-xl md:flex items-center justify-center text-xs">
        Natural
      </div>
    </div>
  );
}

export default function Hero() {
  const features = [
    [Factory, "Xưởng sản xuất", "trực tiếp"],
    [Palette, "Thiết kế sáng tạo", "theo yêu cầu"],
    [Printer, "In ấn sắc nét", "công nghệ hiện đại"],
    [Truck, "Giao hàng nhanh", "toàn quốc"],
  ];

  return (
    <section
      id="trang-chủ"
      className="relative overflow-hidden bg-white bg-[radial-gradient(circle_at_top_left,rgba(243,154,30,0.08),transparent_35%)]"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[62%] bg-[linear-gradient(90deg,rgba(255,255,255,0.96),rgba(255,255,255,0.42),rgba(255,255,255,0.02)),url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center md:block" />

      <div className="relative mx-auto grid min-h-[620px] max-w-[1500px] grid-cols-1 px-5 md:grid-cols-[45%_55%] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 flex flex-col justify-center py-14"
        >
          <p className="mb-4 text-lg font-extrabold uppercase text-orange-500">
            Giải pháp toàn diện
          </p>

          <h1 className="max-w-[720px] text-5xl font-black leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
            THIẾT KẾ & IN ẤN{" "}
            <span className="text-orange-500">BAO BÌ CHUYÊN NGHIỆP</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
            Mekong cung cấp giải pháp bao bì tối ưu cho doanh nghiệp. Từ thiết
            kế sáng tạo – in ấn chất lượng – sản xuất trực tiếp tại xưởng.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {features.map(([Icon, title, desc]) => (
              <div key={title as string} className="flex items-center gap-3">
                <Icon className="text-slate-950" size={32} />
                <div>
                  <b className="block text-sm">{title as string}</b>
                  <span className="text-xs text-slate-600">
                    {desc as string}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#liên-hệ"
              className="flex items-center justify-center gap-2 rounded-md bg-orange-500 px-8 py-4 font-extrabold uppercase text-white shadow-xl shadow-orange-500/20"
            >
              <Phone size={18} /> Nhận báo giá ngay
            </a>

            <a
              href="#sản-phẩm"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-slate-900 bg-white px-8 py-4 font-extrabold uppercase text-slate-900"
            >
              <Eye size={18} /> Xem mẫu sản phẩm
            </a>
          </div>
        </motion.div>

        <div className="relative z-10 flex items-end pb-10 md:pb-20">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}