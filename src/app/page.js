import Link from "next/link";
import Header from "../components/Header";
const topProducts = [
  {
    id: 1,
    name: "Bột Matcha Latte (500gr)",
    price: 299000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/Ban-sao-cua-n-13-510x510.png",
  },
  {
    id: 2,
    name: "BỘT TRÀ XANH JASMINE ( Hương Nhài)",
    price: 199000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/75-510x510.png",
  },
  {
    id: 3,
    name: "Bột Matcha Marukyu Koyamaen 40g",
    price: 149000,
    image:
      "https://xachtaynhat.net/wp-content/uploads/2025/01/bot-tra-xanh-nhat-marukyu-koyamaen.jpg",
  },
];

const bestSell = [
  {
    id: 4,
    name: "Bột Matcha Latte (500gr)",
    price: 299000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/Ban-sao-cua-n-13-510x510.png",
  },
  {
    id: 5,
    name: "BỘT TRÀ XANH JASMINE ( Hương Nhài)",
    price: 199000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/75-510x510.png",
  },
  {
    id: 6,
    name: "Bột matcha Haru",
    price: 200000,
    image:
      "https://matchashop.vn/kcfinder/upload/images/haru%2814%29.jpg",
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

export default function Home() {
  return (
    <div className="font-sans text-gray-800 bg-[#f6f9f4]">
      {/* BANNER */}
      <section className="relative text-white py-40 px-10 shadow-inner overflow-hidden">

  {/* Video background */}
  <video
    className="absolute inset-0 w-full h-full object-cover object-[center]"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="https://www.shutterstock.com/shutterstock/videos/3882790151/preview/stock-footage-super-slow-motion-detail-shot-of-sprinkling-matcha-powder-filmed-on-high-speed-cinematic-camera.webm" type="video/mp4" />
  </video>

  {/* Overlay tối nhẹ cho đẹp */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative">
    <h1 className="text-6xl font-bold drop-shadow-xl max-w-2xl">
      Trải Nghiệm Matcha Nhật Bản Thượng Hạng
    </h1>
    <p className="text-2xl mt-4 max-w-xl drop-shadow-md">
      Matcha được tuyển chọn trực tiếp từ vùng Uji &amp; Kyoto – hương thơm dịu,
      vị umami đậm đà.
    </p>
  </div>
</section>


      {/* ABOUT */}
      <section id="about" className="px-10 py-20 bg-green-50">
        <h2 className="text-4xl font-bold text-green-700 mb-6">Về Chúng Tôi</h2>
        <p className="text-lg leading-relaxed max-w-2xl">
          MatchaStore cam kết mang đến những sản phẩm matcha chất lượng nhất từ
          Nhật Bản. Tất cả được thu hoạch từ những trang trại truyền thống tại
          Uji và Kyoto, đảm bảo độ tươi, vị thanh và hàm lượng dinh dưỡng cao.
        </p>
      </section>

      {/* TOP PRODUCTS */}
      <section id="products" className="px-10 py-20">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          Sản Phẩm Nổi Bật
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProducts.map((p) => (
            <Link key={p.id} href={`/product/detail`}>
              <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <img src={p.image} className="w-full h-56 object-cover" />

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-green-700 font-bold text-lg">
                    {p.price.toLocaleString("vi-VN")}₫
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* ========================= MATCHA PROCESS ====================== */}
      <section className="py-20 px-6 bg-[#eefce9]">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-2">
          Quy Trình Sản Xuất Matcha
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Matcha được chế biến từ những lá trà tươi non nhất, trải qua nhiều
          bước công phu để giữ nguyên hương vị và dưỡng chất.
        </p>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              step: "1. Thu Hoạch Lá Trà Non",
              img: "https://tea-juvenate.com/wp-content/uploads/2020/08/hai-la-tra.png",
            },
            {
              step: "2. Hấp Lá Giữ Màu",
              img: "https://www.lorca.vn/wp-content/uploads/2025/04/3-10.webp",
            },
            {
              step: "3. Sấy Khô & Loại Gân",
              img: "https://maysaymactech.com/wp-content/uploads/2023/08/say-lanh-rau-cu.jpg",
            },
            {
              step: "4. Nghiền Bằng Đá",
              img: "https://maysaythanghoa.com/wp-content/uploads/2020/01/cach-lam-bot-tra-xanh.jpg",
            },
          ].map((p, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img src={p.img} className="rounded h-40 w-full object-cover" />
              <p className="mt-3 font-semibold text-gray-700 text-center">
                {p.step}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* ========================= MATCHA BENEFITS ===================== */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-3">
          Lợi Ích Tuyệt Vời Của Matcha
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
          {[
            "Tăng tập trung và giảm stress",
            "Giàu chất chống oxy hóa EGCG",
            "Tăng cường trao đổi chất & hỗ trợ giảm cân",
            "Tăng năng lượng tự nhiên không gây hồi hộp",
            "Cải thiện sức khỏe tim mạch",
            "Thải độc cơ thể và làm đẹp da",
          ].map((b, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-4 h-4 bg-green-600 rounded-full mt-1"></div>
              <p className="text-gray-700">{b}</p>
            </div>
          ))}
        </div>
      </section>
      {/* BEST SELL */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          Bán Chạy Nhất
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSell.map((p) => (
            <Link key={p.id} href={`/product/detail`}>
              <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <img src={p.image} className="w-full h-56 object-cover" />

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                  <p className="text-green-700 font-bold text-lg">
                    {p.price.toLocaleString("vi-VN")}₫
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* ========================= TESTIMONIALS ======================== */}
      <section className="py-20 bg-[#f3fff0] px-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Khách Hàng Nói Gì?
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Minh Anh",
              text: "Matcha rất thơm và mịn. Pha latte siêu ngon!",
            },
            {
              name: "Hoàng Nam",
              text: "Giao hàng nhanh. Hương vị chuẩn matcha Nhật.",
            },
            {
              name: "Thảo Nhi",
              text: "Uống 1 tháng thấy ngủ ngon hơn và da đẹp hơn.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-6 border border-green-100"
            >
              <p className="italic text-gray-700">"{t.text}"</p>
              <p className="mt-4 font-semibold text-green-700">— {t.name}</p>
            </div>
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
