import PopularUserCard from "./Components/PopularUserCard";
import PopularContentCard from "./Components/PopularContentCard";
import SidebarCard from "./Components/SidebarCard";

export default function Sidebar() {
  return (
    <div className="fixed top-28 lg:w-[50%] max-lg:hidden right-0 p-2 h-screen">
      <div className="flex flex-col h-full gap-y-1">
        <SidebarCard
          title="Popüler Kullanıcılar"
          component={<PopularUserCard />}
        />
        <SidebarCard
          title="Popüler İçerikler"
          component={<PopularContentCard />}
        />
      </div>
    </div>
  );
}
