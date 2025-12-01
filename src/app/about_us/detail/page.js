"use client";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* Banner */}
      <section className="relative w-full rounded-2xl text-white py-24 px-6 shadow-lg mb-12 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://media.video-ac.com/video/public/025b49e9_b385_47d2_a24f_b8942b0fdc59-157385/025b49e9_b385_47d2_a24f_b8942b0fdc59_960x540.mp4#t=26" type="video/mp4" />
        </video>

        {/* Lớp phủ làm tối video */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl max-w-2xl text-center mx-auto">
            Về Chúng Tôi
          </h1>
          <p className="mt-4 text-lg max-w-xl drop-shadow-md text-center mx-auto">
            Khám phá câu chuyện, giá trị và sứ mệnh đằng sau Matcha Store
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Câu Chuyện Của Matcha Store – Bắt đầu từ đam mê chung của 5 người yêu
          trà
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Khoảng giữa năm 2024, khi matcha trở thành một xu hướng mạnh mẽ tại
          Việt Nam, nhóm chúng tôi – 5 người cùng chia sẻ đam mê với trà – nhận
          ra rằng matcha không chỉ là một loại đồ uống xanh lành mạnh, mà còn là
          một phong cách sống đang được nhiều bạn trẻ yêu thích.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tụi mình thường xuyên pha thử matcha, chia sẻ công thức cho nhau và
          mang đi mời bạn bè xung quanh. Bất ngờ là ai cũng khen ngon và hỏi
          mua. Chính những phản hồi đó khiến cả nhóm nghĩ: “Hay là mình làm một
          kênh bán hàng đàng hoàng để mang matcha chất lượng đến nhiều người
          hơn?”
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Từ suy nghĩ nhỏ đó, cả 5 đứa bắt đầu nghiêm túc tìm hiểu thị trường,
          khảo sát nhu cầu, rồi tự mình thử từng loại matcha—từ Nhật Bản đến các
          nguồn nguyên liệu uy tín khác. Mọi thứ đều được test kỹ về màu, mùi,
          độ tươi và vị. Chỉ những loại thật sự ổn, cả nhóm cùng gật đầu mới đưa
          vào danh sách lựa chọn.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Đến cuối năm 2024, Matcha Store chính thức được thành lập. Tụi mình
          muốn tạo ra một thương hiệu matcha “xịn nhưng dễ tiếp cận” – giá không
          quá cao, chất lượng rõ ràng, và quan trọng nhất là khách hàng thấy an
          tâm khi lựa chọn.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Website và kênh bán hàng của Matcha Store ra đời từ chính mong muốn
          ấy: giúp mọi người dễ dàng tìm hiểu – mua – trải nghiệm matcha chất
          lượng, không cần phải tìm kiếm khó khăn hay lo lắng về nguồn gốc.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Trong thời gian tới, cả nhóm sẽ tiếp tục mở rộng sản phẩm, chia sẻ
          thêm công thức pha chế và mang đến nhiều trải nghiệm matcha thú vị hơn
          cho cộng đồng yêu trà.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Đội Ngũ Của Chúng Tôi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Nguyễn Quỳnh Trang",
              role: "Founder & CEO",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/041/438/791/small_2x/cute-girl-cartoon-character-korean-style-fashion-people-expression-concept-design-chibi-illustration-isolated-white-background-vector.jpg",
            },
            {
              name: "Hồ Hà Ý Nhi",
              role: "Marketing Manager",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/041/438/791/small_2x/cute-girl-cartoon-character-korean-style-fashion-people-expression-concept-design-chibi-illustration-isolated-white-background-vector.jpg",
            },
            {
              name: "Đặng Thị Kim Ngọc",
              role: "Customer Support",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/041/438/791/small_2x/cute-girl-cartoon-character-korean-style-fashion-people-expression-concept-design-chibi-illustration-isolated-white-background-vector.jpg",
            },
            {
              name: "Phạm Thị Như Ngọc",
              role: "Customer Support",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/041/438/791/small_2x/cute-girl-cartoon-character-korean-style-fashion-people-expression-concept-design-chibi-illustration-isolated-white-background-vector.jpg",
            },
            {
              name: "Nguyễn Thị Kim Ly",
              role: "Customer Support",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/041/438/791/small_2x/cute-girl-cartoon-character-korean-style-fashion-people-expression-concept-design-chibi-illustration-isolated-white-background-vector.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-6 hover:shadow-2xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Giá Trị Cốt Lõi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Chất Lượng
            </h3>
            <p className="text-gray-700">
              Chúng tôi cam kết mang đến sản phẩm Matcha nguyên chất, thuần
              khiết và chất lượng cao nhất.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Sức Khỏe
            </h3>
            <p className="text-gray-700">
              Chúng tôi quan tâm đến sức khỏe của khách hàng, cung cấp những sản
              phẩm hỗ trợ lối sống lành mạnh.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Trải Nghiệm
            </h3>
            <p className="text-gray-700">
              Mỗi sản phẩm đều được chăm chút tỉ mỉ để mang đến trải nghiệm
              Matcha trọn vẹn và thú vị.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
