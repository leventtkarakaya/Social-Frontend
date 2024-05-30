import Publish from "./PublishArea/Publish";
import ContentCard from "./ContentList/ContentCard";
import { Sidebar } from "@/app/components/index";
export default function Main() {
  return (
    <>
      {/* Content Area  */}
      <div className="container w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex flex-col w-full">
            <Publish />
            <ContentCard />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
