const Hero = () => {
  return (
    <section className="bg-gray-50 pb-10">
      <div className="relative">
        <img
          src="/images/Rectangle 5.png"
          alt="Hero Image"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00C19D] to-[#020043] opacity-20"></div>
      </div>
      <div className="container mx-auto px-4 pt-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:-mb-16">
          Comprehensive Care <br />
          for Every Patient
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 lg:mt-0">
          <div className="h-[312px] p-4 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-bold">90%</h3>
            <p className="mt-2 text-gray-600">
              Patient satisfaction rate, reflecting our commitment.
            </p>
            <img
              src="/images/circle.png"
              alt="Chart"
              className="mx-auto mt-4"
            />
          </div>
          <div className="p-4 h-[190px] lg:mt-28 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="mt-2 text-gray-600">Board-certified doctors</p>
            <img
              src="/images/contract.png"
              alt="Certificate"
              className="mx-auto mt-4"
            />
          </div>
          <div className="p-4 h-[162px]  lg:mt-36 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-bold">
              4.8 <span className="text-yellow-400">★</span>
            </h3>
            <p className="mt-2 text-gray-600">Over 20,000 Patient</p>
            <img
              src="/images/person.png"
              alt="Patients"
              className="mx-auto mt-4"
            />
          </div>
          <div className="p-4 h-[190px] lg:mt-28 bg-white shadow rounded-lg">
            <h3 className="text-2xl font-bold">$5000</h3>
            <p className="mt-2 text-gray-600">Money spend for poor patient</p>
            <img src="/images/coin.png" alt="Money" className="mx-auto mt-4" />
          </div>
          <div className="p-4 h-[312px] bg-white shadow rounded-lg">
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="mt-2 text-gray-600">Free lesson video for patient</p>
            <img src="/images/group.png" alt="Video" className="mx-auto mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
