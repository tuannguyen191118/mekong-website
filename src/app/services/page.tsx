"use client";

import { useSearchParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileCTA from "../../components/MobileCTA";
import Contact from "../../components/Contact";
import { services } from "../../data/siteData";
import { CheckCircle2, Phone } from "lucide-react";
import { Suspense, useMemo, useState } from "react";

function ServicesContent() {
  const searchParams = useSearchParams();
  const tabFromUrl = searchParams.get("tab");

  const defaultTab = services.find((item) => item.slug === tabFromUrl)?.slug || services[0].slug;

  const [activeTab, setActiveTab] = useState(defaultTab);

  const activeService = useMemo(() => {
    return services.find((item) => item.slug === activeTab) || services[0];
  }, [activeTab]);

  const ActiveIcon = activeService.icon;

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-slate-900 antialiased">
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-500">
            Dịch vụ Mekong
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            Giải pháp thiết kế & in ấn bao bì toàn diện
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Chọn từng nhóm dịch vụ để xem các mẫu bao bì, ấn phẩm và sản phẩm
            Mekong có thể thiết kế, in ấn và sản xuất cho doanh nghiệp của bạn.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#liên-hệ"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-extrabold uppercase text-white shadow-lg shadow-orange-500/20"
            >
              <Phone size={18} />
              Nhận báo giá
            </a>

            <a
              href="/#sản-phẩm"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-900 bg-white px-7 py-4 font-extrabold uppercase text-slate-900"
            >
              Xem mẫu sản phẩm
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <h2 className="mb-6 text-2xl font-black text-slate-950 md:text-3xl">
            Chọn nhóm dịch vụ
          </h2>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.slug;

              return (
                <button
                  key={service.slug}
                  onClick={() => setActiveTab(service.slug)}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl border px-3 py-3 text-center text-[12px] font-extrabold uppercase leading-tight transition md:text-sm ${
                    isActive
                      ? "border-orange-500 bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                      : "border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500"
                  }`}
                >
                  <Icon size={18} />
                  {service.title}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[360px_1fr]">
            <aside className="rounded-3xl bg-[#061827] p-7 text-white">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">
                <ActiveIcon size={32} />
              </div>

              <h3 className="mt-6 text-3xl font-black">
                {activeService.title}
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                {activeService.desc}
              </p>

              <div className="mt-6 space-y-4 text-sm">
                {[
                  "Tư vấn chất liệu phù hợp",
                  "Thiết kế theo nhận diện thương hiệu",
                  "In sắc nét, kiểm soát màu tốt",
                  "Sản xuất trực tiếp tại xưởng",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 text-orange-400" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#liên-hệ"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-6 py-4 font-extrabold uppercase text-white"
              >
                Yêu cầu báo giá
              </a>
            </aside>

            <div>
              <div className="mb-5">
                <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
                  Danh sách sản phẩm
                </p>

                <h3 className="mt-2 text-3xl font-black text-slate-950">
                  Các mẫu thuộc nhóm {activeService.title}
                </h3>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {activeService.products.map((product, index) => (
                  <div
                    key={product}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-200">
                      <img
                        src={`https://source.unsplash.com/700x500/?packaging,printing,${activeService.title}&sig=${activeService.slug}-${index}`}
                        alt={product}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                      <div className="absolute bottom-4 left-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase text-white">
                        {activeService.title}
                      </div>
                    </div>

                    <div className="p-5">
                      <h4 className="text-xl font-black text-slate-950">
                        {product}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        Thiết kế, in ấn và gia công theo kích thước, chất liệu,
                        số lượng và nhận diện thương hiệu của khách hàng.
                      </p>

                      <a
                        href="#liên-hệ"
                        className="mt-5 inline-flex font-extrabold uppercase text-orange-500"
                      >
                        Nhận tư vấn →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="p-10">Đang tải dịch vụ...</div>}>
      <ServicesContent />
    </Suspense>
  );
}