import React from "react";
import NavBar from "../../../componnets/navbar/navbar";
import SideBar from "../../../componnets/sidebar/sidebar";
import Input from "../../../componnets/input/input";
import Select from "../../../componnets/input/select";
import InputData from "../../../const/inputData";
import ButtonComp from "../../../componnets/button/button";
import RemouveButton from "../../../componnets/button/remouveButton";
export default function CreateProduct() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="ml-[270px] mt-[60px]">
        <h1 className="font-bold text-gray-700 mx-6 pt-3">Create product</h1>
        <div className="flex flex-row">
          <div>
            <div className="border border-solid rounded-[20px] bg-white my-4 p-3 mx-5">
              <h1 className="font-bold text-gray-700">Basic Information</h1>
              <Input
                lable="Product name"
                placeholder="Product name"
                type="text"
              />
              <Input
                lable="Product code"
                placeholder="Product code"
                type="text"
              />
            </div>
            <div className="border border-solid rounded-[20px] bg-white my-4 p-3 mx-5">
              <h1 className="font-bold text-gray-700">Pricing</h1>
              <Input lable="Price" placeholder="DZD 0.00" type="number" />
              <Input lable="Cost price" placeholder="DZD 0.00" type="number" />
              <div className="flex flex-row">
                <Input
                  lable="Bulk discount price"
                  placeholder="DZD 0.00"
                  type="number"
                />
                <Input lable="Tax rate(%)" placeholder="0" type="number" />
              </div>
            </div>
          </div>
          <div>
            <div className="border border-solid rounded-[20px] bg-white my-4 p-3 mx-5">
              <h1 className="font-bold text-gray-700">Product Image</h1>
              <p className="text-[15px] text-gray-400">
                Choose a product photo or simply drag and drop up to 5 photos
                here.
              </p>
            </div>
            <div className="border border-solid rounded-[20px] bg-white my-4 p-3 mx-5">
              <h1 className="font-bold text-gray-700">Attribute</h1>
              <Select
                label="Category"
                selectStatement="Select..."
                data={InputData.Category}
              />
              <Select
                label="Tags"
                selectStatement="Add tags for product..."
                data={InputData.tag}
              />
              <Input lable="Brand" placeholder="Product brand" type="text" />
            </div>
          </div>
        </div>
        <div className="mr-[30px] rounded-[20px] px-[20px] bg-white py-[15px] border border-solid  flex justify-end">
          <ButtonComp name="create"/>
          <RemouveButton name="Discard"/>
        </div>
      </div>
    </div>
  );
}
