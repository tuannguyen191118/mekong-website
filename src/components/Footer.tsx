import { services } from "../data/siteData";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="bg-[#061827] text-white">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-5 py-12 md:grid-cols-5 md:px-8">
        <div>
          <Logo light />

          <p className="mt-4 text-sm leading-7 text-white/70">
            Giải pháp thiết kế & in ấn bao bì chuyên nghiệp.
            <br />
            Sáng tạo – Chất lượng – Uy tín.
          </p>
        </div>

        <div>
          <h3 className="font-extrabold uppercase">Dịch vụ</h3>

          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.slice(0, 7).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold uppercase">Về chúng tôi</h3>

          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Giới thiệu</li>
            <li>Năng lực xưởng</li>
            <li>Quy trình làm việc</li>
            <li>Sản phẩm tiêu biểu</li>
            <li>Đối tác</li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold uppercase">Hỗ trợ</h3>

          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Câu hỏi thường gặp</li>
            <li>Chính sách báo giá</li>
            <li>Chính sách giao hàng</li>
            <li>Chính sách bảo mật</li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold uppercase">Đăng ký nhận tin</h3>

          <p className="mt-4 text-sm leading-7 text-white/70">
            Nhận cập nhật mới nhất về sản phẩm, ưu đãi và giải pháp bao bì.
          </p>

          <div className="mt-4 flex">
            <input
              className="w-full rounded-l-xl border border-white/20 bg-transparent p-3 text-sm outline-none placeholder:text-white/40"
              placeholder="Nhập email"
            />

            <button className="rounded-r-xl bg-orange-500 px-5 text-sm font-bold text-white">
              Gửi
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © 2024 Mekong Design & Printing. All Rights Reserved.
      </div>
    </footer>
  );
}