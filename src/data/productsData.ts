export const products = [
  {
    slug: "hop-my-pham",
    name: "Hộp mỹ phẩm cao cấp",
    category: "Hộp giấy",
    desc: "Thiết kế hộp giấy sang trọng dành cho mỹ phẩm và quà tặng thương hiệu.",
    image: "/images/products/hop-my-pham.jpg",
  },
  {
    slug: "bao-bi-ca-phe",
    name: "Bao bì cà phê",
    category: "Bao bì thực phẩm",
    desc: "Bao bì thực phẩm phong cách hiện đại, phù hợp cafe và F&B.",
    image: "/images/products/bao-bi-ca-phe.jpg",
  },
  {
    slug: "tem-nhan-chai-lo",
    name: "Tem nhãn chai lọ",
    category: "Tem nhãn",
    desc: "Tem nhãn sắc nét, chống nước, phù hợp chai lọ mỹ phẩm.",
    image: "/images/products/tem-nhan.jpg",
  },
  {
    slug: "tui-giay-thuong-hieu",
    name: "Túi giấy thương hiệu",
    category: "Túi giấy",
    desc: "Túi giấy thương hiệu dành cho thời trang và retail.",
    image: "/images/products/tui-giay.jpg",
  },
];

export type Product = (typeof products)[number];