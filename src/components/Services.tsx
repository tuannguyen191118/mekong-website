import { services } from "../data/siteData";

export default function Services() {
  return (
    <section
      id="dịch-vụ"
      className="mx-auto max-w-[1500px] px-5 py-10 md:px-8"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
            Dịch vụ của chúng tôi
          </p>

          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            Giải pháp in ấn & bao bì toàn diện
          </h2>

          <p className="mt-3 max-w-2xl text-slate-600 leading-7">
            Mekong Design & Printing cung cấp đa dạng giải pháp thiết kế,
            in ấn và sản xuất bao bì chuyên nghiệp cho doanh nghiệp,
            thương hiệu và cửa hàng trên toàn quốc.
          </p>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`
                  group border-slate-200 bg-white p-6 transition-all duration-300 hover:bg-orange-50
                  ${index % 4 !== 3 ? "lg:border-r" : ""}
                  ${index < 4 ? "lg:border-b" : ""}
                  ${index % 2 !== 1 ? "sm:border-r lg:border-r" : ""}
                  ${index < 6 ? "sm:border-b lg:border-b" : ""}
                `}
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition-all duration-300 group-hover:bg-orange-500">
                  <Icon
                    size={30}
                    className="text-orange-500 transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="text-lg font-extrabold text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>

                <button className="mt-5 flex items-center gap-2 text-sm font-bold uppercase text-orange-500">
                  Xem thêm →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}