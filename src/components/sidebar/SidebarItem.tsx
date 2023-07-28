"use client";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { DetailedHTMLProps, LiHTMLAttributes, PropsWithChildren } from "react";
import { twJoin } from "tailwind-merge";
import Typography from "../typography";

interface SidebarItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  to: LinkProps["href"];
}

const SidebarItem = ({
  children,
  to,
  ...rest
}: PropsWithChildren<SidebarItemProps>) => {
  const params = useSearchParams();
  return (
    <Link href={to}>
      <li
        data-selected={children === params.get("type")}
        {...rest}
        className={twJoin(
          rest.className,
          "hover:bg-gray-700 p-2 rounded-md cursor-pointer data-[selected=true]:bg-gray-700"
        )}
      >
        <Typography variant="sm">{children}</Typography>
      </li>
    </Link>
  );
};

export default SidebarItem;
