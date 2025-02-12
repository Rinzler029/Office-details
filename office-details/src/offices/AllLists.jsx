import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function AllList({
  deleteList,
  updater,
  dataLists,
  setSelected,
  selected,
  setActive,
}) {

  return (
    <div
      className={`flex justify-between pl-3 pr-3 mt-3 mb-3 w-full cursor-pointer items-center hover:bg-[#e4efff] hover:rounded-lg ${
        selected == dataLists.id ? "bg-[#EFF4FB] rounded-lg" : "bg-none"
      }`}
    >
      <div
        className="w-5/6 pt-4 pb-5"
        onClick={() => {
          updater(dataLists), setSelected(dataLists.id);
          setActive(false);
        }}
      >
        <a
          className={`text-start ${
            selected == dataLists.id ? "font-semibold" : "font-normal"
          }`}
        >
          {dataLists.offName}
        </a>
      </div>
      <button
        className="cursor-pointer w-1/6 flex justify-end pt-5 pb-5 items-center"
        onClick={() => deleteList(dataLists.id)}
      >
        <EllipsisHorizontalIcon className="size-7 text-gray-600" />
      </button>
    </div>
  );
}
