import { PropsWithChildren } from "react";

const Body = ({ children }: PropsWithChildren) => {
  return <div className="p-4 bg-gray-600 flex-1 text-white">{children}</div>;
};

export default Body;
