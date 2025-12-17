"use client";

import { deleteCaseStudy } from "@/actions/caseStudy.actions";
import DataTable from "@/lib/DataTable";
import DeleteModal from "@/lib/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function CaseStudyTable({ studies }) {
  const [caseStudyToDelete, setCaseStudyToDelete] = useState(null);

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
            href={`/aws-backend/case-study/edit/${row.original._id}`}
            className="dashboard-edit-button"
          >
            <BiPencil />
          </Link>
          <button
            onClick={() => setCaseStudyToDelete(row.original)}
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
        data={studies}
        columns={columns}
        searchPlaceholder="Search Case Studies"
      />

      <DeleteModal
        data={caseStudyToDelete}
        setData={setCaseStudyToDelete}
        onDelete={async (id) => deleteCaseStudy(id)}
        title="Delete Case Study"
        description="Are you sure you want to delete this case study?"
      />
    </>
  );
}
