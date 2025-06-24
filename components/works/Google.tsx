import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Trainee Intern
        <span className="text-textGreen tracking-wide">@Great Learning</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2021 - Oct 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          As a trainee intern at Great Learning, I had the opportunity to work
          closely with the MySQL database management including schema design,
          table creation, and query optimization.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          During my internship, I Practiced core SQL commands such as SELECT,
          INSERT, UPDATE, DELETE, JOIN, GROUP BY, HAVING, and subqueries to
          retrieve and manage data efficiently. Understood normalization
          techniques and applied them for structured and scalable database
          design.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          This internship was a significant learning experience as it provided
          me with the opportunity to grow both technically and professionally.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
