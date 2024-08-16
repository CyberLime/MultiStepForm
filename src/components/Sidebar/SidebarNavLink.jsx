import { useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";

const SidebarNavLink = ({ to, order, text }) => {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <li>
      <NavLink
        onClick={handleClick}
        to={to}
        className={`navlink ${(isActive) =>
          isActive
            ? "active"
            : ""} flex items-center gap-3 uppercase mt-6 font-ubuntu max-m:mt-3`}
      >
        <div className="flex justify-center items-center w-8 h-8 border-solid border rounded-full font-bold">
          {order}
        </div>
        <div className="max-m:hidden">
          <p className="text-cool-gray text-[14px]">Step {order}</p>
          <p className="text-white font-medium leading-4 text-[14px] tracking-wider">
            {text}
          </p>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarNavLink;
