import React from "react";

export default function Input(props) {
  return (
    <div className=" flex flex-col px-[10px] my-[10px]">
      <label className="text-[15px] font-[500] text-gray-400 mb-[5px] ">{props.lable}</label>
      <input
        className="border-none bg-gray-100 rounded-[10px] py-[7px] px-[8px] focus:outline-none   focus:border-violet-500   focus:ring-2 focus:ring-violet-500 font-[500] text-[15px] h-[45px]"
        type={props.type}
        placeholder={props.placeholder}
        style={{ width: props.width }}
        onChange={props.handelChange}
        value={props.value}
        
      />
    </div>
  );
}
