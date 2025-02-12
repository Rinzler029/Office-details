import OfficesDetails from "./OfficesDetails";
import OfficesList from "./OfficesList";
import OfficesDetailsHeader from "./OfficesDetailsHeader";
import OfficesListHeader from "./OfficesListHeader";
import OfficesConnection from "./OfficesConnection";
import { useEffect, useState } from "react";
import AddModel from "./AddModel";

export default function Offices() {
  const [myDatas, setMyDatas] = useState({
    id: "",
    offName: "",
    offPhone: "",
    offAddress: "",
    offCity: "",
    offState: "Gujarat",
    offZip: "",
    contName: "",
    contEmail: "",
    contPhone: "",
    connectName: "",
    connectOrder: "",
    connectDetail: "",
  });

  // const [dataList, setDataList] = useState([]);
  const [dataList, setDataList] = useState(() => {
    const localValue = localStorage.getItem("DATAS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("DATAS", JSON.stringify(dataList));
  }, [dataList]);

  const [blocks, setBlocks] = useState(true);
  const [dispModal, setDispModal] = useState(false);
  const [detailSelect, setDetailSelect] = useState(true);
  const [submitData, setSubmitData] = useState(false);
  const [active, setActive] = useState(false);

  function detailsAdder() {
    setDispModal(true);
  }

  function addDetailList(officeName) {
    if (officeName.length == 0) {
      setBlocks(false);
    } else {
      setDataList((pre) => {
        return [...pre, { id: crypto.randomUUID(), ...officeName }];
      });
    }
  }

  function deleteList(ids) {
    if (confirm("do you want to delete this office?") == true) {
      setBlocks(true);
      const dataList = (deldatas) => {
        return deldatas.filter((dList) => dList.id !== ids);
      };
      setDataList(dataList);
    }
  }

  function updateList(officeName, id) {
    const datasOn = (currentLists) => {
      return currentLists.map((datas) => {
        if (datas.id === id) {
          return { ...datas, ...officeName };
        }
        return datas;
      });
    };
    setDataList(datasOn);
  }

  function updater(dataList) {
    setMyDatas({
      ...myDatas,
      ...dataList,
    });
    setBlocks(false);
  }

  function selectDetails() {
    setDetailSelect(true);
  }

  function selectConnection() {
    setDetailSelect(false);
  }

  console.log(dataList);

  return (
    <div>
      <AddModel
        dispModal={dispModal}
        closeModal={setDispModal}
        onSubmit={addDetailList}
      />
      <div>
        <div className="flex fixed w-full z-10">
          <OfficesListHeader
            blocks={blocks}
            newDetails={detailsAdder}
            dataList={dataList}
          />
          <OfficesDetailsHeader
            blocks={blocks}
            selectDetails={selectDetails}
            selectConnection={selectConnection}
            detailSelect={detailSelect}
            goBack={() => setBlocks(true)}
            setSubmitData={setSubmitData}
            setBlocks={setBlocks}
            setActive={setActive}
            active={active}
          />
        </div>
        <div className="flex">
          <OfficesList
            blocks={blocks}
            dataList={dataList}
            deleteList={deleteList}
            updater={updater}
            setActive={setActive}
          />
          <OfficesDetails
            blocks={blocks}
            detailSelect={detailSelect}
            onUpdate={updateList}
            dataSend={myDatas}
            dataList={dataList}
            submitData={submitData}
            setSubmitData={setSubmitData}
            setActive={setActive}
            active={active}
          />
          <OfficesConnection
            blocks={blocks}
            detailSelect={detailSelect}
            onUpdate={updateList}
            dataList={dataList}
            dataSend={myDatas}
            submitData={submitData}
            setSubmitData={setSubmitData}
            setActive={setActive}
            active={active}
          />
        </div>
      </div>
    </div>
  );
}
