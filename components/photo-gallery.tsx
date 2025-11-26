"use client"

import { useState } from "react"
import Image from "next/image"
import MemoryViewerModal from "./memory-viewer-modal"

export default function PhotoGallery() {
  const [isMemoryViewerOpen, setIsMemoryViewerOpen] = useState(false)

  const memories = [
    {
      id: 1,
      image: "/images/khoangkhac/1.png",
      caption: "Cục cưng đang suy tư 😍",
      description: "Bức ảnh mà cục cưng đi chơi với bạn nhưng ưng quá gửi qua cho anh coi 😚.",
    },
    {
      id: 3,
      image: "/images/khoangkhac/3.png",
      caption: "Nằm trong bộ ảnh mà baby đi phe với anh kkk 🤣",
      description: "Nhìn ngon ác, thèm vãi đạn 🤑",
    },
    {
      id: 2,
      image: "/images/khoangkhac/2.png",
      caption: "2 đứa đi chơi ở landmark81 nè 😻",
      description: "Hôm đó cũng là hôm sinh nhật baby đó, anh nhớ mà! 🥰",
    },
    {
      id: 4,
      image: "/images/khoangkhac/4.png",
      caption: "Ảnh chụp ở quán cà phe 📱",
      description: "Mới mua i pỏn nên phải chụp ngay 🐔",
    },
    {
      id: 5,
      image: "/images/khoangkhac/5.png",
      caption: "Tiếp tục series mới mua i pỏn 📱",
      description: "Nhìn như cặp vợ chồng 🐧.",
    },
    {
      id: 7,
      image: "/images/khoangkhac/7.png",
      caption: "Hoa hậu tốt nghiệp 🎓",
      description: "Quá xinh 🙆‍♂️",
    },
    {
      id: 8,
      image: "/images/khoangkhac/8.png",
      caption: "Ảnh mới chụp gần đây 💑",
      description: "Thấy đẹp nên để lên đây lun.",
    }, 
    {
      id: 9,
      image: "/images/khoangkhac/9.jpg",
      caption: "Vừa đi mũi điện dìa 🛫",
      description: "Đi hun nhau á 👄👅.",
    },
    {
      id: 10,
      image: "/images/khoangkhac/10.jpg",
      caption: "Sẵn tiện selfie cho tấm hình 📸",
      description: "Chụp là phụ mà hun là chính 🥳😗😋.",  
    },
    {
      id: 11,
      image: "/images/khoangkhac/11.jpg",
      caption: "Lại là ảnh đi chơi ở landmark81 🌃",
      description: "Đẹp quá nên phải chụp thêm mấy tấm nữa 😍.",
    },
    {
      id: 12,
      image: "/images/khoangkhac/12.jpg",
      caption: "Đi gành đá dĩa ở quê nhà 🌊",
      description: "Ảnh chụp hầu dịp tết 2024 đó 🥰.",
    },
    {
      id: 13,
      image: "/images/khoangkhac/13.jpg",
      caption: "Thêm một tấm ở gành đá dĩa 🌅",
      description: "Phong cảnh đẹp quá nên phải chụp thêm tấm nữa 😘.",
    },
    {
      id: 14,
      image: "/images/khoangkhac/14.jpg",
      caption: "Nhà thờ mằng lăng ⛪",
      description: "Xui cái cũng đi dịp tết nhưng trời mưa phải đi trú mưa 😂.",
    },
    {
      id: 15,
      image: "/images/khoangkhac/15.jpg",
      caption: "Đi chùa Bảo Lâm 🏯",
      description: "Sáng lở đi với mẹ nên phải dắt baby đi tối hehe 🐸.",
    },
    {
      id: 16,
      image: "/images/khoangkhac/16.jpeg",
      caption: "Lại là bức ảnh mà cục dàng tự khoe với anh 😍",
      description: "Nhìn trông cũng ngon phết nhỉ 🌚.",
    },
    {
      id: 17,
      image: "/images/khoangkhac/17.jpeg",
      caption: "Bầy trò lúc mới yêu 🐷",
      description: "Deo kính đồ ",
    },
    {
      id : 18,
      image: "/images/khoangkhac/18.jpeg",
      caption: "Vẫn là ảnh lúc mới yêu 🌄",
      description: "Đòi fuck ai, lúc kêu fuck lại thì không chịu 🙉🙊",
    },
    {
      id: 19,
      image: "/images/khoangkhac/19.jpeg",
      caption: "Bắn tim ❤️‍🔥",
      description: "Bắn tim bằng tóc 🌚🌝",
    }
  ]

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-4 text-rose-900">Dấu Chân Kỷ Niệm Trên Hành Trình Của Chúng Ta</h2>
          <p className="text-center text-rose-600/70 mb-12">Cùng em, từng giây phút đều hóa thành điều anh trân giữ mãi trong tim ✨</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setIsMemoryViewerOpen(true)}
              >
                {/* Image container */}
                <div className="relative w-full h-full">
                  <Image
                    src={memory.image || "/placeholder.svg"}
                    alt={memory.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Decorative frame */}
                <div className="absolute inset-0 rounded-xl border-4 border-white/20 pointer-events-none group-hover:border-white/40 transition-all duration-300" />

                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 group-hover:from-black/80 transition-all duration-300">
                  <div>
                    <h3 className="text-white font-light text-lg">{memory.caption}</h3>
                    <p className="text-white/70 text-sm mt-1">{memory.description}</p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute inset-0 bg-gradient-to-b from-rose-500/0 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center">
            <button
              onClick={() => setIsMemoryViewerOpen(true)}
              className="inline-block px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-light rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Xem Trọn Vẹn Tất Cả Kỷ Niệm
            </button>
          </div>
        </div>
      </section>

      <MemoryViewerModal isOpen={isMemoryViewerOpen} onClose={() => setIsMemoryViewerOpen(false)} memories={memories} />
    </>
  )
}
