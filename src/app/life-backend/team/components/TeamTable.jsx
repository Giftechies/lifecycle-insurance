"use client"

import DataTable from "@/lib/DataTable"
import DeleteModal from "@/lib/DeleteModal"
import Image from "next/image"
import Link from "next/link"
import { BiPencil, BiTrash } from "react-icons/bi"
import { useState } from "react"
import { deleteTeamMember } from "@/actions/team.actions"


export default function TeamTable({initialData}){
    const [teamMemberToDelete, setTeamMemberToDelete] = useState(null)
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
            header:"Name",
            accessorKey:"name",
            cell:({ row }) => (
                <span className="dashboard-table-value">
                    {row.original.name}
                </span>
            )
        },
        {
            header:"Designation",
            accessorKey:"designation",
            cell:({ row }) => (
                <span className="dashboard-table-value">
                    {row.original.designation}
                </span>
            )
        },
        {
            header:() => <div className="text-right">Actions</div>,
            accessorKey:"actions",
            cell:({ row }) => (
                <div className="dashboard-table-actions">
                    <Link
                        prefetch={true}
                        href={`/life-backend/team/edit/${row.original._id}`}  
                        className="dashboard-edit-button"
                    >
                        <BiPencil />
                    </Link>
                    <button
                        onClick={() => setTeamMemberToDelete(row.original)}
                        className="dashboard-delete-button"
                    >
                        <BiTrash />
                    </button>  
                </div>
            )
        }
    ]

    return (
        <>
            <DataTable 
                columns={columns}
                data={initialData}
                searchPlaceholder="Search Team Members..."
            />

            <DeleteModal 
                data={teamMemberToDelete}
                setData={setTeamMemberToDelete}
                onDelete={async(id) => deleteTeamMember(id)}
                title="Delete Team Member"
                description="Are you sure you want to delete this team member?"
            />

        </>
    )
}