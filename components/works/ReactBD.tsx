import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Dev Intern
        <span className="text-textGreen tracking-wide">@Apna College</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2024 - Apr 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Completed an intensive MERN Stack internship covering Frontend,
          Backend, and Database technologies. Gained in-depth knowledge of HTML,
          CSS, JavaScript, and responsive design using Bootstrap and Tailwind
          CSS, building real-time projects like spoyify clone and travelling
          website.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed strong JavaScript foundations including DOM manipulation,
          closures, promises, async-await, IIFE, prototypes, and ES6 concepts.
          Learned Git & GitHub version control, branching strategies, terminal
          commands, and collaborative workflow using pull requests.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built server-side applications using Node.js, Express.js, and followed
          MVC architecture for scalable development. Worked with both SQL and
          MongoDB databases, performing CRUD operations and understanding data
          modeling. Implemented dynamic frontend-backend integration and used
          EJS templating and middlewares for server-side rendering.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
