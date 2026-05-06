"use client";

import { gallery } from "../data/siteData";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section
      id="sản-phẩm"
      className="mx-auto max-w-[1500px] px-5 py-10 md:px-8"
    >
      <div className="mb-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          Dự án tiêu biểu
        </p>

        <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
          Mẫu bao bì & sản phẩm thực tế
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600 leading-7">
          Khám phá các mẫu hộp giấy, bao bì thực phẩm, tem nhãn,
          túi giấy và thiết kế in ấn được Mekong thực hiện cho khách hàng.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {[
          "Tất cả",
          "Hộp giấy",
          "Bao bì",
          "Tem nhãn",
          "Túi giấy",
          "Poster",
        ].map((item, index) => (
          <button
            key={item}
            className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
              index === 0
                ? "bg-orange-500 text-white"
                : "border border-slate-300 bg-white hover:bg-orange-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-2xl ${
              index % 3 === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={`https://source.unsplash.com/800x800/?packaging,printing,box&sig=${index}`}
              alt={item}
              className="h-full min-h-[260px] w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
                Packaging Design
              </p>

              <h3 className="mt-2 text-xl font-black text-white">
                {item}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}