import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addonActions } from "../store";

const Addon = ({ addon, desc, price, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.dataReducer);

  useEffect(() => {
    if (state.name === "" || state.email === "" || state.tel === "") {
      navigate("/");
    }
  }, []);

  const { addons } = useSelector((state) => state.addonReducer);
  const { option } = useSelector((state) => state.planReducer);

  const checkmark = useRef();
  const [isSelected, setIsSelected] = useState(addons.indexOf(addon) !== -1);

  function handleSelectAddon() {
    setIsSelected(checkmark.current.checked);
    dispatch(
      addonActions.changeAddons({ id: checkmark.current.id, price: price })
    );
  }

  return (
    <label
      htmlFor={addon}
      className={`flex items-center justify-between w-[100%] h-20 px-6 border border-solid rounded-lg max-m:px-2 max-m:h-fit max-m:py-2 ${
        className ?? "mt-3"
      } ${
        isSelected ? "bg-light-gray border-purplish-blue" : "border-light-gray"
      } hover:border-purplish-blue cursor-pointer transition-colors`}
      // onClick={handleSelectAddon} //! This will make the function re-execute twice bc it triggers the checkbox too
    >
      <div className="flex items-center gap-6 justify-center max-m:gap-[10px]">
        <input
          ref={checkmark}
          id={addon}
          type="checkbox"
          name={addon}
          defaultChecked={isSelected}
          className="w-5 h-5 accent-purplish-blue cursor-pointer max-m:w-[14px] max-m:h-[14px]"
          onChange={handleSelectAddon}
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-marine-blue font-bold inline-block">{addon}</h2>
          <p className="text-cool-gray inline-block max-m:text-[14px]">
            {desc}
          </p>
        </div>
      </div>
      <span className="text-purplish-blue  max-m:text-[14px]">
        +${option === "Monthly" ? price : price * 10}/
        {option === "Monthly" ? "mo" : "yr"}
      </span>
    </label>
  );
};

export default Addon;
