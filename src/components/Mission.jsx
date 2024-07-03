const Mission = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-16 gap-4">
      <div className="flex-1 space-y-5">
        <button className="btn bg-white text-black hover:bg-black hover:text-white rounded-full">
          Who we are
        </button>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold lg:w-[470px]">
          We Help To Get Soultions
        </h1>
        <p className="lg:w-[470px]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="btn bg-[#FFC637] text-black hover:bg-black hover:text-white outline-none border-none">
          Learn More
        </button>
      </div>
      <div className="flex-1">
        <div className="relative">
          <img src="/images/Rectangle 24.png" alt="misson image" />
          <div className="lg:absolute lg:top-2/3 lg:right-1/2 w-[396px]  bg-[#343268] text-white p-6 rounded-lg space-y-3 mt-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Our mission is simple
            </h3>
            <p>
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission;
