"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileCTA from "../../components/MobileCTA";

const categories = [
  "Tất cả",
  "Hộp giấy",
  "Bao bì thực phẩm",
  "Tem nhãn",
  "Túi giấy",
];

const products = [
  {
    name: "Hộp mỹ phẩm cao cấp",
    category: "Hộp giấy",
    desc: "Thiết kế hộp giấy sang trọng dành cho mỹ phẩm và quà tặng thương hiệu.",
    image:
      "/images/products/hop-my-pham.jpg",
  },
  {
    name: "Bao bì thực phẩm",
    category: "Bao bì thực phẩm",
    desc: "Bao bì thực phẩm phong cách hiện đại, phù hợp cafe và F&B.",
    image:
      "/images/products/bao-bi-ca-phe.png",
  },
  {
    name: "Tem nhãn chai lọ",
    category: "Tem nhãn",
    desc: "Tem nhãn sắc nét, chống nước, phù hợp chai lọ mỹ phẩm.",
    image:
      "/images/products/tem-nhan.jpg",
  },
  {
    name: "Túi giấy thương hiệu",
    category: "Túi giấy",
    desc: "Túi giấy thương hiệu dành cho thời trang và retail.",
    image:
      "/images/products/tui-giay.jpg",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [selectedProduct, setSelectedProduct] =useState<(typeof products)[number] | null>(null);
  const filteredProducts =
    activeCategory === "Tất cả"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
  <main className="min-h-screen bg-[#f7f7f4] text-slate-900 antialiased">
    <Header />

    <section className="p-5 md:p-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Products
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-950 md:text-6xl">
            Thư viện sản phẩm
          </h1>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl border px-4 py-3 text-sm font-extrabold uppercase transition ${
                  isActive
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
             <button
                     key={product.name}
                     onClick={() => setSelectedProduct(product)}
                     className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
             >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-5">
                <p className="text-sm font-bold uppercase text-orange-500">
                  {product.category}
                </p>

                <h2 className="mt-2 text-xl font-black text-slate-950">
                  {product.name}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </div>
      </section>
    <Footer />
    <MobileCTA />
      {selectedProduct && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
    <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
      
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg"
      >
        <X size={22} />
      </button>

      <div className="grid md:grid-cols-2">
        
        <div className="h-[320px] md:h-[700px]">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-7 md:p-10">
          
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            {selectedProduct.category}
          </p>

          <h2 className="mt-3 text-4xl font-black text-slate-950">
            {selectedProduct.name}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {selectedProduct.desc}
          </p>

          <div className="mt-8 rounded-2xl bg-[#f7f7f4] p-6">
            
            <h3 className="text-lg font-black text-slate-950">
              Tùy chỉnh theo yêu cầu:
            </h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Kích thước riêng theo sản phẩm</li>
              <li>• Chất liệu giấy / carton / kraft</li>
              <li>• In offset chất lượng cao</li>
              <li>• Ép kim, UV, cán màng</li>
            </ul>

          </div>

          <button className="mt-8 w-full rounded-xl bg-orange-500 px-6 py-4 font-extrabold uppercase text-white">
            Nhận báo giá sản phẩm này
          </button>

        </div>
      </div>
    </div>
  </div>
)}
    </main>
  );
}