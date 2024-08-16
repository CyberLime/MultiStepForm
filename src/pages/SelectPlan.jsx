import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { animate, motion, useAnimate } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import Title from "../components/Title";
import ProgressButtons from "../components/ProgressButtons";
import Plan from "../components/Plan";

import Arcade from "/src/assets/images/icon-arcade.svg";
import Advanced from "/src/assets/images/icon-advanced.svg";
import Pro from "/src/assets/images/icon-pro.svg";

import { planActions } from "../store/index";

const SelectPlan = () => {
  const navigate = useNavigate();

  const dataState = useSelector((state) => state.dataReducer);

  useEffect(() => {
    if (
      dataState.name === "" ||
      dataState.email === "" ||
      dataState.tel === ""
    ) {
      navigate("/");
    }
  }, []);

  const dispatch = useDispatch();

  const planState = useSelector((state) => state.planReducer);

  const [option, setOption] = useState(planState.option);

  function handleChangeOption(value) {
    if (value) {
      setOption(value);
    } else {
      setOption((prevOption) =>
        prevOption === "Monthly" ? "Yearly" : "Monthly"
      );
    }

    dispatch(
      planActions.changeOption(option === "Monthly" ? "Yearly" : "Monthly")
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (planState.plan === "") {
      return;
    }

    navigate("/addons");
  }

  return (
    <form
      className="px-4 py-2 bg-white w-[62%] h-[460px] self-start mt-6 max-m:h-fit max-m:absolute max-m:w-[90vw] max-m:rounded-lg max-m:py-5 max-m:mt-[-20px] max-m:self-auto"
      onSubmit={handleSubmit}
    >
      <div className="h-[270px] max-[850px]:h-fit">
        <Title
          title="Select your plan"
          desc="You have the option of monthly or yearly billing."
        />
        <ul className="flex flex-wrap justify-center gap-5 w-full mt-8 max-m:flex-col max-m:gap-3 max-m:mt-4">
          <Plan option={option} img={Arcade} plan="Arcade" price={9} />
          <Plan option={option} img={Advanced} plan="Advanced" price={12} />
          <Plan option={option} img={Pro} plan="Pro" price={15} />
        </ul>
        <div
          className={`${
            option === "Monthly"
              ? "mt-[68px] max-m:mt-[12px]"
              : "mt-[47px] max-m:mt-[12px]"
          } flex justify-center items-center gap-5 w-[100%] h-12 bg-light-gray rounded-lg max-m:h-8`}
        >
          <span
            className={`font-medium cursor-pointer no-selection max-m:text-[14px] ${
              option === "Monthly" ? "text-marine-blue" : "text-cool-gray"
            }`}
            onClick={() => handleChangeOption("Monthly")}
          >
            Monthly
          </span>
          <motion.div
            whileHover={{ scale: 1.03, cursor: "pointer" }}
            className={`flex items-center w-10 h-5 px-1 bg-marine-blue rounded-full max-m:w-8 max-m:h-4 ${
              option === "Yearly" ? "justify-end" : ""
            }`}
            onClick={() => handleChangeOption()}
          >
            <motion.div
              layout
              transition={{ type: "spring", duration: 0.3, bounce: 0.5 }}
              className="bg-white w-3 h-3 rounded-full max-m:w-2 max-m:h-2"
            />
          </motion.div>
          <span
            className={`font-medium cursor-pointer no-selection max-m:text-[14px] ${
              option === "Yearly" ? "text-marine-blue" : "text-cool-gray"
            }`}
            onClick={() => handleChangeOption("Yearly")}
          >
            Yearly
          </span>
        </div>
      </div>
      <ProgressButtons back="/" />
    </form>
  );
};

export default SelectPlan;
