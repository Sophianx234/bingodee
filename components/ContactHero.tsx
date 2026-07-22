import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-none mx-auto mt-0 pt-0 px-6 lg:px-12 mb-20">
      {/* Main Image Container */}
      <div
        className="relative w-full h-[400px] md:h-[500px] lg:h-[35rem] bg-gray-200"
        style={{
          backgroundImage: "url(/imgs/h-6.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Hexagonal/Geometric cut exactly like AboutHero
          clipPath:
            "polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)",
        }}
      ></div>

      {/* Dark Overlay Box Wrapper (for Drop Shadow) exactly like AboutHero */}
      <div className="absolute bottom-4 left-6 transform translate-y-12 w-[50%] z-10">
        <div
          className="w-full bg-[#1c1c1c] z-10 opacity-95 text-white py-10 md:py-12 lg:py-16 "
          style={{
            clipPath:
              "polygon(0% 0%, 80.8% 0%, 100% 26.6%, 100% 100%, 17.5% 100%, 0% 59.3%)",
          }}
        >
          <div className="pl-[8%] md:pl-[12%] pr-[5%]">
            <h1 className="text-3xl md:text-3xl font-bold leading-[1.2] mb-6">
              Let's Build Your Next Project
              <br />
              Together
            </h1>
            <p className="text-gray-300 text-[16px] md:text-[15px] leading-[1.6] font-medium max-w-[650px]">
              Whether you need engineering expertise, industrial materials or
              fabrication services, our team is ready to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
