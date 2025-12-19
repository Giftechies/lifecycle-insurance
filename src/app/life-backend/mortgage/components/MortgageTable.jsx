"use client";
import { deleteMortgage } from "@/actions/mortgage.actions";
import DataTable from "@/lib/DataTable";
import DeleteModal from "@/lib/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function MortgageTable({ mortgages }) {
  const [mortgageToDelete, setMortgageToDelete] = useState(null);
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
      header: () => <div className="text-right">Actions</div>,
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="dashboard-table-actions">
          <Link
            prefetch={true}
            href={`/life-backend/mortgage/edit/${row.original._id}`}
            className="dashboard-edit-button"
          >
            <BiPencil />
          </Link>
          <button
            onClick={() => setMortgageToDelete(row.original)}
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
        data={mortgages}
        columns={columns}
        searchPlaceholder="Search..."
      />
      <DeleteModal
        data={mortgageToDelete}
        setData={setMortgageToDelete}
        onDelete={(id) => deleteMortgage(id)}
        title="Mortgage"
        description="Are you sure you want to delete this mortgage?"
      />
    </>
  );
}
