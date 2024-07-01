import { FlipWords } from "@/components/flip-words";
import { GridSmallBackgroundDemo } from "@/components/grid-small-background";
import { Button } from "@/components/ui/button";
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
      <div className="mt-12">
        <Portfolio />
      </div>
    </div>
  );
}

const MainSection = () => {
  const bulletPoints = [
    "Bring Ideas To Life",
    "Improve  Your Business",
    "Build Future-Ready Solutions",
 "Innovate, Scale, Succeed",
  ];
  return (
    <section className=" relative   min-h-[calc(100vh-70px)] 3xl:min-h-[80vh]">
      <GridSmallBackgroundDemo />
      <div className="con relative z-10 h-full flex items-center justify-center pt-16 sm:pt-32 flex-col ">
        {/* h1 */}
        <h1 className="text-center">
          <p className="headers font-bold">Build the Best SaaS Applications</p>
          <p className="headers font-bold sm:mt-1 mt-3">
            Materialize Your{" "}
            <FlipWords words={["Dream", "Plans", "Ideas", "Goals"]} /> Now
          </p>
        </h1>
        {/* paragraph */}
        <p className="max-w-[800px] text-gray-600 mt-14 text-center text-base  sm:text-xl  font-semibold">
          We build top-tier websites, mobile apps, and SaaS applications using
          the most advanced tech stacks available.
        </p>
        {/* bullet points */}
        <div className="flex items-center justify-between gap-8 mt-14 flex-wrap ">
          {bulletPoints.map((point) => (
            <h2
              key={point}
              className="flex items-center gap-2   text-gray-600 font-semibold text-[10px] sm:text-xs shrink-0 "
            >
              <CheckCircle className="shrink-0" size={16} />
              {point}
            </h2>
          ))}
        </div>
        {/* Get started button */}

        <Button className="mt-24" variant={'site'}>Get Started</Button>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-3xl">Portfolio</h2>
    </section>
  );
};
