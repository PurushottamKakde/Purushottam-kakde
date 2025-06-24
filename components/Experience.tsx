import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Google from "./works/Google";
import ReactBD from "./works/ReactBD";
import Splash from "./works/Splash";

const Experience = () => {
  const [workRd, setWorkRd] = useState(true);
  const [workReactbd, setWorkReactbd] = useState(false);
  const [workGoogle, setWorkGoogle] = useState(false);

  const handleRd = () => {
    setWorkRd(true);
    setWorkGoogle(false);
    setWorkReactbd(false);
  };
  const handleReactbd = () => {
    setWorkRd(false);
    setWorkGoogle(false);
    setWorkReactbd(true);
  };

  const handleGoogle = () => {
    setWorkRd(false);
    setWorkReactbd(false);
    setWorkGoogle(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleRd}
            className={`${
              workRd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            IT-NetworkZ Infosystems
          </li>
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Apna College
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Great Learning
          </li>
        </ul>
        {workRd && <Splash />}
        {workReactbd && <ReactBD />}
        {workGoogle && <Google />}
      </div>
    </section>
  );
};

export default Experience;
