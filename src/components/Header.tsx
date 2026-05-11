"use client";

import { useState } from "react";
import { Menu, Send, X } from "lucide-react";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="leading-none">
      <div
        className={`font-serif text-[38px] tracking-[0.08em] ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        m<span className="text-orange-500">e</span>kong
      </div>
      <div
        className={`-mt-1 text-xs tracking-[0.16em] ${
          light ? "text-white/70" : "text-slate-700"
        }`}
      >
        Design & Printing
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
  {
    label: "Trang chủ",
    href: "/",
  },

  {
    label: "Giới thiệu",
    href: "/#giới-thiệu",
  },

  {
    label: "Sản phẩm",
    href: "/products",
  },

  {
    label: "Dịch vụ",
    href: "/services",
  },

  {
    label: "Đối tác",
    href: "/#đối-tác",
  },

  {
    label: "Liên hệ",
    href: "/#liên-hệ",
  },
];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-3 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-10 text-sm font-bold uppercase md:flex">
          {menuItems.map((item, index) => (
  <a
    key={item.label}
              href={item.href}
              className={
                index === 0
                  ? "text-orange-500"
                  : "text-slate-900 hover:text-orange-500"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#liên-hệ"
          className="hidden items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-orange-500/20 md:flex"
        >
          Nhận báo giá ngay <Send size={15} />
        </a>

        <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {openMenu && (
        <div className="grid gap-3 border-t bg-white px-5 py-4 text-sm font-bold uppercase md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpenMenu(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export { Logo };