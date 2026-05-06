import {
  Headphones,
  Wrench,
  Settings,
  Users,
  Truck,
} from "lucide-react";

export default function Process() {
  const process = [
    {
      step: "01",
      title: "Tư vấn",
      desc: "Tiếp nhận yêu cầu, tư vấn giải pháp phù hợp.",
      icon: Headphones,
    },
    {
      step: "02",
      title: "Thiết kế",
      desc: "Thiết kế mẫu theo ý tưởng và nhận diện thương hiệu.",
      icon: Wrench,
    },
    {
      step: "03",
      title: "In mẫu",
      desc: "In mẫu test, duyệt màu sắc và chất liệu trước sản xuất.",
      icon: Settings,
    },
    {
      step: "04",
      title: "Sản xuất",
      desc: "Sản xuất hàng loạt, kiểm soát chất lượng từng công đoạn.",
      icon: Users,
    },
    {
      step: "05",
      title: "Giao hàng",
      desc: "Đóng gói cẩn thận và giao hàng đúng tiến độ.",
      icon: Truck,
    },
  ];

  return (
    <section className="mx-auto max-w-[1500px] px-5 py-10 md:px-8">
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 md:p-8">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
          Quy trình làm việc
        </p>

        <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
          Từ ý tưởng đến sản phẩm hoàn thiện
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {process.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="relative rounded-2xl border border-slate-200 bg-[#f7f7f4] p-5 text-center transition hover:-translate-y-1 hover:bg-orange-50"
              >
                <span className="text-sm font-black text-orange-500">
                  {item.step}
                </span>

                <div className="mx-auto my-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="font-extrabold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}