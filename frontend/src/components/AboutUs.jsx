import React from "react";
import logo from "../assets/images/eduna-logo.png";

const AboutUs = () => {
  return (
    <section className="flex justify-center items-center py-[100px] px-[200px] bg-[#f9f9f9] relative z-[5] max-lg:px-10 max-lg:py-20">
      <div className="flex items-center justify-between gap-[80px] flex-wrap max-w-[1100px] w-full max-lg:flex-col max-lg:gap-10">

        {/* Logo Box */}
        <div className="flex-1 flex justify-center items-center min-w-[140px]">
          <div className="p-[80px] rounded-[25px] bg-white shadow-[0_0_40px_rgba(36,106,254,0.1)] flex justify-center items-center border border-[#eaeaea] max-lg:p-10">
            <img
              src={logo}
              alt="Eduna Logo"
              className="w-[320px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-[1.2] min-w-[100px] text-left max-lg:text-center">
          <h2 className="text-[56px] font-bold bg-gradient-to-r from-[#246afe] via-[#9747ff] to-[#ffba08] bg-clip-text text-transparent mb-6 max-lg:text-[1.8rem] max-lg:mx-auto">
            About <span>Us</span>
          </h2>
          <p className="text-[20px] leading-[1.8] text-[#333] max-w-[580px] max-lg:max-w-full max-lg:mx-auto">
            <strong className="text-black font-semibold">
              Eduna (Education Nusa)
            </strong>{" "}
            adalah platform digital pariwisata Kepulauan Riau yang memadukan
            layanan praktis dan edukasi. Eduna memudahkan masyarakat dan
            wisatawan untuk{" "}
            <span className="font-medium text-black">
              booking keberangkatan
            </span>
            , sekaligus menghadirkan{" "}
            <span className="font-medium text-black">learning module</span> dan{" "}
            <span className="font-medium text-black">challenges</span> untuk
            mengenal budaya, tempat, dan pengalaman lokal secara interaktif.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
