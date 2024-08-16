const Title = ({ title, desc }) => {
  return (
    <>
      <h1 className="text-marine-blue font-bold text-3xl tracking-wide max-m:text-2xl">
        {title}
      </h1>
      <p className="text-cool-gray mt-1">{desc}</p>
    </>
  );
};

export default Title;
