"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Hàm format tiền VND
const toVND = (num) =>
  num.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

const demoCartProducts = [
  {
    id: 1,
    name: "Bột Matcha Latte (500gr)",
    price: 299000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/Ban-sao-cua-n-13-510x510.png",
    qty: 1,
  },
  {
    id: 2,
    name: "BỘT TRÀ XANH JASMINE ( Hương Nhài)",
    price: 199000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/75-510x510.png",
    qty: 2,
  },
  {
    id: 3,
    name: "Bột Matcha Latte",
    price: 149000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/2023/10/41-510x510.png?auto=format&fit=crop&w=800&q=60",
    qty: 1,
  },
];

const recommended = [
  {
    id: 4,
    name: "Bột Matcha Latte (500gr)",
    price: 299000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/Ban-sao-cua-n-13-510x510.png",
  },
  {
    id: 5,
    name: "BỘT TRÀ XANH JASMINE",
    price: 199000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/75-510x510.png",
  },
  {
    id: 6,
    name: "Bột Matcha Latte",
    price: 149000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/2023/10/41-510x510.png?auto=format&fit=crop&w=800&q=60",
  },
];

const news = [
   {
    id: 1,
    title: "5 Lợi Ích Khi Uống Matcha Mỗi Ngày",
    image:
      "https://file.hstatic.net/200000076583/file/cong-dung-cua-bot-matcha-tra-xanh_b296cb9dc8a44ff5a45ef0eb247a38f6.jpg",
  },
  {
    id: 2,
    title: "Cách Làm Matcha Latte Ngon Như Quán",
    image:
      "https://cdn.tgdd.vn/2021/07/CookProduct/thu1200(1)-1200x676.jpg",
  },
  {
    id: 3,
    title: "Cách chọn mua matcha",
    image:
      "https://bizweb.dktcdn.net/100/290/576/files/3-buoc-de-nhanh-chong-phan-biet-chat-luong-bot-tra-xanh-matcha1-800x400.jpg?v=1624034307785",
  },
];

export default function CartDemo() {
  const [cart, setCart] = useState(demoCartProducts);
  const router = useRouter();

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(1, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center rounded-2xl text-white py-24 px-6 shadow-lg mb-12"
        style={{
          backgroundImage: `url('https://uji-matcha.vn/wp-content/uploads/2017/08/home1_slide3-min-1024x424.jpg')`,
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl max-w-2xl text-center">
          Giỏ Hàng Của Bạn
        </h1>
        <p className="mt-4 text-lg max-w-xl drop-shadow-md text-center mx-auto">
          Hãy kiểm tra lại sản phẩm trước khi thanh toán
        </p>
      </section>

      {/* Cart Items */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        <div className="lg:w-2/3 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-green-700 text-lg">
                    {item.name}
                  </h2>
                  <p className="text-gray-700 mt-1">{toVND(item.price)}</p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="px-2 py-1 bg-green-100 text-green-700 rounded hover:bg-green-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 bg-green-50 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Tóm Tắt Đơn Hàng
          </h2>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Số sản phẩm:</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>Tổng cộng:</span>
            <span className="font-bold">{toVND(total)}</span>
          </div>

          <button className="mt-6 w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition" onClick={() => {
                  router.push("/payment/detail")
                }}>
            Thanh Toán
          </button>
        </div>
      </div>

      {/* Recommended Products */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Gợi Ý Cho Bạn
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommended.map((p) => (
            <Link key={p.id} href={`/product/detail`}>
              <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <img src={p.image} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-700">
                    {p.name}
                  </h3>
                  <p className="text-green-800 font-bold mt-2">
                    {toVND(p.price)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section id="news" className="px-10 py-20 bg-green-50">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          Tin Tức Matcha
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((n) => (
            <Link key={n.id} href={`/news/detail`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer">
                <img src={n.image} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{n.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
