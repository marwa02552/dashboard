import React from "react";

export default function Select(props) {
  return (
    <div className="flex flex-col px-[10px] my-[10px]">
      <label className="text-[15px] font-[500] text-gray-500 mb-[5px]">{props.label}</label>
      <select 
        className="border-none bg-gray-100 rounded-[10px] py-[7px] px-[8px] focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 font-[500] text-[15px] h-[45px]"
        value={props.value} // Bind the value to state
        onChange={props.onChange} // Bind the change handler
      >
        <option value="" disabled>
          {props.selectStatement} {/* Placeholder for select */}
        </option>
        {props.data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
