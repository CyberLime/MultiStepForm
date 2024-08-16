import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProgressButtons = ({ back, summary }) => {
  const navigate = useNavigate();

  return (
    <p
      className={`${
        back ? "flex justify-between" : "text-end"
      } mt-36 max-m:fixed max-m:bottom-0 max-m:left-0 max-m:bg-white max-m:w-[100vw] max-m:p-3 max-m:px-5`}
    >
      {back && (
        <motion.button
          whileHover={{ color: "hsl(213, 96%, 18%)", scale: 1.03 }}
          transition={{ type: "spring", duration: 0.5, bounce: "0.6" }}
          className="text-cool-gray text-[14px] font-medium"
          onClick={() => navigate(back)}
        >
          Go Back
        </motion.button>
      )}

      <motion.button
        whileHover={{ backgroundColor: "hsl(213, 96%, 30%)", scale: 1.03 }}
        transition={{ type: "spring", duration: 0.5, bounce: "0.6" }}
        className={`${
          summary ? "bg-purplish-blue" : "bg-marine-blue"
        } text-white px-5 py-3 rounded-lg text-[14px] font-medium max-m:rounded-md max-m:py-2`}
      >
        {summary ? "Confirm" : "Next Step"}
      </motion.button>
    </p>
  );
};

export default ProgressButtons;
