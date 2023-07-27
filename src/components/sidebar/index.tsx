import { SORT_ALGORITHMS } from "@/config/algorithms";
import SidebarGroup from "./SidebarGroup";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 text-white p-4 w-2/12 space-y-5">
      <h1 className="text-3xl">React Algorithms</h1>
      <div className="space-y-3">
        <h4>Sort</h4>
        <SidebarGroup>
          {SORT_ALGORITHMS.map((sort) => (
            <SidebarItem key={sort}>{sort}</SidebarItem>
          ))}
        </SidebarGroup>
      </div>
    </div>
  );
};

export default Sidebar;
