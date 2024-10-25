import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import React from 'react'
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import TestData from '../../const/productData';
import { ProgressBar } from 'primereact/progressbar';

export default function ProductTable() {
    const productTemplate=(rowData)=>{
        return(
            <div className='flex items-center'>
                <img src={rowData.img} alt='product' className='w-[50px] h-[50px] rounded-[5px]'/>
                <div className='flex flex-col ml-2'>
                    <span>{rowData.product}</span>
                    <span className='text-gray-400 text-[15px]'>{rowData.id}</span>
                </div>
            </div>
        )
    }
    const selePercentage=(sales)=>{
        let total = 0; // Use let instead of const
        TestData.productData.forEach((e) => { // Use forEach to iterate
            total += e.sales; // Accumulate sales
        });
        return Math.floor((sales *100) / total);
    }
    const getColorByPercentage = (percentage) => {
        if (percentage >= 60) {
            return '#22c55e'; // High percentage
        } else if (percentage >= 35) {
            return '#fde047'; // Medium percentage
        } else {
            return '#f87171'
        }
    }

    const salesTemplate=(rowData)=>{
        const percentageValue = selePercentage(rowData.sales);
        const color=getColorByPercentage(percentageValue)
        return(
            <div className='flex flex-col'>
                <span><span className='font-bold mr-2'>{rowData.sales}</span>Sales</span>
                <ProgressBar value={percentageValue} showValue={false} className='w-[150px] h-[10px]' color={color}/>
            </div>
        )
    }
    const viewDetailOrderTemplate=(rowData)=>{
        return(
            <div>
                <Link to={`/order/detail/${rowData.id}`}>
                    <LuEye/>
                </Link>
            </div>
        )
    }
    const deleteOrderTemplate=()=>{
        return(
            <div>
                <Link to={'/'}>
                    <RiDeleteBin6Line/>
                </Link>
            </div>
        )
    }
  return (
    <div className='mt-[20px]'>
      <DataTable
      value={TestData.productData}
       showGridlines
       paginator
       rows={5}
       rowsPerPageOptions={[5, 10, 25, 50]}
       tableStyle={{ minWidth: "50rem", borderRadius: "20px" }}
      >
        <Column
        header="Product"
        body={productTemplate}
        sortable
        style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />

         <Column
        header="Price"
        field='price'
        sortable
        style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
         <Column
        header="Quantity"
        field='quantity'
        sortable
        style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
          <Column
        header="Sales"
        body={salesTemplate}
        sortable
        style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
         <Column
        body={viewDetailOrderTemplate}
        style={{
            width: "25%",
            padding: "15px 0",
            borderBottom: "1px solid #cbd5e1",
            borderTop: "1px solid #cbd5e1",
          }}
        />
         <Column
        body={deleteOrderTemplate}
        style={{
            marginLeft:'20px',
            width: "25%",
            padding: "15px 20px",
            borderBottom: "1px solid #cbd5e1",
            borderTop: "1px solid #cbd5e1",
          }}
        />

      </DataTable>
    </div>
  )
}
