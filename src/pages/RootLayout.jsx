import { Outlet } from "react-router-dom";

import SidebarNav from "../components/Sidebar/SidebarNav";

const RootLayout = () => {
  return (
    <div className="font-ubuntu flex items-center justify-between max-w-[800px] w-[95vw] bg-white h-fit p-3 rounded-xl gap-5 max-m:justify-center max-m:bg-transparent">
      <SidebarNav />
      <Outlet />
    </div>
  );
};

export default RootLayout;
