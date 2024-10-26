import React from "react";

export default function Card(props) {
const getColor=(state)=>{
    if (state === "up"){
        return "#15803d"
    }
    else{
        return "#ef4444"
    }
}
const color=getColor(props.state)
  return (
    <div  className="rounded-[15px] p-2  mx-2 bg-white shadow-xl">
    <div style={{backgroundColor:props.bg}} className="inline-block p-2 rounded-full">
    {props.icon}
    </div>
      <p className="text-gray-500 font-bold text-[15px]">{props.name}</p>
      <h1 className="text-gray-700 text-[20px] ">
        {props.value} {(props.name === "Total Sales"  && <span>DZD</span>) || (props.name === "Total Revenue" && <span>DZD</span>)}
      </h1>
      <div>
        <span className="font-bold text-[15px]" style={{color:color}}>  {props.percentage}%  </span>
        <span className="text-[15px] text-gray-400 ml-1">from last month</span>
      </div>
    </div>
  );
}
