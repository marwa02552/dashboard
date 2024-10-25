import React from "react";
import SidebarData from "../../const/sidebarData";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 w-[270px] bg-white pt-[25px]  h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto z-[3]  ">
      <div className="flex justify-between px-[25px] pb-[20px] items-center">
        <div>
          <i className="pi pi-shop" style={{ fontSize: "1.5rem",color:"#334155"  }}></i>
          <spna className="text-[24px] text-gray-800 font-[600] ml-[10px]">Shoppy</spna>
        </div>
        <i className="pi pi-times-circle" style={{ fontSize: "1.5rem",color:"#334155" }}  ></i>
      </div>
      <div className="px-[25px]">
        {SidebarData.map((e) => {
          return (
            <>
              <p className="text-[15px] text-gray-400 ">{e.section}</p>
              <div className="flex flex-col  my-[5px]">
                {e.tab.map((item)=>{
                  return(
                   <div className="flex items-center  hover:bg-slate-400 hover:border-solid hover:rounded-[10px] pl-[20px] ">
                    {item.icon}
                     <Link 
                    className="py-[8px] text-[15px] text-gray-700 pl-[8px]"
                    to={item.link}  >{item.name}</Link>
                   </div>
                  )
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
