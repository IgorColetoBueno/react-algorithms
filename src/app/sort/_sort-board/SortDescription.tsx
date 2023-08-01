import { SORT_ALGORITHMS_WITH_DESCRIPTIONS } from "@/config/algorithms";
import Typography from "../../../components/typography";

interface SortDescriptionProps {
  type: string;
}

const SortDescription = ({ type }: SortDescriptionProps) => {
  return <Typography tag="p">
    {SORT_ALGORITHMS_WITH_DESCRIPTIONS[type]}
  </Typography>;
};

export default SortDescription;
