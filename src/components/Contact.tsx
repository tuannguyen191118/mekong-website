import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="liên-hệ"
      className="mx-auto max-w-[1500px] px-5 py-10 md:px-8"
    >
      <div className="grid gap-6 md:grid-cols-[58%_42%]">
        {/* LEFT */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-orange-500">
            Liên hệ với chúng tôi
          </p>

          <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
            Nhận tư vấn & báo giá nhanh
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Hãy để Mekong đồng hành cùng doanh nghiệp của bạn trong
            thiết kế và sản xuất bao bì chuyên nghiệp.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* INFO */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="font-bold text-slate-950">Hotline</p>
                  <p className="mt-1 text-slate-600">
                    0901 123 456
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="font-bold text-slate-950">Email</p>
                  <p className="mt-1 text-slate-600">
                    info@mekongprinting.vn
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="font-bold text-slate-950">
                    Địa chỉ xưởng
                  </p>

                  <p className="mt-1 leading-7 text-slate-600">
                    123 Đường số 7, P. Hiệp Bình Phước,
                    TP. Thủ Đức, TP.HCM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                  <Clock size={22} />
                </div>

                <div>
                  <p className="font-bold text-slate-950">
                    Giờ làm việc
                  </p>

                  <p className="mt-1 leading-7 text-slate-600">
                    Thứ 2 – Thứ 7: 8:00 – 17:30
                    <br />
                    Chủ nhật: 8:00 – 12:00
                  </p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Họ và tên *"
                className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Số điện thoại *"
                className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email *"
                className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500"
              />

              <select className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500">
                <option>Loại sản phẩm cần in</option>
                <option>Hộp giấy</option>
                <option>Bao bì thực phẩm</option>
                <option>Tem nhãn</option>
                <option>Túi giấy</option>
                <option>Poster</option>
              </select>

              <textarea
                placeholder="Nội dung yêu cầu *"
                className="min-h-[140px] rounded-xl border border-slate-300 p-4 outline-none transition focus:border-orange-500"
              />

              <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-extrabold uppercase text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600">
                <Send size={18} />
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="h-full min-h-[500px] bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  );
}