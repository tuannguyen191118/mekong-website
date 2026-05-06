import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Mekong Design & Printing",
  description:
    "Giải pháp thiết kế và in ấn bao bì chuyên nghiệp: hộp giấy, túi giấy, tem nhãn, catalogue, poster, bao bì thực phẩm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}