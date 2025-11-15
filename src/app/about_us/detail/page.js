"use client";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 font-sans text-gray-800">
      {/* Banner */}
      <section
        className="w-full bg-cover bg-center rounded-2xl text-white py-24 px-6 shadow-lg mb-12"
        style={{
          backgroundImage: `url('https://fujiocha.com/wp-content/uploads/2021/07/fuji-matcha-huu-co.jpg')`,
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-xl max-w-2xl text-center mx-auto">
          Về Chúng Tôi
        </h1>
        <p className="mt-4 text-lg max-w-xl drop-shadow-md text-center mx-auto">
          Khám phá câu chuyện, giá trị và sứ mệnh đằng sau Matcha Store
        </p>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          Câu Chuyện Của Chúng Tôi
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Matcha Store bắt đầu từ niềm đam mê sâu sắc với trà xanh và mong muốn
          mang đến những trải nghiệm tinh túy nhất của Matcha đến tay mọi người.
          Chúng tôi tin rằng mỗi tách Matcha không chỉ là một thức uống, mà còn
          là một khoảnh khắc để kết nối, thư giãn và nạp lại năng lượng.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Khởi nguồn từ những lá trà chọn lọc từ những vùng trồng trà nổi tiếng,
          chúng tôi tự hào khi được đồng hành cùng các nông dân địa phương, đảm
          bảo quy trình canh tác bền vững, thân thiện với môi trường và mang lại
          sản phẩm chất lượng cao nhất.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Qua từng gói trà, chúng tôi muốn kể câu chuyện về sự kiên nhẫn, tinh
          tế và truyền thống lâu đời của Nhật Bản – nơi nghệ thuật Matcha được
          trân trọng và nâng niu. Mỗi bước pha, mỗi hương vị đều được chăm chút
          tỉ mỉ, để khi thưởng thức, bạn cảm nhận được sự cân bằng giữa sức
          khỏe, tinh thần và sự thư giãn.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Chúng tôi không chỉ bán Matcha, mà còn muốn chia sẻ một phong cách
          sống lành mạnh, tinh tế và tràn đầy năng lượng. Matcha Store là nơi
          kết nối những người yêu Matcha, nơi bạn có thể tìm thấy những sản phẩm
          chất lượng, những công thức pha trà độc đáo và những câu chuyện truyền
          cảm hứng từ văn hóa trà lâu đời.
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
              name: "Nguyễn Văn A",
              role: "Founder & CEO",
              image:
                "https://img.freepik.com/free-vector/anime-chibi-boy-standing-character_18591-82512.jpg?semt=ais_hybrid&w=740&q=80",
            },
            {
              name: "Trần Thị B",
              role: "Marketing Manager",
              image:
                "https://static.vecteezy.com/system/resources/thumbnails/041/438/791/small_2x/cute-girl-cartoon-character-korean-style-fashion-people-expression-concept-design-chibi-illustration-isolated-white-background-vector.jpg",
            },
            {
              name: "Lê Văn C",
              role: "Product Developer",
              image:
                "https://img.freepik.com/free-vector/anime-chibi-boy-standing-character_18591-82512.jpg?semt=ais_hybrid&w=740&q=80",
            },
            {
              name: "Phạm Thị D",
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
