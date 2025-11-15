"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Ảnh carousel sản phẩm
const images = [
  "https://uji-matcha.vn/wp-content/uploads/77-510x510.png",
  "https://uji-matcha.vn/wp-content/uploads/Ban-sao-cua-n-18-510x510.png",
  "https://uji-matcha.vn/wp-content/uploads/2023/10/32-1-510x510.png",
];

// Sản phẩm liên quan
const relatedProducts = [
  {
    id: 1,
    name: "Bột Matcha Latte (500gr)",
    price: 299000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/Ban-sao-cua-n-13-510x510.png",
  },
  {
    id: 2,
    name: "BỘT TRÀ XANH JASMINE",
    price: 199000,
    image: "https://uji-matcha.vn/wp-content/uploads/75-510x510.png",
  },
  {
    id: 3,
    name: "Bột Matcha Latte",
    price: 149000,
    image:
      "https://uji-matcha.vn/wp-content/uploads/2023/10/41-510x510.png",
  },
];

// Demo reviews
const reviews = [
  {
    id: 1,
    name: "Minh Anh",
    rating: 5,
    comment: "Matcha thơm, mịn, vị rất chất lượng. Rất đáng tiền!",
  },
  {
    id: 2,
    name: "Bảo Nam",
    rating: 4,
    comment: "Giao hàng nhanh, matcha tươi và ngon. Sẽ mua lại.",
  },
  {
    id: 3,
    name: "Khánh Nhi",
    rating: 5,
    comment: "Màu xanh đẹp, vị đậm, pha latte siêu ngon!",
  },
];

// Demo FAQ
const faqs = [
  {
    question: "Matcha này có phải hàng hữu cơ không?",
    answer:
      "Có! Tất cả matcha đều 100% hữu cơ và được thu hoạch tại vùng Uji, Kyoto.",
  },
  {
    question: "Bảo quản matcha như thế nào?",
    answer:
      "Để nơi khô ráo, thoáng mát và đậy kín sau khi mở nắp.",
  },
  {
    question: "Matcha này có thể pha latte không?",
    answer: "Hoàn toàn được! Đây là loại matcha rất phù hợp để pha latte.",
  },
];

export default function ProductDetailFullDemo() {
  const [current, setCurrent] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    setOpenModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-gray-800">

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              🎉 Thêm vào giỏ hàng thành công!
            </h2>
            <p className="text-gray-600 mb-6">
              Sản phẩm đã được thêm vào giỏ hàng của bạn.
            </p>

            <div className="flex flex-col gap-3">
              <button
                className="bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
                onClick={() => {
                  router.push("/cart/detail")
                }}
              >
                Đi đến giỏ hàng
              </button>

              <button
                className="border border-green-700 text-green-700 py-2 rounded-lg hover:bg-green-50 transition"
                onClick={() => setOpenModal(false)}
              >
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-green-800 mb-8 text-center sm:text-left">
        BỘT TRÀ XANH JASMINE ( Hương Nhài) 500g
      </h1>

      {/* Carousel + Info */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Carousel */}
        <div className="lg:w-1/2 relative">
          <img
            src={images[current]}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={() =>
                setCurrent((current - 1 + images.length) % images.length)
              }
              className="bg-white bg-opacity-60 hover:bg-opacity-90 text-green-700 font-bold px-3 py-1 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={() => setCurrent((current + 1) % images.length)}
              className="bg-white bg-opacity-60 hover:bg-opacity-90 text-green-700 font-bold px-3 py-1 rounded-full"
            >
              ›
            </button>
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="lg:w-1/2 flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-green-900">725.000 đ</p>
            <p className="text-gray-700 text-lg">
              Matcha cao cấp dùng cho trà đạo Nhật Bản. Vị umami đậm, màu xanh
              tươi rực rỡ, mịn và thơm. Hoàn hảo cho những buổi thưởng trà hoặc pha latte.
            </p>

            <h2 className="text-xl font-semibold text-green-700 mt-6">
              Thông tin sản phẩm
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>100% Matcha hữu cơ Nhật Bản</li>
              <li>Khối lượng: 30g</li>
              <li>Xuất xứ: Uji, Kyoto</li>
              <li>Phù hợp cho trà đạo, latte…</li>
              <li>Xay mịn và đóng gói mới mỗi đợt</li>
            </ul>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-green-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-800 transition self-start"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      {/* Extra Description */}
      <section className="mt-16 bg-green-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Tại sao nên chọn Matcha này?
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          Matcha ceremonial của chúng tôi được chọn lọc từ những trang trại tốt
          nhất tại Uji. Mùi thơm đặc trưng, vị đậm, màu xanh tươi — đúng chất
          matcha truyền thống Nhật Bản.
        </p>
        <p className="text-gray-700 text-lg">
          Phù hợp để thưởng trà mỗi ngày và tăng cường sức khỏe với lượng lớn
          chất chống oxy hóa.
        </p>
      </section>

      {/* Related Products */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Sản phẩm gợi ý
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} href={`/product/detail`}>
              <div className="cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                <img src={p.image} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-700">
                    {p.name}
                  </h3>
                  <p className="text-green-800 font-bold mt-2">
                    {p.price.toLocaleString()}đ
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Đánh giá từ khách hàng
        </h2>
        <div className="space-y-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-white p-4 rounded-xl shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-green-700">{r.name}</h3>
                <div className="text-yellow-500">
                  {"★".repeat(r.rating)}
                </div>
              </div>
              <p className="text-gray-700">{r.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-16 bg-green-50 p-6 rounded-xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Câu hỏi thường gặp
        </h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-semibold text-green-700">
              {faq.question}
            </h3>
            <p className="text-gray-700 mt-1">{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* Matcha News */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Tin tức Matcha
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-bold text-green-700">
              Lợi ích sức khỏe của matcha
            </h3>
            <p className="text-gray-700 mt-2">
              Matcha giúp tăng năng lượng, cải thiện tập trung và chứa nhiều chất
              chống oxy hóa.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-bold text-green-700">
              Cách pha matcha chuẩn Nhật
            </h3>
            <p className="text-gray-700 mt-2">
              Tìm hiểu cách đánh matcha mịn, không vón cục, theo truyền thống.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-lg font-bold text-green-700">
              Công thức matcha ngon mỗi ngày
            </h3>
            <p className="text-gray-700 mt-2">
              Matcha latte, smoothie, bánh matcha… dễ làm!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
