"use client";

import { deleteSubInsurance } from "@/actions/subInsurance.actions";
import DataTable from "@/lib/DataTable";
import DeleteModal from "@/lib/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function SubInsuranceTable({ initialData }) {
  const [dataToDelete, setDataToDelete] = useState(null);
  const columns = [
    {
      header: "Image",
      accessorKey: "image",
      cell: ({ row }) => (
        <div className="dashboard-table-image">
          <Image src={row.original.image} fill alt="alt" />
        </div>
      ),
    },
    {
      header: "Heading",
      accessorKey: "heading",
      cell: ({ row }) => (
        <span className="dashboard-table-value">{row.original.heading}</span>
      ),
    },
    {
      header: "Category",
      accessorKey: "category",
      cell: ({ row }) => (
        <span className="dashboard-table-value">{row.original.category}</span>
      ),
    },
    {
      header: () => <div className="text-right">Actions</div>,
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="dashboard-table-actions">
          <Link
            prefetch={true}
            href={`/life-backend/subinsurance/edit/${row.original._id}`}
            className="dashboard-edit-button"
          >
            <BiPencil />
          </Link>
          <button
            onClick={() => setDataToDelete(row.original)}
            className="dashboard-delete-button"
          >
            <BiTrash />
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <DataTable
        data={initialData}
        columns={columns}
        searchPlaceholder="Search Sub Insurance"
      />
      <DeleteModal
        data={dataToDelete}
        setData={setDataToDelete}
        onDelete={async (id) => deleteSubInsurance(id)}
        title="Sub Insurance"
        description="Are you sure you want to delete this Sub Insurance?"
      />
    </>
  );
}
