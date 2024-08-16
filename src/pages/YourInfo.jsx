import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import Title from "../components/Title";
import Input from "../components/Input";
import { dataActions } from "../store";
import ProgressButtons from "../components/ProgressButtons";

const YourInfo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.dataReducer);

  const [values, setValues] = useState({
    name: state.name,
    email: state.email,
    tel: state.tel,
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!values.name || !values.email || !values.tel) {
      setError({
        name: values.name ? "" : "This field is required",
        email: values.email ? "" : "This field is required",
        tel: values.tel ? "" : "This field is required",
      });
      return;
    }

    dispatch(dataActions.saveData(values));

    navigate("select-plan");
  }

  function handleChange(event, field) {
    setValues((prevValues) => ({
      ...prevValues,
      [field]: event.target.value,
    }));
  }

  return (
    <form
      className="px-4 py-2 bg-white w-[62%] h-[460px] self-start mt-6 max-m:h-fit max-m:absolute max-m:w-[90vw] max-m:rounded-lg max-m:py-5 max-m:mt-[-20px] max-m:self-auto"
      onSubmit={handleSubmit}
    >
      <div className="h-[270px] max-[850px]:h-fit">
        <Title
          title="Personal Info"
          desc="Please provide your name, email address, and phone number."
        />
        <Input
          id="name"
          label="Name"
          type="text"
          name="name"
          placeholder="e.g. Stephen King"
          onChange={(event) => handleChange(event, "name")}
          value={values.name}
          error={error}
        />
        <Input
          id="email"
          label="Email Address"
          type="email"
          name="email"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(event) => handleChange(event, "email")}
          value={values.email}
          error={error}
        />
        <Input
          id="tel"
          label="Phone Number"
          type="tel"
          name="tel"
          placeholder="e.g. +1 234 567 890"
          onChange={(event) => handleChange(event, "tel")}
          value={values.tel}
          error={error}
        />
      </div>
      <ProgressButtons />
    </form>
  );
};

export default YourInfo;
