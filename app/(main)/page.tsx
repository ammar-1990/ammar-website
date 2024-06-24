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
    </div>
  );
}

const MainSection = () => {
  const bulletPoints = [
    "Bring Ideas To Life",
    "Improve  Your Business",
    "Elevate Your Digital Presence",
    "Design Your Future"
  ];
  return (
    <section className="con relative min-h-[calc(100vh-70px)] ">
      <GridSmallBackgroundDemo />
      <div className="relative z-10 h-full flex items-center justify-center pt-32 flex-col ">
        <h1 className="text-center">
        <p className="headers font-bold">Build Best SaaS Applications</p>
        <p className="headers font-bold mt-2">
          Materialize{" "}
          <FlipWords words={["Dreams", "Plans", "Ideas", "Creativity"]} /> Now
        </p>
        </h1>
     
        <div className="flex items-center gap-8 mt-8 justify-center flex-wrap w-fit self-center  ">
          {bulletPoints.map((point) => (
            <h2
              key={point}
              className="flex items-center gap-2   text-gray-700 font-semibold text-[10px] sm:text-base"
            >
              <CheckCircle size={14}/>
              {point}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};
