import {
  queryMinds,
  gitShield,
  weatherSnap,
  WanderLust,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://wanderlust-project-ky4n.onrender.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={WanderLust}
                alt="wanderlustImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Compile Hub</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              I built Wanderlust, a travel and stay booking web application
              inspired by Airbnb, using the MERN stack along with Bootstrap,
              JavaScript, HTML, and CSS. The platform enables users to explore
              stays, view detailed listings, and simulate booking experiences.
              With a responsive design and clean UI, this project demonstrates
              real-world full-stack development. It reflects my passion for
              travel-tech and strong frontend-backend integration skills.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>MERN-Stack</li>
              <li>Material UI</li>
              <li>OAuth</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>Render</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/PurushottamKakde"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://wanderlust-project-ky4n.onrender.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://gitshield.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={gitShield}
                alt="gitShieldImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Git Shield</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              I created a Gitignore generator using the MERN stack that produces
              over <span className="text-textGreen">550+</span> .gitignore
              files, helping streamline workflows for the developer community.
              Designed with a focus on delivering the best user experience, it
              simplifies the process of generating{" "}
              <span className="text-textGreen">.gitignore</span> files
              effortlessly.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>MERN-Stack</li>
              <li>Tailwind CSS</li>
              <li>Toptal API</li>
              <li>Responsive Design</li>
              <li>Vercel</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/PurushottamKakde/GitSecure"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://git-secure.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        {/* ============ project Four Start here ================== */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://weather-snap-bice.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={weatherSnap}
                alt="weatherSnapImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Nimbus</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Developed Nimbus, a dynamic weather app providing real-time
              weather forecasts for your city. Integrated the{" "}
              <span className="text-textGreen">OpenWeatherMap</span> API to
              fetch accurate, up-to-the-minute weather data. Implemented a
              responsive design where the website's background changes based on
              the current weather conditions.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>MERN-Stack</li>
              <li>Tailwind CSS</li>
              <li>OpenWeatherMap API</li>
              <li>Vercel</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/PurushottamKakde/Nimbus"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://nimbus-five-rouge.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Four End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
