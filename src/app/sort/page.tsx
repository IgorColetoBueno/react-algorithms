"use client";
import SortBoard from "@/app/sort/_sort-board";
import SortDescription from "@/app/sort/_sort-board/SortDescription";
import SortConfig from "@/components/sort-config";
import Typography from "@/components/typography";
import { useSearchParams } from "next/navigation";

const SortPage = () => {
  const params = useSearchParams();
  const type = params.get("type") as string;

  return (
    <div className="space-y-3">
      <Typography tag="h2" variant="2xl">
        {type}
      </Typography>
      <SortDescription type={type} />
      <SortConfig />
      <SortBoard />
    </div>
  );
};

export default SortPage;
