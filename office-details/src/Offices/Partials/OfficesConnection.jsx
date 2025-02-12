import { useEffect, useState } from "react";

export default function OfficesConnection({
  blocks,
  dataList,
  detailSelect,
  dataSend,
  onUpdate,
  submitData,
  setSubmitData,
  setActive
}) {
  const [officeName, setOfficeName] = useState({
    connectName: "",
    connectOrder: "",
    connectDetail: "",
  });

  useEffect(() => {
    setOfficeName({
      ...officeName,
      connectName: dataSend.connectName,
      connectOrder: dataSend.connectOrder,
      connectDetail: dataSend.connectDetail,
    });
  }, [dataSend.connectName, dataSend.connectOrder, dataSend.connectDetail]);

  useEffect(() => {
    if (submitData) {
      onUpdate(officeName, dataSend.id);
      setSubmitData(false);
    }
  }, [submitData]);

  function onChangeDetails(event){
    const { name, value} = event.target;
    setOfficeName((extendOffice) => ({
        ...extendOffice,
        [name]: value,
    }))
    setActive(dataSend !== officeName? true : false);
  }

  return (
    <div
        className={`${blocks == false ? "w-full" : "hidden"} ${detailSelect == false
        ? `sm:${blocks == false ? "w-3/5" : "hidden"} md:${blocks == false ? "w-3/4" : "hidden"
        }`
        : "hidden"
        } h-screen overflow-y-auto pt-42 no-scrollbar`}
    >
      <form>
        <div className="overflow-y-auto w-full mt-6">
          <div className="border-2 border-[#EFEEED] rounded-lg shadow-xs m-6 mt-0 p-6 pt-5">
            <h4 className="text-lg font-semibold">Office Connection</h4>
            <div className="md:flex md:gap-5 mt-5">
              <div className="md:w-1/2">
                <p className="text-[#666666]">
                  Connection Name <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                  placeholder="Enter connection name"
                  name="connectName"
                  value={officeName.connectName}
                  onChange={onChangeDetails}
                  required
                />
              </div>
              <div className="mt-5 md:w-1/2 md:mt-0">
                <p className="text-[#666666]">
                  Connection Order <span className="text-red-500">*</span>
                </p>
                <input
                  type="number"
                  className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                  placeholder="Enter connection order"
                  name="connectOrder"
                  value={officeName.connectOrder}
                  onChange={onChangeDetails}
                  required
                />
              </div>
            </div>
            <div className={`w-full mt-5 ${dataList.length == 1? "hidden" : "block"}`}>
              <p className="text-[#666666]">
                Connection Details <span className="text-red-500">*</span>
              </p>
              <select
                name="connectDetail"
                className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                value={officeName.connectDetail}
                onChange={onChangeDetails}
              >
                {dataList.map((n) => {
                  if (n.id !== dataSend.id) {
                    return (
                      <option value={n.connectName} key={n.id}>
                        {n.connectName}
                      </option>
                    );
                  }
                })}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
