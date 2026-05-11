"use client";

import { useState } from "react";
import Link from "next/link";
import { services } from "../data/siteData";
import { ArrowRight, X } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] =
    useState<(typeof services)[number] | null>(null);

  return (
    <>
      <section
        id="sản-phẩm"
        className="bg-[#f7f7f4] px-5 py-14 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-[1500px]">
          
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            
            <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
              Dịch vụ của chúng tôi
            </p>

            <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              
              <div className="max-w-4xl">
                <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                  Giải pháp in ấn & bao bì toàn diện
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Mekong Design & Printing cung cấp đa dạng giải pháp thiết kế,
                  in ấn và sản xuất bao bì chuyên nghiệp cho doanh nghiệp,
                  thương hiệu và cửa hàng trên toàn quốc.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-extrabold uppercase text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1"
              >
                Xem tất cả dịch vụ
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <button
                    key={service.slug}
                    onClick={() => setSelectedService(service)}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    
                    <div className="relative h-56 overflow-hidden bg-slate-200">
                      
                      <img
                        src={`/images/products/${service.slug}-1.jpg`}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
                        <Icon size={28} />
                      </div>
                    </div>

                    <div className="p-6">
                      
                      <h3 className="text-2xl font-black text-slate-950">
                        {service.title}
                      </h3>

                      <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                        {service.desc}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 font-extrabold uppercase text-orange-500">
                        Xem thêm
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
          
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-2xl">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg"
            >
              <X size={22} />
            </button>

            <div className="grid md:grid-cols-[55%_45%]">
              
              <img
                src={`/images/products/${selectedService.slug}-1.jpg`}
                alt={selectedService.title}
                className="h-full min-h-[360px] w-full object-cover"
              />

              <div className="p-7 md:p-10">
                
                <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
                  Dịch vụ Mekong
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
                  {selectedService.title}
                </h2>

                <p className="mt-6 leading-8 text-slate-600">
                  {selectedService.desc}
                </p>

                <div className="mt-7 rounded-2xl bg-[#f7f7f4] p-5">
                  
                  <p className="font-black text-slate-950">
                    Mekong hỗ trợ:
                  </p>

                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    <li>• Thiết kế theo nhận diện thương hiệu</li>
                    <li>• In offset chất lượng cao</li>
                    <li>• Gia công ép kim / UV / cán màng</li>
                    <li>• Sản xuất số lượng nhỏ và lớn</li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  
                  <a
                    href="/products"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-extrabold uppercase text-white"
                  >
                    Xem sản phẩm
                  </a>

                  <a
                    href="/services"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 font-extrabold uppercase text-slate-950"
                  >
                    Chi tiết dịch vụ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}