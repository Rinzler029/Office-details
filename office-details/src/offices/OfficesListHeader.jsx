import {
  Cog6ToothIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import Toggle from "../assets/Activate.png";

export default function OfficesListHeader({ blocks, newDetails, dataList }) {
  return (
    <div
      className={`${
        blocks == false ? "hidden" : "w-full"
      } sm:w-2/5 sm:block md:w-1/4 border-r-2 border-[#EFEEED] bg-[#F9F9F9] font-[font-family: Poppins, serif] sticky`}
    >
      <div className="m-5 mt-7">
        <div className="flex">
          <h3 className="text-2xl font-bold">Offices</h3>
        </div>

        <div className="flex gap-5 mt-3 sm:block xl:flex">
          <button className="flex text-blue-500 gap-0.4 cursor-pointer text-sm tracking-wider mt-2 sm:mt-5 xl:mt-0 xl:gap-1.5">
            <Cog6ToothIcon className="size-6 text-blue-500" /> Holidays
          </button>
          <button className="flex text-blue-500 gap-0.4 cursor-pointer text-sm tracking-wider mt-2 sm:mt-3 justify-start xl:mt-0 xl:gap-1.5">
            <Cog6ToothIcon className="size-6 text-blue-500" /> Divisions &
            Trades
          </button>
        </div>

        <div className="justify-between gap-2.5 mt-5 xl:flex">
          <div className="border-2 flex p-2 pl-3 rounded border-[#DFDEDE] w-full">
            <MagnifyingGlassIcon className="size-6 text-gray-400" />
            <input
              type="search"
              placeholder="Search by name..."
              className="text-sm pl-2 text-gray-600 tracking-wider focus:outline-0"
            />
          </div>
          <button
            className="border-2 border-[#BDD2F1] p-2 rounded bg-[#EFF4FB] cursor-pointer w-full flex justify-center mt-5 xl:block xl:mt-0 xl:w-auto"
            onClick={newDetails}
          >
            <PlusIcon className="size-6 text-blue-700" />
          </button>
        </div>

        <div className="flex justify-between text-[12px] mt-6 items-center text-[#8D9EB8]">
          <p>{dataList.length} Offices Total</p>
        </div>
      </div>
    </div>
  );
}
