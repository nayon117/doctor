import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="bg-[#020043] text-white py-10 ">
      <footer className="footer lg:ml-24  p-10">

        {/*logo & contact part  */}
        <div className="flex flex-col ">
          <img src="../../public/images/logo light.png" alt="" />
          <div className="mt-4">
            <h3>123 Main Street Anytown, USA </h3>
            <p>Postal Code: 12345</p>
          </div>
          <div className="mt-4">
            <h3>
              Support: support@oyolloo.com
              <h3> (Available : 10:00am to 07:00pm)</h3>
            </h3>
          </div>
        </div>

        {/* link part1 */}
        <nav className="mt-12">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About US</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and condition</a>
        </nav>

        {/* link part2 */}
        <nav className="mt-12">
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>

        {/* follow us */}
        <nav className="mt-12">
          <h6>Follow us</h6>
          <div className="grid grid-flow-col gap-4 text-xl mt-2">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagram />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>
          <p className="mt-6 text-[#FFFFF5]">@docplus 2024</p>
        </nav>
      </footer>
    </section>
  );
};
export default Footer;
