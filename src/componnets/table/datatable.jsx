import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext"; // For text filtering
import { Dropdown } from "primereact/dropdown"; // For dropdown filtering
import { InputNumber } from "primereact/inputnumber"; // For number filtering
import Data from "../../const/data"; // Ensure this path is correct
import pic from "../../images/avatar.jpg";
import { Button } from "primereact/button";
import { FilterMatchMode, FilterService } from "primereact/api";
import { Tag } from 'primereact/tag';
import { Link } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

FilterService.register("custom_activity", (value, filters) => {
  const [from, to] = filters ?? [null, null];
  if (from === null && to === null) return true;
  if (from !== null && to === null) return from <= value;
  if (from === null && to !== null) return value <= to;
  return from <= value && value <= to;
});

export default function DataList() {
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    date: { value: null, matchMode: FilterMatchMode.DATE_IS },
    customer: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    paymentMethod: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    total: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value; // Fix: now 'global' filter exists

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const clearFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      date: { value: null, matchMode: FilterMatchMode.DATE_IS },
      customer: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      paymentMethod: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      total: { value: null, matchMode: FilterMatchMode.EQUALS },
      status: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center">
     <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilters}  className="ml-[20px] py-[2px] px-[10px] text-[#06b6d4] border-[#06b6d4]"/>

        <div className="flex items-center gap-2 p-5 relative justify-end ">
          <i className="pi pi-search text-gray-500 relative left-[35px]   "></i>{" "}
          {/* Icon */}
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
            className="h-[40px] pl-[35px] py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
         
        </div>
      </div>
    );
  };

  const paymentMethodeBodyTemplate = (rowData) => {
    return (
      <div className="flex items-center gap-2">
        <img alt="flag" src={pic} style={{ width: "50px" }} />
        <span>{rowData.paymentMethod}</span>
      </div>
    );
  };

  // Custom filter template for Date
  const dateFilterTemplate = (options) => {
    return (
      <input
        type="date"
        value={options.value || ""} // Ensuring it's controlled
        onChange={(e) => {
          options.filterCallback(e.target.value, options.index);
        }}
        className="filter-input my-[10px] py-[5px] pl-[4px]"
      />
    );
  };

  // Custom filter template for Text (Customer)
  const textFilterTemplate = (options) => {
    return (
      <InputText
        value={options.value}
        onChange={(e) =>
          options.filterCallback(e.target.value.trim(), options.index)
        } // Trim for consistency
        placeholder="Search..."
        className="custom-filter-input my-[10px] py-[5px] pl-[4px]"
      />
    );
  };

  // Custom filter template for Status
  const statusFilterTemplate = (options) => {
    const statuses = [
      { label: "Completed", value: "Completed" },
      { label: "Pending", value: "Pending" },
      { label: "Cancelled", value: "Cancelled" },
      { label: "Failed", value: "Failed" },
    ];
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) =>
          options.filterCallback(e.value ? e.value : "", options.index)
        }
        placeholder="Select a status"
        className="custom-filter-input my-[10px] py-[5px] pl-[4px]"
      />
    );
  };

  // Custom filter template for Total
  const totalFilterTemplate = (options) => {
    return (
      <InputNumber
        value={options.value}
        onValueChange={(e) =>
          options.filterCallback(e.value ? String(e.value) : "", options.index)
        }
        mode="currency"
        currency="USD"
        locale="en-US"
        placeholder="Total"
        className="custom-filter-input"
      />
    );
  };
  
  const getSeverity = (status) => {
    switch (status) {
        case 'Completed':
            return '#bef264'; // Green for Completed

        case 'Pending':
            return '#fde047'; // Yellow for Pending

        case 'Cancelled':
            return '#6b7280'; // Gray for Cancelled

        case 'Failed':
            return '#f87171'; // Red for Failed

        default:
            return '#007bff'; // Default color (blue) for unhandled statuses
    }
};

const statusBodyTemplate = (rowData) => {
    return (
        <Tag
            value={rowData.status}
            style={{ backgroundColor: getSeverity(rowData.status), color: '#ffffff' }} // Ensures text is white for readability
            className="py-[4px] px-[4px]"
        />
    );
};
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



  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={Data}
        showGridlines
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem", borderRadius: "20px" }}
        filters={filters} // Apply filters
        globalFilterFields={[
          "date",
          "customer",
          "paymentMethod",
          "total",
          "status",
        ]}
        header={header}
        emptyMessage="No customers found."
      >
        <Column
          field="date"
          header="Date"
          sortable
          filter
          filterElement={dateFilterTemplate}
          style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
        <Column
          field="customer"
          header="Customer"
          sortable
          filter
          filterElement={textFilterTemplate}
          style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
        <Column
          header="Status"
          body={statusBodyTemplate}
          sortable
          filter
          filterElement={statusFilterTemplate}
          style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
        <Column
          header="Payment Method"
          body={paymentMethodeBodyTemplate}
          sortable
          filter
          filterElement={textFilterTemplate}
          style={{
            width: "25%",
            padding: "15px 0",
            borderTop: "1px solid #cbd5e1",
            borderBottom: "1px solid #cbd5e1",
          }}
        />
        <Column
          field="total"
          header="Total"
          sortable
          filter
          filterElement={totalFilterTemplate}
          style={{
            width: "25%",
            padding: "15px 0",
            borderBottom: "1px solid #cbd5e1",
            borderTop: "1px solid #cbd5e1",
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
  );
}
