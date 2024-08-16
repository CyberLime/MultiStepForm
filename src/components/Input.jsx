const Input = ({ label, error, ...input }) => {
  return (
    <div className="mt-5 max-m:mt-3">
      <label
        htmlFor={input.name}
        className="flex justify-between text-marine-blue font-medium max-m:text-[14px]"
      >
        <span>{label}</span>
        {error && (
          <span className="text-[14px] text-strawberry-red font-bold">
            {error[input.name]}
          </span>
        )}
      </label>
      <input
        {...input}
        className={`${
          error[input.name]
            ? "border-strawberry-red border-2"
            : "border-light-gray border"
        } py-2 w-[100%] mt-1 rounded-lg outline-purplish-blue border-solid text-marine-blue font-bold px-4 max-m:mt-0`}
      />
      <br />
    </div>
  );
};

export default Input;
