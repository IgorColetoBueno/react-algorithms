import { DetailedHTMLProps, LiHTMLAttributes, PropsWithChildren } from "react";
import {twJoin} from 'tailwind-merge'

interface SidebarItemProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>{}

const SidebarItem = ({ children, ...rest }: PropsWithChildren<SidebarItemProps>) => {
  return <li {...rest} className={twJoin(rest.className, 'hover:bg-gray-700 p-2 rounded-md cursor-pointer')}>{children}</li>;
};

export default SidebarItem;
