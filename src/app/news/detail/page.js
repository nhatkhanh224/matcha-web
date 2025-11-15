"use client";
import Link from "next/link";

const newsItem = {
  title: "5 Lợi Ích Khi Uống Matcha Mỗi Ngày",
  image: "https://bizweb.dktcdn.net/100/290/576/files/3-buoc-de-nhanh-chong-phan-biet-chat-luong-bot-tra-xanh-matcha1-800x400.jpg?v=1624034307785",
  date: "15 Tháng 11, 2025",
  author: "Matcha Store",
  content: [
    { type: "paragraph", text: "Matcha là bột trà xanh được nghiền mịn từ những lá trà được trồng và chế biến đặc biệt. Nó đã được sử dụng ở Nhật Bản hàng thế kỷ và nổi tiếng với màu xanh tươi, hương vị độc đáo và lợi ích sức khỏe." },
    { type: "heading", text: "Chất Chống Oxy Hóa" },
    { type: "paragraph", text: "Matcha giàu catechin, một loại chất chống oxy hóa giúp chống lại các gốc tự do trong cơ thể, hỗ trợ sức khỏe tổng thể." },
    { type: "heading", text: "Năng Lượng & Tập Trung" },
    { type: "paragraph", text: "Không giống cà phê, matcha cung cấp năng lượng ổn định và tinh thần minh mẫn nhờ caffeine tự nhiên kết hợp với L-theanine, giúp tăng sự tập trung mà không gây hồi hộp." },
    { type: "heading", text: "Thải Độc & Chuyển Hóa" },
    { type: "paragraph", text: "Uống matcha thường xuyên hỗ trợ thải độc, tăng cường trao đổi chất và hỗ trợ quản lý cân nặng." },
    { type: "heading", text: "Lịch Sử Matcha" },
    { type: "paragraph", text: "Matcha có nguồn gốc từ Trung Quốc nhưng được tinh chế và hoàn thiện tại Nhật Bản. Các samurai sử dụng nó để duy trì năng lượng lâu dài và nó trở thành trung tâm của các nghi lễ trà Nhật." },
    { type: "heading", text: "Các Loại Matcha Phổ Biến" },
    { type: "paragraph", text: "1. Ceremonial Grade: Chất lượng cao nhất, dùng trong nghi lễ trà truyền thống.\n2. Premium Grade: Tuyệt vời để làm latte hoặc uống hằng ngày.\n3. Culinary Grade: Thích hợp cho nướng bánh, sinh tố và nấu ăn." },
    { type: "heading", text: "Cách Pha Matcha" },
    { type: "paragraph", text: "1. Rây 1-2 muỗng cà phê bột matcha vào bát.\n2. Thêm 60ml nước nóng (~80°C).\n3. Đánh theo chuyển động zigzag cho đến khi tạo bọt.\n4. Thưởng thức nguyên chất hoặc thêm sữa để làm latte." },
    { type: "heading", text: "Lưu Trữ Matcha" },
    { type: "paragraph", text: "Bảo quản matcha trong hộp kín ở nơi mát, tối. Nên để tủ lạnh nếu lưu trữ lâu để giữ độ tươi và màu sắc." }
  ]
};

export default function NewsDetailDemo() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-800">

      {/* Banner */}
      <section className="w-full bg-cover bg-center rounded-2xl text-white py-24 px-6 shadow-lg mb-12"
        style={{ backgroundImage: `url('${newsItem.image}')` }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl max-w-2xl text-cente0">
          {newsItem.title}
        </h1>
      </section>

      {/* Meta info */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 mb-8">
        <span>Bởi <strong>{newsItem.author}</strong></span>
        <span>{newsItem.date}</span>
      </div>

      {/* Content */}
      <article className="prose prose-green max-w-none space-y-6">
        {newsItem.content.map((block, idx) => {
          if (block.type === "heading") {
            return <h3 key={idx} className="text-green-700 font-semibold text-2xl">{block.text}</h3>;
          }
          return <p key={idx}>{block.text}</p>;
        })}
      </article>

      {/* Image gallery / Carousel demo */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Thư Viện Matcha</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://cdnv2.tgdd.vn/mwg-static/common/Common/bia-matcha-1200x676.jpg" className="w-full h-48 object-cover rounded-xl shadow-lg" />
          <img src="https://bizweb.dktcdn.net/100/004/714/products/bot-matcha-ong-gia-mu-do.png?v=17525679923800" className="w-full h-48 object-cover rounded-xl shadow-lg" />
          <img src="https://images.getrecipekit.com/20240923154428-matcha-20frappuccino-20recipe.jpg?class=16x9" className="w-full h-48 object-cover rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Related News */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Tin Tức Liên Quan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/news/detail">
            <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Matcha_tea.jpg/1200px-Matcha_tea.jpg" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700">Cách Làm Matcha Latte</h3>
              </div>
            </div>
          </Link>
          <Link href="/news/detail">
            <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <img src="https://cdn.tgdd.vn/Files/2021/08/28/1378464/moi-la-voi-cong-thuc-lam-ca-phe-matcha-thom-ngon-khong-tuong-202108281217062018.jpg" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700">Matcha và Cà Phê</h3>
              </div>
            </div>
          </Link>
          <Link href="/news/detail">
            <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
              <img src="https://autoshop.com.vn/wp-content/uploads/2021/05/matcha-frappuccino.jpg" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-700">Top 5 Công Thức Matcha</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
