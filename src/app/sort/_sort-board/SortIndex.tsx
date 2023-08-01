import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

interface SortIndexProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const sortIndexStyles = tv({
  base: "rounded-full bg-gray-700 flex justify-center items-center w-20 h-20 border border-gray-400 text-white text-lg",
  variants: {
    color: {
      current: "border-2 border-green-600",
      affected: "border-2 border-red-400",
    },
  },
});

type Props = VariantProps<typeof sortIndexStyles> &
  PropsWithChildren<SortIndexProps>;

const SortIndex = ({ className, color, children, ...rest }: Props) => {
  return (
    <div {...rest} className={twMerge(className, sortIndexStyles({ color }))}>
      {children}
    </div>
  );
};

export default SortIndex;
