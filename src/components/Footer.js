"use client"; // Nếu Footer có dùng state hoặc hooks

import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* ========================= NEWSLETTER ========================== */}
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-3">
          Nhận Ưu Đãi Matcha Hàng Tuần
        </h2>
        <p className="text-gray-600 mb-6">
          Đăng ký email để nhận thông tin sản phẩm mới và mã giảm giá độc quyền.
        </p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Nhập email của bạn..."
            className="px-4 py-3 border border-gray-300 rounded-l-lg w-72"
          />
          <button className="px-6 bg-green-600 text-white rounded-r-lg hover:bg-green-700">
            Đăng ký
          </button>
        </div>
      </section>
      {/* HOTLINE */}
      <section className="py-16 text-center bg-green-100">
        <h2 className="text-3xl font-bold mb-3">Hotline Hỗ Trợ</h2>
        <p className="text-3xl text-green-700 font-bold">📞 0909 999 999</p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center bg-green-700 text-white">
        © 2025 MatchaStore — Cửa Hàng Matcha Nhật Bản Chính Hãng.
      </footer>
    </>
  );
}
