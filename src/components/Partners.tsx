import { partners } from "../data/siteData";

export default function Partners() {
  return (
    <section
      id="đối-tác"
      className="mx-auto max-w-[1500px] px-5 py-10 md:px-8"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          Đối tác tiêu biểu
        </p>

        <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
          Được tin tưởng bởi nhiều thương hiệu
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-[#f7f7f4] p-4 text-center text-sm font-black uppercase text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-500"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}