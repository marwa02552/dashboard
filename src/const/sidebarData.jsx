import { FaUsers } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiEdit } from "react-icons/ci";
import { CiPickerHalf } from "react-icons/ci";
import { LiaCubesSolid } from "react-icons/lia";
import { FaChartLine } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { GiLouvrePyramid } from "react-icons/gi";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const SidebarData=[
    {
        section:'DASHBOARD',
        tab:[
            {name:'Ecommerce',link:'/',icon:<CiShop className="text-[22px]"/>},
        ]
    },
    {
        section:'PAGES',
        tab:[
            {name:'Orders',link:'/',icon:<MdOutlineShoppingCart className="text-[22px]"/>},
            {name:'Employes',link:'/',icon:<FaUsers className="text-[22px]"/>},
            {name:'Customers',link:'/',icon:<LuUsers2 className="text-[22px]"/>},

        ]
    },
    {
        section:'APPS',
        tab:[
            {name:'Product',link:'/',icon:<LiaCubesSolid className="text-[22px]"/>},
            {name:'Calender',link:'/',icon:<SlCalender className="text-[22px]"/>},
            {name:'Editore',link:'/',icon:<CiEdit className="text-[22px]"/>},
            {name:'Color-picker',link:'/',icon:<CiPickerHalf className="text-[22px]"/>},
        ]
    },
    {
        section:'CHARTS',
        tab:[
            {name:'Line',link:'/',icon:<FaChartLine className="text-[22px]"/>},
            {name:'Area',link:'/',icon:<FaChartArea className="text-[22px]"/>},
            {name:'Financial',link:'/',icon:<MdOutlineShoppingCart className="text-[22px]"/>},
            {name:'Bar',link:'/',icon:<MdBarChart className="text-[22px]"/>},
            {name:'Pie',link:'/',icon:<FaChartPie className="text-[22px]" />},
            {name:'Color-Mapping',link:'/',icon:<MdOutlineShoppingCart className="text-[22px]"/>},
            {name:'Pyramid',link:'/',icon:<GiLouvrePyramid className="text-[22px]"/>},
            {name:'Stacked',link:'/',icon:<FaMoneyBillTrendUp className="text-[22px]"/>},


        ]
    }
]
export default SidebarData