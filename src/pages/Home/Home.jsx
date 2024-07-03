import Faq from "../../components/Faq";
import Hero from "../../components/Hero";
import Mission from "../../components/Mission";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";

const Home = () => {
    return (
        <section className=''>
               <Hero/>
               <Mission/>
               <Service/>
               <Testimonial/>
               <Faq/>
        </section>
    )
}
export default Home;