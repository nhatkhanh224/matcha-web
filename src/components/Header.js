"use client"; // Nếu Header có dùng state hoặc hooks

import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex justify-between px-10 py-6 items-center bg-white shadow-md sticky top-0 z-10">
      <Link href="/">
          <h2 className="text-3xl font-bold text-green-700">MatchaStore</h2>
        </Link>
      <div className="flex gap-6 text-lg font-medium text-green-700">
        <Link href="/">
          <span className="cursor-pointer hover:text-green-900">Trang Chủ</span>
        </Link>
        <Link href="/about_us/detail">
          <span className="cursor-pointer hover:text-green-900">
            Giới Thiệu
          </span>
        </Link>
        <Link href="/product/detail">
          <span className="cursor-pointer hover:text-green-900">Sản Phẩm</span>
        </Link>
        <Link href="/news/detail">
          <span className="cursor-pointer hover:text-green-900">Tin Tức</span>
        </Link>
        <Link href="/cart/detail">
          <span className="cursor-pointer hover:text-green-900">Giỏ Hàng</span>
        </Link>
      </div>
    </nav>
  );
}
