"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { uploadPageFile } from "@/lib/uploadPageFile";
import { createManyLogos } from "@/actions/logo.actions";
import { X, UploadCloud, Plus } from "lucide-react"; // Optional icons
import toast from "react-hot-toast";

export default function MultiLogoAdd() {
    const [isOpen, setIsOpen] = useState(false);
    const [logos, setLogos] = useState([]); // Array of { imageUrl, title }
    const [loading, setLoading] = useState(false);

    // Function to handle bulk file selection
    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setLoading(true);
        const uploadPromises = files.map(async (file) => {
            try {
                const url = await uploadPageFile(file, "logo");
                return { imageUrl: url.url, title: file.name.split('.')[0] }; // Auto-title from filename
            } catch (err) {
                toast.error(`Failed to upload ${file.name}`);
                return null;
            }
        });

        const uploadedResults = await Promise.all(uploadPromises);
        const filteredResults = uploadedResults.filter(res => res !== null);
        
        setLogos((prev) => [...prev, ...filteredResults]);
        setLoading(false);
    };

    const removeLogo = (index) => {
        setLogos(logos.filter((_, i) => i !== index));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (logos.length === 0) {
            toast.error("Please upload at least one logo");
            return;
        }

        setLoading(true);
        try {
            const res = await createManyLogos(logos);
            if (res.success) {
                toast.success(res.message);
                setIsOpen(false);
                setLogos([]);
            } else {
                toast.error(res.error);
            }
        } catch (error) {
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button className="border p-2 bg-blue-800 rounded-[10px] text-white flex items-center gap-2">
                    <Plus size={18} /> Add Multiple Logos
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Bulk Add Logos</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Bulk Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            disabled={loading}
                        />
                        <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
                        <p className="text-sm text-gray-600">Click or drag to upload multiple images</p>
                    </div>

                    {/* Previews Grid */}
                    {logos.length > 0 && (
                        <div className="grid grid-cols-3 gap-3 max-h-[300px] overflow-y-auto p-1">
                            {logos.map((logo, index) => (
                                <div key={index} className="relative group border rounded-md p-1 bg-white">
                                    <img 
                                        src={logo.imageUrl} 
                                        className="w-full h-20 object-contain rounded" 
                                        alt="preview" 
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeLogo(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={12} />
                                    </button>
                                    <input 
                                        type="text"
                                        value={logo.title}
                                        onChange={(e) => {
                                            const newLogos = [...logos];
                                            newLogos[index].title = e.target.value;
                                            setLogos(newLogos);
                                        }}
                                        className="w-full text-[10px] mt-1 border-none focus:ring-0 p-0 text-center text-gray-500"
                                        placeholder="Title..."
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex justify-end gap-2 pt-4">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="border px-4 py-2 rounded-[10px] text-sm"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading || logos.length === 0}
                            className="bg-blue-800 px-4 py-2 rounded-[10px] text-white text-sm disabled:bg-gray-400"
                        >
                            {loading ? "Processing..." : `Save ${logos.length} Logos`}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}