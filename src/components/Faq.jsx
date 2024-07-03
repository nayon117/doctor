import { useState } from "react";
const accordionsData = [
  {
    title: " What are your office hours? ? ",
    description:
      "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
  },
  {
    title: "Do you accept insurance?",
    description:
      "Yes, we accept a wide range of insurance plans. Please contact our office to verify if your specific plan is accepted. We strive to make our services accessible to as many people as possible.",
  },
  {
    title: "What should I bring to my appointment?",
    description:
      "Please bring a valid ID, your insurance card, a list of any medications you are currently taking, and any relevant medical records. If you have any specific concerns or questions, jot them down so you don't forget to ask during your appointment.",
  },
  {
    title: "Do you offer telemedicine appointments?",
    description:
      "Yes, we offer telemedicine appointments for certain conditions and follow-ups. Telemedicine allows you to consult with our healthcare providers from the comfort of your home. Please contact our office to see if your needs can be met through a telemedicine visit.",
  },
];
const Faq = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  const handleToogle = (i) => {
    setAccordionOpen((prevI) => (prevI === i ? null : i));
  };

  return (
    <div className="mt-16">
      <div>
        <button className="btn btn-xs bg-white text-black hover:bg-black hover:text-white rounded-full">
          Faq
        </button>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-6 mb-6 ">
          Frequntly Asked Question
        </h2>
      </div>
      <div className="space-y-4">
        {accordionsData?.map((accordion, i) => (
          <div
            key={i}
            className="transition-all p-6 duration-200 bg-[#FFFFF5] border border-gray-200 shadow-lg cursor-pointer "
          >
            <button
              onClick={() => handleToogle(i)}
              type="button"
              className="flex items-center justify-between w-full"
            >
              <span className="flex text-lg  font-semibold text-black">
                {accordion.title}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-black transition-all ease-in-out ${
                  accordionOpen === i
                    ? "rotate-180 duration-200"
                    : "rotate-0 duration-200"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`grid text-gray-600 transition-all ease-in-out duration-300 text-left ${
                accordionOpen === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              } `}
            >
              <div className="overflow-hidden">{accordion.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
