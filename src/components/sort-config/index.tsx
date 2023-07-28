import { SortConfig, sortConfigAtom } from "@/app/sort/atom";
import { useAtom } from "jotai";
import Button from "../button";
import Input from "../input";

interface SortConfigProps {}

const SortConfig = ({}: SortConfigProps) => {
  const [sortConfig, setSortConfig] = useAtom(sortConfigAtom);

  const change = (
    key: keyof SortConfig,
    value: SortConfig[keyof SortConfig]
  ) => {
    setSortConfig({
      ...sortConfig,
      [key]: value,
    });
  };

  return (
    <div className="bg-gray-800 rounded-md p-4 gap-3 flex items-end w-6/12">
      <Input
        type="number"
        id="number-of-items"
        label="Number of items"
        max={8}
        value={sortConfig.numberOfItems}
        onChange={(e) => change("numberOfItems", e.target.valueAsNumber)}
      />
      <Input
        step={100}
        type="number"
        id="iteration-delay"
        label="Iteration delay"
        value={sortConfig.delay}
        onChange={(e) => change("delay", e.target.valueAsNumber)}
      />
      <Button
        className="items-end"
        size="lg"
        color={sortConfig.running ? "danger" : "success"}
        onClick={() => {
          change("running", !sortConfig.running);
        }}
      >
        {sortConfig.running ? "Stop" : "Start"}
      </Button>
    </div>
  );
};

export default SortConfig;
