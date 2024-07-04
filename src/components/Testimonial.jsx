const Testimonial = () => {
  return (
    <section className="bg-gray-50 mt-16 py-10">
      <div className="container mx-auto px-4">

         {/*btn & title */}
        <button className="btn btn-xs bg-white text-black hover:bg-black hover:text-white rounded-full">
          Testimonial
        </button>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-6 ">
          What they say about us
        </h2>

        {/* grid items testimonial */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1st testimonial */}
          <div className="p-4 bg-[#FFFFF5] shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">
              Expertise and Compassion Combined
            </h3>
            <p className="mt-2 text-gray-600">
              I can&apos;t thank enough for their exceptional care. The doctors
              and staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="/images/test3.png"
                alt="Sarah"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold">Sarah D</p>
                  <p className="text-sm text-gray-600">IT Professional</p>
                </div>
                <p className="text-yellow-500 text-xl">★★★★★</p>
              </div>
            </div>
          </div>

          {/* 2nd testimonial */}
          <div className="p-4 bg-[#FFFFF5] shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">
              Life-Saving Care, Life-Changing Experience
            </h3>
            <p className="mt-2 text-gray-600">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="/images/test2.png"
                alt="Michael"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold">Michael R</p>
                  <p className="text-sm text-gray-600">Business Executive</p>
                </div>
                <p className="text-yellow-500 text-xl">★★★★★</p>
              </div>
            </div>
          </div>

          {/* 3rd testimonial */}
          <div className="p-4 bg-[#FFFFF5] shadow-lg rounded-lg">
            <h3 className="text-xl font-bold">
              A Partner in Health and Wellness
            </h3>
            <p className="mt-2 text-gray-600">
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups, they&apos;ve become my trusted
              partner in health and wellness.
            </p>
            <div className="mt-4 flex items-center">
              <img
                src="/images/test1.png"
                alt="David"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold">David S</p>
                  <p className="text-sm text-gray-600">Lawyer</p>
                </div>
                <p className="text-yellow-500 text-xl">★★★★★</p>
              </div>
            </div>
          </div>
        </div>

        {/* pagination */}
        <div className="flex items-center justify-center text-center space-x-2 mt-8 ">
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
