// import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Gujarat", label: "Gujarat" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Punjab", label: "Punjab" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Telengana", label: "Telengana" },
  { value: "West Bengal", label: "West Bengal" },
];

export default function AddModel({ dispModal, closeModal, onSubmit }) {
  const [officeName, setOfficeName] = useState({
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

  function saveChanges(e) {
    e.preventDefault();
    onSubmit(officeName);
    setOfficeName({
      ...officeName,
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
    closeModal(false);
  }

  // console.log(dataSend)

  // function onChangeDetails(event) {
  //   const { name, value } = event.target;
  //   setOfficeName((addDetails) => ({
  //     ...addDetails,
  //     [name]: value,
  //   }));
  // }

  function onChangeDetails(event) {
    // if (event && event.target) {
    const { name, value } = event.target;
    setOfficeName((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // }
  }

  function handleSelectChange(selectedOption) {
    setOfficeName((prevDetails) => ({
      ...prevDetails,
      offState: selectedOption.value, // Update the state correctly
    }));
  }

  return (
    <div
      className={`${
        dispModal == true ? "block" : "hidden"
      } z-20 absolute w-full h-screen p-8 overflow-auto`}
      style={{ backgroundColor: "rgba(0,0,0,0.8" }}
    >
      <div className="z-1 bg-white h-screen rounded-lg">
        <div className={`w-full h-screen overflow-y-auto no-scrollbar`}>
          <div className="flex justify-between p-3 pt-5 pl-8 pr-8 items-center">
            <h1 className="text-2xl">Add Office Details</h1>
            <button
              className="p-2 pl-3 pr-3 text-white bg-red-500 rounded-lg cursor-pointer"
              onClick={() => closeModal(false)}
            >
              Close
            </button>
          </div>
          <form onSubmit={saveChanges}>
            <div className="overflow-y-auto w-full mt-4">
              <div className="border-2 border-[#EFEEED] rounded-lg shadow-xs m-6 mt-0 p-6 pt-5">
                <h4 className="text-lg font-semibold">Office Info</h4>
                <div className="md:flex md:gap-5 mt-5">
                  <div className="md:w-1/2">
                    <p className="text-[#666666]">
                      Office Name <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                      placeholder="Enter office name"
                      name="offName"
                      value={officeName.offName}
                      onChange={onChangeDetails}
                      required
                    />
                    <p className="italic text-[12px] mt-2 text-[#464646]">
                      Max 100 words
                    </p>
                  </div>
                  <div className="mt-5 md:w-1/2 md:mt-0">
                    <p className="text-[#666666]">
                      Phone <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="number"
                      className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                      placeholder="Enter phone number"
                      name="offPhone"
                      value={officeName.offPhone}
                      onChange={onChangeDetails}
                      required
                    />
                  </div>
                </div>
                <div className="w-full mt-5">
                  <p className="text-[#666666]">
                    Address <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                    placeholder="Enter office address"
                    name="offAddress"
                    value={officeName.offAddress}
                    onChange={onChangeDetails}
                    required
                  />
                </div>
                <div className="md:flex md:gap-5 mt-5">
                  <div className="md:w-1/2 md:mt-0">
                    <p className="text-[#666666]">
                      City <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="text"
                      className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                      placeholder="Enter city"
                      name="offCity"
                      value={officeName.offCity}
                      onChange={onChangeDetails}
                      required
                    />
                  </div>
                  <div className="mt-5 md:w-1/2 md:mt-0">
                    <p className="text-[#666666]">
                      State <span className="text-red-500">*</span>
                    </p>
                    <div className="flex items-center mt-3">
                      {/* <Select
                        name="offState"
                        id="state"
                        className="w-full border-r-2 border-[#DFDEDE]"
                        value={officeName.offState}
                        onChange={onChangeDetails}
                        options={options}
                        required
                      /> */}
                      <Select
                        name="offState"
                        id="state"
                        className="w-full border-1 border-[#DFDEDE] rounded"
                        // defaultValue={officeName.offState}
                        value={options.find(
                          (option) => option.value === officeName.offState
                        )}
                        onChange={handleSelectChange} // Use the new function
                        options={options}
                        required
                      />
                      {/* <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Uttar Pradesh">Uttar pradesh</option>
                        <option value="Telengana">Telengana</option>
                        <option value="West Bengal">West Bengal</option> */}
                      {/* </select> */}
                      {/* <button className="items-center p-2 cursor-pointer">
                        <ChevronDownIcon className="size-5" />
                      </button> */}
                    </div>
                  </div>
                  <div className="mt-5 md:w-1/2 md:mt-0">
                    <p className="text-[#666666]">
                      Zip <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="number"
                      className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                      placeholder="Enter city zip code"
                      name="offZip"
                      value={officeName.offZip}
                      onChange={onChangeDetails}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="border-2 border-[#EFEEED] rounded-lg shadow-xs m-6 p-6 pt-5">
                <h4 className="text-lg font-semibold">Contact Info</h4>
                <div className="md:flex md:gap-5 mt-5">
                  <div className="md:w-1/2">
                    <div>
                      <p className="text-[#666666]">
                        Contact Name <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="text"
                        className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                        placeholder="Enter your name"
                        name="contName"
                        value={officeName.contName}
                        onChange={onChangeDetails}
                        required
                      />
                    </div>
                    <div className="mt-5">
                      <p className="text-[#666666]">
                        Contact Email <span className="text-red-500">*</span>
                      </p>
                      <input
                        type="email"
                        className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                        placeholder="Enter your email"
                        name="contEmail"
                        value={officeName.contEmail}
                        onChange={onChangeDetails}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-5 md:w-1/2 md:mt-0">
                    <p className="text-[#666666]">
                      Contact Phone <span className="text-red-500">*</span>
                    </p>
                    <input
                      type="number"
                      className="border-2 border-[#DFDEDE] rounded p-2 pl-3 w-full mt-3"
                      placeholder="Enter phone number"
                      name="contPhone"
                      value={officeName.contPhone}
                      onChange={onChangeDetails}
                      required
                    />
                  </div>
                </div>
              </div>

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
                      <p className="italic text-[12px] mt-2 text-[#464646]">
                        Max 100 words
                      </p>
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
                </div>
              </div>

              <button className="ml-6 mb-12 pt-3 pb-3 pl-6 pr-6 rounded bg-blue-500 text-sm text-white cursor-pointer">
                Add Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
