import { useDispatch, useSelector } from "react-redux";

import { planActions } from "../store";

const Plan = ({ option, img, plan, price }) => {
  const state = useSelector((state) => state.planReducer.plan);
  const dispatch = useDispatch();

  function handleChangePlan(plan) {
    dispatch(planActions.changePlan({ plan, price }));
  }

  return (
    <li className="flex h-fit w-[136px] rounded-lg max-m:w-[100%]">
      <input
        id={plan}
        defaultChecked={state === plan}
        type="radio"
        name="plan"
        className="hidden peer"
      />
      <label
        onClick={() => handleChangePlan(plan)}
        htmlFor={plan}
        className="flex flex-col h-full w-full px-3 py-4 border border-solid border-light-gray rounded-lg peer-checked:bg-light-gray peer-checked:border-purplish-blue cursor-pointer hover:border-purplish-blue transition-colors max-m:flex-row max-m:items-center max-m:gap-4 max-m:py-2"
      >
        <img src={img} alt="plan img" className="w-8 h-8 max-m:self-start" />
        <div>
          <h2 className="text-marine-blue font-bold mt-10 max-m:mt-0">
            {plan}
          </h2>
          <p className="text-cool-gray max-m:text-[14px]">
            ${option === "Monthly" ? price : price * 10}/
            {option === "Monthly" ? "mo" : "yr"}
          </p>
          {option === "Yearly" && (
            <p className="text-marine-blue text-[14px] font-medium">
              2 months free
            </p>
          )}
        </div>
      </label>
    </li>
  );
};

export default Plan;
