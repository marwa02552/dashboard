import React, { useState } from "react";
import Sidebar from "../../../componnets/sidebar/sidebar";
import Navbar from "../../../componnets/navbar/navbar";
import Links from "../../../const/links";
import Input from "../../../componnets/input/input";
import Select from "../../../componnets/input/select";
import InputData from "../../../const/inputData";
import Button from "../../../componnets/button/button";
import RemouveButton from "../../../componnets/button/remouveButton";
const LinkSection = (props) => {
  return (
    <a
      href={props.id}
      className="flex items-center my-[15px] px-[10px] hover:bg-gray-100 hover:rounded-[20px] "
    >
      {props.icon}
      <div className="flex flex-col ml-[10px]">
        <spna className="text-gray-950 text-[15px] font-bold">
          {props.titel}
        </spna>
        <spna className="text-[15px] text-gray-400 mt-[-4px] w-[300px]">
          {props.description}
        </spna>
      </div>
    </a>
  );
};
export default function CreateOrder() {
  const [payment, setPayment] = useState("Bank Transfer");
  console.log(payment);
  const handelSumbit = () => {
    console.log(payment);
  };
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="pl-[300px] pt-[90px]">
        <h1 className="text-gray-700 font-bold text-[22px] mb-[20px] ">
          Create order
        </h1>
        <div className="  border-solid  rounded-[20px]  p-[20px] mr-[30px] flex items-start">
          <div className=" border border-solid ²mt-[40px] bg-white  flex-col  flex p-[10px] rounded-[20px] sticky top-[80px]   bottom-[10px]   max-h-[calc(100vh-100px)]">
            {Links.map((item) => {
              return (
                <LinkSection
                  id={item.id}
                  icon={item.icon}
                  titel={item.titel}
                  description={item.description}
                />
              );
            })}
          </div>
          <div className=" ">
            <div
              id="selectproduct"
              className="border border-solid rounded-[20px]  bg-white my-[20px] mx-[20px] p-[20px]"
            >
              <h1 className="text-gray-800 font-bold text-[20px]">
                Select products
              </h1>
            </div>
            <div
              id="Customer"
              className="border border-solid rounded-[20px]   bg-white my-[20px] mx-[20px] p-[20px] "
            >
              <h1 className="text-gray-800 font-bold text-[20px]">
                Customer details
              </h1>
              <div className="flex flex-row">
                <Input
                  lable="First name"
                  type="text"
                  placeholder="Fisrt name"
                />
                <Input lable="Last name" type="text" placeholder="Last name" />
              </div>
              <Input lable="Email" type="email" placeholder="Email" />
              <div className=" ">
                <label className="text-[15px] font-[500] text-gray-400 px-[10px]">
                  Phone number
                </label>
                <div className="flex flex-row">
                  <Select
                    name="country"
                    slectStatemnt="select country"
                    data={InputData.countryCodes}
                  />

                  <Input type="tel" placeholder="Phone Number" />
                </div>
              </div>
            </div>
            <div
              id="address"
              className="border border-solid rounded-[20px]  bg-white my-[20px] mx-[20px] p-[20px]"
            >
              <h1 className="text-gray-800 font-bold text-[20px]">
                Address Information
              </h1>
              <Select
                lable="Country"
                name="country"
                slectStatemnt="select country"
                data={InputData.countries}
              />
              <Input type="text" lable="Address" placeholder="Address" />
              <div className="flex flex-row">
                <Input lable="City" type="text" placeholder="City" />
                <Input
                  lable="Postal Code"
                  type="text"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div
              id="payment"
              className="border border-solid rounded-[20px]  bg-white my-[20px] mx-[20px] p-[20px]"
            >
              <h1 className="text-gray-800 font-bold text-[20px]">Payment</h1>
              <Select
                value={payment}
                onChange={(e) => setPayment(e.target.value)} // This updates the payment state
                label="Payment method"
                selectStatement="Select payment method" // Optional placeholder
                data={InputData.paymentType}
              />
              {payment === "Bank Transfer" && (
                <div>
                  <Input
                    lable="Bank name"
                    type="text"
                    placeholder="Bank name"
                  />
                  <Input
                    lable="Account number"
                    type="text"
                    placeholder="Account number"
                  />
                  <Input
                    lable="Account holder name"
                    type="text"
                    placeholder="Account holder name"
                  />
                  <div className="flex flex-row">
                    <Input lable="IBAN" type="text" placeholder="IBAN" />
                    <Input
                      lable="Reference number"
                      type="text"
                      placeholder="Reference number"
                    />
                  </div>
                </div>
              )}
              {payment === "Paypal" && (
                <div>
                  <Input
                    lable="Paypal email"
                    type="email"
                    placeholder="Paypal email"
                  />
                </div>
              )}
              {payment === "Credit/Debit Card" &&
               <div>
                  <Input
                    lable="User Name                    "
                    type="text"
                    placeholder="Card holder name"
                  />
                  <Input
                    lable="Credit card number                    "
                    type="text"
                    placeholder="... ... ... ..."
                  />
                  <div className="flex flex-row">
                    <Input lable="Expiration date" type="text" placeholder="../.." />
                    <Input
                      lable="CVV "
                      type="text"
                      placeholder="..."
                    />
                  </div>
                </div>}
            </div>
          </div>
        </div>
        <div className="mr-[30px] rounded-[20px] px-[20px] bg-white py-[15px] border border-solid  flex justify-end">
          <Button name="create"/>
          <RemouveButton name="Discard"/>
        </div>
      </div>
    </div>
  );
}
