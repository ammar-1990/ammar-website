import { FlipWords } from "@/components/flip-words";
import { GridSmallBackgroundDemo } from "@/components/grid-small-background";
import { CheckCheck, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      {/* Main section */}
      <div>
        <MainSection />
      </div>
      {/* Services */}
      <div className="">
        <Portfolio/>
      </div>
    </div>
  );
}

const MainSection = () => {
  const bulletPoints = [
    "Bring Ideas To Life",
    "Improve  Your Business",
    "Elevate Your Digital Presence",
    "Design Your Future",
  ];
  return (
    <section className="con relative   min-h-[calc(100vh-70px)]">
      <GridSmallBackgroundDemo />
      <div className="relative z-10 h-full flex items-center justify-center pt-32 flex-col ">
        <h1 className="text-center">
          <p className="headers font-bold">Build the Best SaaS Applications</p>
          <p className="headers font-bold sm:mt-1 mt-3">
            Materialize Your{" "}
            <FlipWords words={["Dream", "Plans", "Ideas", "Goals"]} /> Now
          </p>
        </h1>
        <p className="max-w-[800px] text-gray-600 mt-14 text-center text-base  md:text-2xl  font-semibold">
          We build top-tier websites, mobile apps, and SaaS applications using
          the most advanced tech stacks available.
        </p>
        <div className="flex items-center gap-8 mt-14 justify-center flex-wrap w-fit self-center  ">
          {bulletPoints.map((point) => (
            <h2
              key={point}
              className="flex items-center gap-2   text-gray-600 font-semibold text-xs sm:text-base "
            >
              <CheckCircle size={16} />
              {point}
            </h2>
          ))}
        </div>


       
      </div>
    </section>
  );
};


const Portfolio = ()=>{
  return (
    <section>
      <h2 className="text-center font-bold text-3xl">Portfolio</h2>
    </section>
  )
}