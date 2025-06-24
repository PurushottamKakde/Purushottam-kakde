import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer Intern
        <span className="text-textGreen tracking-wide">
          @IT-NetworkZ Infosystems
        </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2022 - Apr 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained hands-on experience in HTML, CSS, and JavaScript, building the
          foundation for responsive web development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and deployed basic front-end projects such as a Portfolio
          Website, To-Do List, Digital Clock, Calculator, and more. Learned the
          fundamentals of Salesforce CRM and explored its basic functionalities.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Improved understanding of DOM manipulation, CSS styling, and
          JavaScript logic building through real-world mini projects.
          Strengthened skills in version control using GitHub, and followed best
          practices in code structuring.
        </li>
      </ul>
    </motion.div>
  );
};

export default Splash;
