"use client";

import Image from "next/image";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import DataTable from "@/lib/DataTable";
import Link from "next/link";
import DeleteModal from "@/lib/DeleteModal";
import { deleteSubMortgage } from "@/actions/subMortgage.actions";

export default function SubmortgageTable({ subMortgages }) {
  const [subMortgageToDelete, setSubMortgageToDelete] = useState(null);
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
            href={`/aws-backend/submortgage/edit/${row.original._id}`}
            className="dashboard-edit-button"
          >
            <BiPencil />
          </Link>
          <button
            onClick={() => setSubMortgageToDelete(row.original)}
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
        columns={columns}
        data={subMortgages}
        searchPlaceholder="Search Submortgage..."
      />
      <DeleteModal
        data={subMortgageToDelete}
        setData={setSubMortgageToDelete}
        onDelete={(id) => deleteSubMortgage(id)}
        title="Submortgage"
        description="Are you sure you want to delete this submortgage?"
      />
    </>
  );
}
