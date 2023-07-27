import Typography from "@/components/typography";

export default function Home() {
  return (
    <div className="flex-1 p-2">
      <Typography tag="h2" variant="4xl">
        Hello there!
      </Typography>
      <Typography tag="h3" variant="lg">
        Choose a algorithm to get start
      </Typography>
    </div>
  );
}
