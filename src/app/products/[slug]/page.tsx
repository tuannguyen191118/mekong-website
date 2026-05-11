import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import MobileCTA from "../../../components/MobileCTA";

import { products } from "../../../data/productsData";
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-black">Không tìm thấy sản phẩm</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f4] text-slate-900 antialiased">
      <Header />

      <section className="px-5 py-10 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight text-slate-950">
              {product.name}
            </h1>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              {product.desc}
            </p>

            <div className="mt-8 rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black">
                Thông tin sản phẩm
              </h2>

              <div className="mt-6 space-y-4 text-slate-600">
                <div>• Thiết kế theo nhận diện thương hiệu</div>
                <div>• In offset chất lượng cao</div>
                <div>• Gia công ép kim / UV / cán màng</div>
                <div>• Sản xuất số lượng nhỏ và lớn</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-orange-500 px-7 py-4 font-extrabold uppercase text-white">
                Nhận báo giá
              </button>

              <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-extrabold uppercase text-slate-950">
                Xem thêm sản phẩm
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  );
}