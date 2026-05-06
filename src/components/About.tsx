import { CheckCircle2 } from "lucide-react";

export default function About() {
  const bullets = [
    "Xưởng sản xuất trực tiếp – Không qua trung gian",
    "Giá cả cạnh tranh – Tối ưu chi phí",
    "Chất lượng đảm bảo – Kiểm soát chặt chẽ",
    "Giao hàng nhanh – Đúng tiến độ",
    "Tư vấn 24/7 – Hỗ trợ tận tâm",
  ];

  return (
    <section
      id="giới-thiệu"
      className="mx-auto grid max-w-[1500px] gap-8 px-5 py-10 md:grid-cols-2 md:px-8"
    >
      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          Về Mekong
        </p>

        <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
          Xưởng sản xuất trực tiếp <br />
          Uy tín – Chất lượng – Tận tâm
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-700">
          Mekong Design & Printing là công ty chuyên thiết kế và in ấn bao bì,
          hộp giấy, tem nhãn, túi giấy, poster, catalogue... với hệ thống máy
          móc hiện đại và đội ngũ nhân sự giàu kinh nghiệm.
        </p>

        <div className="mt-6 space-y-4">
          {bullets.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm">
              <CheckCircle2 className="mt-0.5 text-orange-500" size={20} />
              <span className="leading-6 text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop"
          alt="Xưởng in Mekong"
          className="h-[360px] w-full object-cover"
        />

        <div className="grid grid-cols-2 border-t border-slate-200">
          <div className="p-5">
            <p className="text-3xl font-black text-orange-500">5000+</p>
            <p className="mt-1 text-sm text-slate-600">Dự án đã hoàn thành</p>
          </div>

          <div className="border-l border-slate-200 p-5">
            <p className="text-3xl font-black text-orange-500">99%</p>
            <p className="mt-1 text-sm text-slate-600">Khách hàng hài lòng</p>
          </div>
        </div>
      </div>
    </section>
  );
}