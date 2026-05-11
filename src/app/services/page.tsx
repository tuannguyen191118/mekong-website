"use client";
import { useState } from "react";
import { X } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileCTA from "../../components/MobileCTA";
import Contact from "../../components/Contact";
import {
  Palette,
  Printer,
  Scissors,
  PackageCheck,
  Layers,
  Truck,
  CheckCircle2,
  Phone,
} from "lucide-react";

const serviceGroups = [
  {
    title: "Tư vấn & thiết kế bao bì",
    desc: "Phân tích sản phẩm, định hướng chất liệu, kiểu dáng và thiết kế nhận diện bao bì phù hợp với thương hiệu.",
    image: "/images/products/tu-van.jpg",
    icon: Palette,
  },
  {
    title: "In ấn bao bì",
    desc: "In hộp giấy, túi giấy, tem nhãn, catalogue, poster và các ấn phẩm quảng cáo với màu sắc sắc nét.",
    image: "/images/products/in-an-bao-bi.jpg",
    icon: Printer,
  },
  {
    title: "Gia công sau in",
    desc: "Cán màng, ép kim, phủ UV, bế khuôn, dán hộp, tạo hiệu ứng cao cấp cho sản phẩm.",
    image: "/images/products/gia-cong-sau-in.jpg",
    icon: Scissors,
  },
  {
    title: "Sản xuất hộp & bao bì",
    desc: "Sản xuất hộp giấy, hộp carton, bao bì thực phẩm, túi giấy theo kích thước và số lượng yêu cầu.",
    image: "/images/products/san-xuat-hop-bao-bi.jpg",
    icon: PackageCheck,
  },
  {
    title: "Tư vấn chất liệu",
    desc: "Gợi ý chất liệu giấy, carton, kraft, decal phù hợp với ngân sách và mục đích sử dụng.",
    image: "/images/products/tu-van-chat-lieu.jpg",
    icon: Layers,
  },
  {
    title: "Đóng gói & giao hàng",
    desc: "Kiểm tra chất lượng, đóng gói cẩn thận và giao hàng đúng tiến độ cho khách hàng.",
    image: "/images/products/dong-goi-giao-hang.jpg",
    icon: Truck,
  },
];

const process = [
  "Tiếp nhận nhu cầu",
  "Tư vấn giải pháp",
  "Thiết kế / chỉnh file",
  "In mẫu kiểm tra",
  "Sản xuất hàng loạt",
  "Giao hàng",
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] =
  useState<(typeof serviceGroups)[number] | null>(null);
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-slate-900 antialiased">
      <Header />

      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 md:py-20">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-500">
            Dịch vụ Mekong
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
            Dịch vụ thiết kế, in ấn & sản xuất bao bì trọn gói
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Mekong đồng hành cùng doanh nghiệp từ ý tưởng bao bì ban đầu đến
            sản phẩm hoàn thiện: tư vấn, thiết kế, in mẫu, sản xuất và giao hàng.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lien-he"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-extrabold uppercase text-white shadow-lg shadow-orange-500/20"
            >
              <Phone size={18} />
              Nhận báo giá
            </a>

            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-900 bg-white px-7 py-4 font-extrabold uppercase text-slate-900"
            >
              Xem mẫu sản phẩm
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
            Chúng tôi làm gì
          </p>

          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            Giải pháp dịch vụ dành cho thương hiệu của bạn
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
  {serviceGroups.map((service) => {
    const Icon = service.icon;

    return (
      <button
        key={service.title}
        onClick={() => setSelectedService(service)}
        className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="relative h-56 overflow-hidden bg-slate-200">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
            <Icon size={28} />
          </div>
        </div>

        <div className="p-7">
          <h3 className="text-2xl font-black text-slate-950">
            {service.title}
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            {service.desc}
          </p>

          <span className="mt-5 inline-flex font-extrabold uppercase text-orange-500">
            Xem chi tiết →
          </span>
        </div>
      </button>
    );
  })}
</div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <div className="grid gap-8 rounded-3xl bg-[#061827] p-7 text-white md:grid-cols-[38%_62%] md:p-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-400">
              Quy trình làm việc
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Rõ ràng từ tư vấn đến giao hàng
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              Quy trình được thiết kế để khách hàng dễ theo dõi, kiểm soát chất
              lượng và hạn chế sai sót trong quá trình sản xuất.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-black text-orange-400">
                  0{index + 1}
                </p>

                <h3 className="mt-3 text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 py-12 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">
              Vì sao chọn Mekong?
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "Xưởng sản xuất trực tiếp, tối ưu chi phí",
                "Đội ngũ thiết kế hiểu bao bì và thương hiệu",
                "Kiểm soát màu sắc, chất liệu và tiến độ rõ ràng",
                "Hỗ trợ từ số lượng nhỏ đến sản xuất hàng loạt",
                "Tư vấn nhanh, báo giá rõ ràng, dễ làm việc",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 text-orange-500" size={20} />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              src="/images/products/hop-giay-1.jpg"
              alt="Dịch vụ in ấn bao bì Mekong"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="lien-he">
        <Contact />
      </section>
{selectedService && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-5">
    <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
      <button
        onClick={() => setSelectedService(null)}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg"
      >
        <X size={22} />
      </button>

      <div className="grid md:grid-cols-[55%_45%]">
        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="h-full min-h-[360px] w-full object-cover"
        />

        <div className="p-7 md:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Dịch vụ Mekong
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            {selectedService.title}
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            {selectedService.desc}
          </p>

          <div className="mt-6 rounded-2xl bg-[#f7f7f4] p-5">
            <p className="font-extrabold text-slate-950">
              Mekong hỗ trợ:
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              <li>• Tư vấn giải pháp phù hợp với sản phẩm</li>
              <li>• Thiết kế theo nhận diện thương hiệu</li>
              <li>• In ấn và gia công trực tiếp tại xưởng</li>
              <li>• Báo giá rõ ràng theo số lượng và chất liệu</li>
            </ul>
          </div>

          <a
            href="#lien-he"
            onClick={() => setSelectedService(null)}
            className="mt-7 inline-flex w-full justify-center rounded-xl bg-orange-500 px-6 py-4 font-extrabold uppercase text-white"
          >
            Nhận tư vấn dịch vụ này
          </a>
        </div>
      </div>
    </div>
  </div>
)}
      <Footer />
      <MobileCTA />
    </main>
  );
}