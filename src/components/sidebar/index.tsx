import { SORT_ALGORITHMS } from "@/config/algorithms";
import SidebarGroup from "./SidebarGroup";
import SidebarItem from "./SidebarItem";
import Typography from "../typography";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 w-2/12 min-h-screen space-y-5">
      <h1 className="text-3xl">React Algorithms</h1>
      <div className="space-y-3">
        <Typography variant="sm">Sort</Typography>
        <SidebarGroup>
          {SORT_ALGORITHMS.map((sort) => (
            <SidebarItem
              to={{ pathname: "/sort", query: { type: sort } }}
              key={sort}
            >
              {sort}
            </SidebarItem>
          ))}
        </SidebarGroup>
      </div>
    </div>
  );
};

export default Sidebar;
