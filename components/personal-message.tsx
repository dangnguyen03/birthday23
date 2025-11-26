"use client"

export default function PersonalMessage() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center mb-12 text-rose-900">Thư gửi cục cưng của anh 💌</h2>

        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 md:p-12 shadow-xl space-y-6">
          <p className="text-rose-900/90 text-lg leading-relaxed font-light">
          Trong ngày đặc biệt này, anh chỉ muốn nhắc em rằng em tuyệt vời biết bao. Sự dịu dàng, thông minh và vẻ đẹp của em tỏa sáng hơn mọi vì sao.
          </p>

          <p className="text-rose-900/90 text-lg leading-relaxed font-light">
          Mỗi khoảnh khắc bên em đều là món quà. Nụ cười, sự quan tâm, những ước mơ của em… tất cả khiến trái tim anh tràn đầy hạnh phúc.
          </p>

          <p className="text-rose-900/90 text-lg leading-relaxed font-light">
          Cảm ơn em vì chính con người em, vì những kỷ niệm đã qua và cả những hành trình phía trước. Anh mong được bên em trong thật nhiều sinh nhật, thật nhiều niềm vui và thật nhiều ký ức đẹp cùng nhau.
          </p>

          <p className="text-rose-900/90 text-lg leading-relaxed font-light">
          Em là món quà tuyệt nhất của anh. Chúc mừng sinh nhật em, tình yêu của anh.
          </p>

          <div className="pt-6 border-t border-rose-200">
            <p className="text-center text-rose-600 italic font-light">Mãi bên em,</p>
            <p className="text-center text-rose-900 font-light text-lg mt-2">Thanh Dang</p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-4 text-3xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            💗
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🌹
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            💗
          </span>
        </div>
      </div>
    </section>
  )
}
