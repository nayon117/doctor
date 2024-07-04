import { MdArrowOutward } from "react-icons/md";

const Appoinment = () => {
  return (
    <section className="mt-24 mb-16 relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-[#020043] to-[#020043]/60 rounded-xl"></div>
      {/* image */}
      <img
        src="/images/Rectangle 32.png"
        alt=""
        className="w-full h-full object-cover opacity-30 "
      />

      {/* title & btn */}
      <div className="absolute top-1/2 left-1/2 lg:left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[530px] space-y-7 text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold leading-relaxed pt-3">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h1>
        <div className="mb-6 pb-4 md:mb-0">
          <button className="btn btn-xs md:btn-lg bg-[#FFC637] text-black hover:bg-black hover:text-white outline-none border-none">
            Appointment <MdArrowOutward />
          </button>
          <button className="btn btn-xs md:btn-lg bg-transparent text-white hover:bg-black hover:text-white border border-white ml-3">
            Learn More <MdArrowOutward />
          </button>
        </div>
      </div>

      {/* logo */}
      <div className="absolute top-[12%] left-[70%] sm:left-[75%] md:left-[80%] lg:left-[84%]">
        <img
          src="/images/logo light.png"
          alt="Logo"
          className="w-[50px] sm:w-[60px] md:w-[70px]"
        />
      </div>
      
    </section>
  );
};

export default Appoinment;
