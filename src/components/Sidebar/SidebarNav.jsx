import SidebarNavLink from "./SidebarNavLink";

const SidebarNav = () => {
  return (
    <div
      className="
          bg-desktop w-60 h-[512px] bg-cover bg-no-repeat rounded-xl overflow-hidden px-7 py-2
          max-m:bg-mobile max-m:w-[100vw] max-m:h-36 max-m:flex justify-center max-m:absolute max-m:top-0 max-m:rounded-none
                  "
    >
      <ul className="max-m:flex max-m:gap-5">
        <SidebarNavLink to="/" order={1} text="Your Info" />
        <SidebarNavLink to="select-plan" order={2} text="Select Plan" />
        <SidebarNavLink to="addons" order={3} text="Add-Ons" />
        <SidebarNavLink to="summary" order={4} text="Summary" />
      </ul>
    </div>
  );
};

export default SidebarNav;
