import { useNavigate } from "react-router-dom";

import Title from "../components/Title";
import ProgressButtons from "../components/ProgressButtons";
import Addon from "../components/Addon";

const Addons = () => {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    navigate("/summary");
  }

  return (
    <form
      className="px-4 py-2 bg-white w-[62%] h-[460px] self-start mt-6 max-m:h-fit max-m:absolute max-m:w-[90vw] max-m:rounded-lg max-m:py-5 max-m:mt-[-20px] max-m:self-auto"
      onSubmit={handleSubmit}
    >
      <div className="h-[270px] max-[850px]:h-fit">
        <Title
          title="Pick add-ons"
          desc="Add-ons help enhance your gaming experience."
        />
        <Addon
          addon="Online service"
          desc="Access to multiplayer games"
          price={1}
          className="mt-8 max-m:mt-4"
        />
        <Addon
          addon="Larger storage"
          desc="Extra 1TB of cloud save"
          price={2}
        />
        <Addon
          addon="Customizable profile"
          desc="Custom theme on your profile"
          price={2}
        />
      </div>
      <ProgressButtons back="/select-plan" />
    </form>
  );
};

export default Addons;
