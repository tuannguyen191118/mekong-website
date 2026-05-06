import { Phone, Send } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-slate-200 bg-white shadow-2xl md:hidden">
      <a
        href="tel:0901123456"
        className="flex items-center justify-center gap-1 bg-orange-500 py-4 text-xs font-black uppercase text-white"
      >
        <Phone size={16} />
        Gọi ngay
      </a>

      <a
        href="#"
        className="flex items-center justify-center py-4 text-xs font-black uppercase text-orange-500"
      >
        Chat Zalo
      </a>

      <a
        href="#liên-hệ"
        className="flex items-center justify-center gap-1 bg-orange-500 py-4 text-xs font-black uppercase text-white"
      >
        <Send size={16} />
        Báo giá
      </a>
    </div>
  );
}