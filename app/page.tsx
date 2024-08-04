import Chartcomponents from "@/components/Chartcomponents";
import CheckList from "@/components/CheckList";
import Players from "@/components/Players";

export default function Home() {
  return (
    <div className="custom-height mx-auto max-w-[90rem]">
      <div className="custom-height flex min-h-[705px] gap-5 pb-10 pt-5">
        <div className="w-full flex-1 bg-[#1C1C1E] rounded-lg">
          <Players />
        </div>
        <div className="w-[600px] bg-[#1C1C1E] rounded-lg">
          <Chartcomponents />
        </div>
        <div className="w-full flex-1 bg-[#1C1C1E] rounded-lg ">
          <CheckList />
        </div>
      </div>
    </div>
  );
}

// rounded-[20px] border bg-black
