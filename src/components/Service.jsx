const Service = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-24 gap-4">
        <div className="flex-1 space-y-5">
          <button className="btn btn-xs bg-white text-black hover:bg-black hover:text-white rounded-full">
            Service
          </button>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:w-[470px]">
            Empowering Health, Enriching Lives
          </h1>
          <p className="lg:w-[470px]">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="btn bg-[#FFC637] text-black hover:bg-black hover:text-white outline-none border-none">
            Appointment
          </button>
        </div>
        <div className="flex-1">
          <div className="relative">
            <img
              src="/images/Rectangle 27-2.png"
              alt="misson image"
              className="rounded-lg"
            />
            <div className="lg:absolute lg:top-1/2 lg:left-[10px] w-[320px]  p-6 rounded-lg space-y-3 mt-4">
              <div className="absolute inset-0 bg-gradient-to-b from-[#020043] to-[#020048] opacity-60  rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-xl text-white md:text-2xl font-semibold">
                  Our mission is simple
                </h3>
                <p className="text-white">
                  To provide high-quality healthcare services that are
                  accessible, personalized, and patient-centered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between mt-6">
        <div>
          <div className="relative">
            <img
              src="/images/Rectangle 27-1.png"
              alt="misson image"
              className="rounded-lg"
            />
            <div className="lg:absolute lg:top-1/2 lg:left-[10px] w-[320px]  p-6 rounded-lg space-y-3 mt-4">
              <div className="absolute inset-0 bg-gradient-to-b from-[#020043] to-[#020048] opacity-60  rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-xl text-white md:text-2xl font-semibold">
                Online Doctor Meet
                </h3>
                <p className="text-white">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              src="/images/Rectangle 27.png"
              alt="misson image"
              className="rounded-lg"
            />
            <div className="lg:absolute lg:top-1/2 lg:left-[10px] w-[320px]  p-6 rounded-lg space-y-3 mt-4">
              <div className="absolute inset-0 bg-gradient-to-b from-[#020043] to-[#020048] opacity-60  rounded-lg"></div>
              <div className="relative z-10">
                <h3 className="text-xl text-white md:text-2xl font-semibold">
                Consultancy your health
                </h3>
                <p className="text-white">
                Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
