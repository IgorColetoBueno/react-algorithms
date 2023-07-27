import Body from "@/components/body";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <div className="flex-1 flex">
        <Body />
      </div>
    </main>
  );
}
