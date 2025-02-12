import Toggle from "../assets/Activate.png";
import AllList from "./AllLists";
import { useState } from "react";

export default function OfficesList({ blocks, dataList, deleteList, updater, setActive, setDelId }) {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className={`${
        blocks == false ? "hidden" : "w-full"
      } sm:w-2/5 sm:block md:w-1/4 border-r-2 border-[#EFEEED] bg-[#F9F9F9] font-[font-family: Poppins, serif] overflow-y-auto h-screen pt-75 sm:pt-82 xl:pt-55 no-scrollbar`}
    >
      <div className=" pr-5 pl-5 w-full">
        {dataList.length === 0 && "No Offices Available"}
        {dataList.map((dataLists) => {
          return (
            <AllList
              dataLists={dataLists}
              key={dataLists.id}
              deleteList={deleteList}
              updater={updater}
              setSelected={setSelected}
              selected={selected}
              setActive={setActive}
              // setDelId={setDelId}
            />
          );
        })}
      </div>
    </div>
  );
}
