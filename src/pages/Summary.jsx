import { redirect, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Title from "../components/Title";
import ProgressButtons from "../components/ProgressButtons";

import ThankYou from "/src/assets/images/icon-thank-you.svg";

const Summary = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.dataReducer);

  useEffect(() => {
    if (state.name === "" || state.email === "" || state.tel === "") {
      navigate("/");
    }
  }, []);

  const {
    plan,
    option,
    price: planPrice,
  } = useSelector((state) => state.planReducer);
  const { addons, price: addonPrice } = useSelector(
    (state) => state.addonReducer
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalPrice =
    addonPrice.length === 0
      ? planPrice
      : planPrice + addonPrice.reduce((t, el) => (t += el));

  function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 px-4 py-2 bg-white w-[62%] h-[460px] self-start mt-6 max-m:h-fit max-m:absolute max-m:w-[90vw] max-m:rounded-lg max-m:py-10 max-m:mt-[-20px] max-m:self-auto">
        <img src={ThankYou} alt="thank you" />
        <h1 className="text-marine-blue font-bold text-3xl tracking-wide text-center">
          Thank you!
        </h1>
        <p className="text-cool-gray text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support support@loremgaming.com
        </p>
      </div>
    );
  }

  return (
    <form
      className="px-4 py-2 bg-white w-[62%] h-[460px] self-start mt-6 max-m:h-fit max-m:absolute max-m:w-[90vw] max-m:rounded-lg max-m:py-5 max-m:mt-[-32px] max-m:self-auto"
      onSubmit={handleSubmit}
    >
      <div className="h-[270px] max-[850px]:h-fit">
        <Title
          title="Finishing up"
          desc="Double-check everything looks OK before confirming."
        />
        <div className="px-6 py-4 bg-light-gray rounded-lg mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-marine-blue font-bold">
                {plan} ({option})
              </h2>
              <motion.button
                whileHover={{
                  color: "hsl(213, 96%, 18%)",
                  textDecorationColor: "hsl(213, 96%, 18%)",
                  scale: 1.03,
                }}
                transition={{ type: "spring", duration: 0.5, bounce: "0.6" }}
                className={`text-cool-gray text-[14px] font-medium decoration-solid decoration-2 underline decoration-cool-gray`}
                onClick={() => navigate("/select-plan")}
              >
                Change
              </motion.button>
            </div>
            <h3 className="text-marine-blue font-bold">
              ${option === "Monthly" ? planPrice : planPrice * 10}/
              {option === "Monthly" ? "mo" : "yr"}
            </h3>
          </div>

          {addons.length > 0 && (
            <>
              <div className="h-[0.5px] w-[95%] bg-cool-gray mt-5" />
              <ul>
                {addons.map((addon, index) => (
                  <li
                    key={addon}
                    className="flex items-center justify-between mt-3"
                  >
                    <h4 className="text-cool-gray text-[14px] font-medium">
                      {addon}
                    </h4>
                    <p className="text-marine-blue text-[14px] font-medium">
                      +$
                      {option === "Monthly"
                        ? addonPrice[index]
                        : addonPrice[index] * 10}
                      /{option === "Monthly" ? "mo" : "yr"}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="flex items-center justify-between mt-5 px-6">
          <h5 className="text-cool-gray text-[14px] font-medium">
            Total ({option === "Monthly" ? "per month" : "per year"})
          </h5>
          <p className="text-purplish-blue text-lg font-bold">
            ${option === "Monthly" ? totalPrice : totalPrice * 10}/
            {option === "Monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>
      <ProgressButtons back="/addons" summary />
    </form>
  );
};

export default Summary;
