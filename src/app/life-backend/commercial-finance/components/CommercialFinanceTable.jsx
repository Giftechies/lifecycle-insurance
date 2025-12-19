"use client";

import { deleteCommercialFinance } from "@/actions/commercialFinance.actions";
import DataTable from "@/lib/DataTable";
import DeleteModal from "@/lib/DeleteModal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";

export default function CommercialFinanceTable({ initialData }) {
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
                <span className="dashboard-table-value">
                    {row.original.heading}
                </span>
            ),
        },
        {
            header: () => <div className="text-right">Actions</div>,
            accessorKey: "actions",
            cell: ({ row }) => (
                <div className="dashboard-table-actions">
                    <Link
                        prefetch={true}
                        href={`/life-backend/commercial-finance/edit/${row.original._id}`}
                        className="dashboard-edit-button"
                    >
                        <BiPencil />
                    </Link>
                    <button
                        className="dashboard-delete-button"
                        onClick={() => setDataToDelete(row.original)}
                    >
                        <BiTrash />
                    </button>
                </div>
            ),
        }   
    ]

    return (
        <>
            <DataTable 
                columns={columns}
                data={initialData}
                searchPlaceholder="Search Commercial Finance..."
            />

            <DeleteModal 
                data={dataToDelete}
                setData={setDataToDelete}
                onDelete={async (id) => deleteCommercialFinance(id)}
                title="Commercial Finance"
                description="Are you sure you want to delete this Commercial Finance?"
            />
        </>
    )
}