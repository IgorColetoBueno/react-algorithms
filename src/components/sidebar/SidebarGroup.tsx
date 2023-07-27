import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";

interface SidebarGroupProps extends  DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{}

const SidebarGroup = ({ children, ...rest }: PropsWithChildren<SidebarGroupProps>) => {
  return <ul {...rest} className={twJoin(rest.className, 'space-y-1')}>{children}</ul>;
};

export default SidebarGroup;
