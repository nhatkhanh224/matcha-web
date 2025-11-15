"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Hàm format tiền VND
const toVND = (num) =>
  num.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

const cartItems = [
  { id: 1, name: "Trà Matcha Ceremonial Cao Cấp", price: 299000, qty: 2 },
  { id: 2, name: "Matcha Hữu Cơ Hằng Ngày", price: 199000, qty: 1 },
  { id: 3, name: "Bột Matcha Latte", price: 149000, qty: 3 },
  { id: 4, name: "Bột Matcha Latte (500gr)", price: 209000, qty: 3 },
  { id: 5, name: "Bột Matcha Latte", price: 149000, qty: 3 },
];

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    note: "",
    paymentMethod: "card",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Hiển thị modal thành công
    setShowModal(true);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 30000; // phí ship cố định VND
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 font-sans text-gray-800">

      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Thanh Toán</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Form thông tin khách hàng */}
        <section className="bg-green-50 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Thông Tin Giao Hàng & Thanh Toán</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={form.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-green-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-green-300 rounded-lg"
            />
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={form.address}
              onChange={handleChange}
              className="w-full p-3 border border-green-300 rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="Thành phố"
                value={form.city}
                onChange={handleChange}
                className="w-full p-3 border border-green-300 rounded-lg"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Mã bưu điện"
                value={form.postalCode}
                onChange={handleChange}
                className="w-full p-3 border border-green-300 rounded-lg"
              />
            </div>
            <input
              type="text"
              name="country"
              placeholder="Quốc gia"
              value={form.country}
              onChange={handleChange}
              className="w-full p-3 border border-green-300 rounded-lg"
            />

            {/* Ghi chú */}
            <textarea
              name="note"
              placeholder="Ghi chú đơn hàng (tùy chọn)"
              value={form.note}
              onChange={handleChange}
              className="w-full p-3 border border-green-300 rounded-lg"
            />

            {/* Phương thức thanh toán */}
            <div className="mt-4">
              <h3 className="font-semibold text-green-700 mb-2">Phương Thức Thanh Toán</h3>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={form.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  Thẻ tín dụng/Ghi nợ
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={form.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  Thanh toán khi nhận hàng
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={form.paymentMethod === "momo"}
                    onChange={handleChange}
                  />
                  Momo
                </label>
              </div>
            </div>
          </form>
        </section>

        {/* Tổng đơn hàng */}
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Giỏ Hàng Của Bạn</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.name} x {item.qty}</span>
                <span className="font-bold text-green-800">{toVND(item.price * item.qty)}</span>
              </div>
            ))}
          </div>

          {/* Tổng cộng */}
          <div className="mt-6 border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span>{toVND(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển</span>
              <span>{toVND(shipping)}</span>
            </div>
            <div className="flex justify-between font-bold text-green-800 text-lg">
              <span>Tổng cộng</span>
              <span>{toVND(total)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-6 w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition"
          >
            Đặt Hàng
          </button>
        </section>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-lg">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Đặt Hàng Thành Công!</h2>
            <p className="text-gray-700 mb-6">Sản phẩm Matcha của bạn sẽ được giao sớm nhất.</p>
            <button
              onClick={() => router.push("/")}
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition font-bold"
            >
              Quay về Trang Chủ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
