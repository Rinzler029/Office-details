import { ArrowUturnLeftIcon, FolderIcon } from "@heroicons/react/24/outline";

export default function OfficesDetailsHeader({
  blocks,
  goBack,
  selectDetails,
  selectConnection,
  detailSelect,
  setSubmitData,
  setBlocks,
  setActive,
  active,
}) {

  return (
    <div
      className={`${
        blocks == false ? "w-full" : "hidden"
      } sm:w-3/5 sm:block md:w-3/4`}
    >
      <div className="bg-white pb-5">
        <div
          className={`flex justify-between border-b-2 p-6 sm:p-6 border-[#DFDEDE] items-center ${
            blocks == false ? "sm:p-6" : "sm:p-8 sm:pl-6"
          }`}
        >
          <h3 className="text-2xl font-bold">
            {blocks == false
              ? detailSelect == true
                ? "Office Details"
                : "Make Connections"
              : "No Offices Selected"}
          </h3>
          <div className="flex items-center gap-2">
            <button
              className="p-2 border-4 rounded-lg bg-red-500 text-white sm:hidden"
              onClick={goBack}
            >
              <ArrowUturnLeftIcon className="size-6" />
            </button>
            {active == true ? (
              <button
                className="p-2 border-4 rounded-lg bg-blue-700 text-white sm:hidden"
                onClick={() => {
                  setSubmitData(true), setBlocks(true);
                }}
              >
                <FolderIcon className="size-6" />
              </button>
            ) : (
              <button className="p-2 border-4 rounded-lg border-white bg-[#EFEEED] text-[#B6B6B6] sm:hidden">
                <FolderIcon className="size-6" />
              </button>
            )}
          </div>
          {active == true ? (
            <button
              className={`ml-6 pt-3 pb-3 pl-6 pr-6 rounded bg-blue-500 text-sm text-white cursor-pointer hidden  ${
                blocks == false ? "sm:block" : "hidden"
              }`}
              onClick={() => {
                setSubmitData(true), setActive(false);
              }}
            >
              Save Changes
            </button>
          ) : (
            <button
              className={`ml-6 pt-3 pb-3 pl-6 pr-6 rounded bg-[#EFEEED] text-sm text-[#B6B6B6] cursor-pointer hidden  ${
                blocks == false ? "sm:block" : "hidden"
              }`}
            >
              Save Changes
            </button>
          )}
        </div>

        <div
          className={`border-b-2 border-[#DFDEDE] ml-6 mr-6 mt-8 ${
            blocks == false ? "w-full" : "hidden"
          }`}
        >
          <button
            className={`pb-3 text-sm ${
              detailSelect == true
                ? "border-b-3  text-blue-700 border-blue-500"
                : "border-0 text-[#666666]"
            } tracking-wider cursor-pointer`}
            onClick={selectDetails}
          >
            Office Details
          </button>
          <button
            className={`pb-3 text-sm ml-12 ${
              detailSelect == false
                ? "border-b-3  text-blue-700 border-blue-500"
                : "border-0 text-[#666666]"
            } tracking-wider cursor-pointer`}
            onClick={selectConnection}
          >
            Make Connections
          </button>
        </div>
      </div>
    </div>
  );
}
