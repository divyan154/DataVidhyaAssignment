import Image from "next/image";
// hello hathi
import Section3 from "../sections/ProjectsSection";
import Section4 from "../sections/ChoosePathPageSection";
import Section1 from "@/sections/HeroSection";
import Section2 from "@/sections/ExploreCoursesSection";
import Section5 from "@/sections/CustomerTestimonialsSection";
import Section6 from "@/sections/FaqSection";
export default function Home() {
  return (
    <main className="lg:w-full w-auto flex flex-col items-center  px-4">
      <div className="hidden lg:block absolute z-[-1] top-[50px] right-[0px]">
        <Image
          src="/Realistic Abstract 3.png"
          width={500}
          height={600}
          alt="Background"
          className="w-[500px]  mt-[88px] h-auto"
        />
      </div>
      <div className="hidden lg:block absolute z-[-1] top-[360px] left-[0px]">
        <Image
          src="/Realistic Abstract 4.png"
          width={500}
          height={600}
          alt="Background"
          className="w-[500px] h-auto"
        />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
