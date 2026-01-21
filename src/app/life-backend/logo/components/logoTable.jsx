"use client"
import MultiLogoAdd from "./multiLogoAdd";
import { Trash2 } from "lucide-react";
import { deleteLogo } from "@/actions/logo.actions";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function LogoTable({ data }) {
    const [deleteId, setDeleteId] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const handleDelete = async () => {
        if (!deleteId) return;
        
        setIsPending(true);
        const res = await deleteLogo(deleteId);
        setIsPending(false);
        
        if (res.success) {
            toast.success("Logo deleted successfully");
            setDeleteId(null); // Close dialog
        } else {
            toast.error(res.error || "Failed to delete logo");
        }
    };

    return (
        <section className="p-4">
            <div className="flex justify-between items-center mb-6" >
                <h3 className="text-xl font-bold">Logo Management Page </h3>
                <div className="flex gap-8" >
                    <MultiLogoAdd />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {data && data.length > 0 ? (
                    data.map((logo) => (
                        <div key={logo._id} className="relative group border rounded-lg p-2 flex flex-col items-center">
                            <img
                                src={logo.imageUrl}
                                alt={logo.title || "logo"}
                                className="w-full h-20 object-cover "
                            />
                            {logo.title && <p className="text-xs mt-2 text-center truncate w-full">{logo.title}</p>}
                            
                            {/* Trigger: Instead of window.confirm, we set the ID to open the Dialog */}
                            <button
                                onClick={() => setDeleteId(logo._id)}
                                className="absolute top-1 right-1 p-1 bg-red-100 rounded-full hover:bg-red-200 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 text-gray-500">
                        No logos found. Add some!
                    </div>
                )}
            </div>

            {/* --- CUSTOM CONFIRMATION DIALOG --- */}
            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the logo
                            from the database.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
                        <AlertDialogAction 
                            onClick={(e) => {
                                e.preventDefault(); // Prevent auto-closing to handle async logic
                                handleDelete();
                            }}
                            className="bg-red-600 hover:bg-red-700"
                            disabled={isPending}
                        >
                            {isPending ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    )
}