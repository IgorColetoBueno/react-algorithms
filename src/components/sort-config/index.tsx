import Button from "../button";
import Input from "../input";

interface SortConfigProps {}

const SortConfig = ({}: SortConfigProps) => {
  return (
    <div className="absolute right-4 bottom-4 w-[200px]">
      <div className="bg-gray-800 rounded-md p-4 space-y-3">
        <Input id="number-of-items" label="Number of items" />
        <Input id="iteration-delay" label="Iteration delay" />
        <Button className="w-full" size="lg" color="success">
          Start
        </Button>
      </div>
    </div>
  );
};

export default SortConfig;
