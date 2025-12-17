"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BiPencil, BiTrash } from "react-icons/bi"
import DataTable from "@/lib/DataTable"
import DeleteModal from "@/lib/DeleteModal"
import { deleteBusinessFunding } from "@/actions/businessFunding.actions"

export default function BusinessFundingTable({ initialData }){
    const [businessFundingToDelete, setBusinessFundingToDelete] = useState(null)
    const columns = [
        {
            header:"Image",
            accessorKey:"image",
            cell:({ row }) => (
                <div className="dashboard-table-image">
                    <Image src={row.original.image} fill alt="alt" />
                </div>
            )
        },
        {
            header:"Heading",
            accessorKey:"heading",
            cell:({ row }) => (
                <span className="dashboard-table-value">
                    {row.original.heading}
                </span>
            )
        },
        {
            header: () => <div className="text-right">Actions</div>,
            accessorKey:"actions",
            cell:({ row }) => (
                <div className="dashboard-table-actions">
                    <Link prefetch={true} href={`/aws-backend/business-funding/edit/${row.original._id}`} className="dashboard-edit-button">
                        <BiPencil/>
                    </Link>
                    <button onClick={() => setBusinessFundingToDelete(row.original)} className="dashboard-delete-button">
                        <BiTrash/>
                    </button>
                </div>
            )
        }
    ]
    return (<>
        <DataTable 
            columns={columns}
            data={initialData}
            searchPlaceholder="Search..."
        />
        <DeleteModal 
            data={businessFundingToDelete}
            setData={setBusinessFundingToDelete}
            onDelete={async(id) => deleteBusinessFunding(id)}
            title="Business Funding"
            description="Are you sure you want to delete this business funding?"
        />
    </>)
}