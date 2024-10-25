import React from "react";
import Sidebar from "../../componnets/sidebar/sidebar";
import Navbar from "../../componnets/navbar/navbar";
import { Button } from "primereact/button";
import DataTable from "../../componnets/table/datatable";

export default function Order() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="ml-[270px]  pt-[100px]">
        <div className="mx-[30px] border-solid rounded-[20px] bg-white p-[20px]">
          <div className="flex justify-between items-center mb-[15px]">
            <h1 className="text-gray-700 font-bold text-[20px]">Orders</h1>
            <div>
              <Button className="py-[7px] px-[18px] text-white bg-blue-500 rounded-[12px]">
                <i className="pi pi-plus mr-2"></i>
                <span>Add new</span>
              </Button>

              <Button className="ml-[10px] py-[7px] px-[18px] text-gray-700 border-solid border-gray-400 border-[1px] font-bold rounded-[12px]">
                <i className="pi pi-cloud-download mr-2"></i>
                <span>Download</span>
              </Button>
            </div>
          </div>

          <div>
            <DataTable/>
          </div>
          
        </div>
      </div>
    </div>
  );
}
