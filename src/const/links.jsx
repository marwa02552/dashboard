import { FaCube } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

const Links=[
    {
        id:"#selectproduct",
        icon:<FaCube className="text-[18px]  bg-gray-200 rounded-full h-[30px] w-[30px] p-[5px]" />,
        titel:"Select products",
        description:"Add product to purchase list.        "
    },
    {
        id:"#Customer",
        icon:<FaRegUserCircle className="text-[18px]  bg-gray-200 rounded-full h-[30px] w-[30px] p-[5px]"/>,
        titel:"Customer details",
        description:"Enter customer information like name, email & phone number.        "
    },
    {
        id:"#address",
        icon:<MdOutlinePlace className="text-[18px]  bg-gray-200 rounded-full h-[30px] w-[30px] p-[5px]"/>,
        titel:"Address Information",
        description:"Provide shipping address details.    "
    },
    {
        id:"#payment",
        icon:<MdOutlinePayment className="text-[18px]  bg-gray-200 rounded-full h-[30px] w-[30px] p-[5px]"/>,
        titel:"Payment",
        description:"Enter payment method and details to complete the transaction.        "
    }
]

export default Links;