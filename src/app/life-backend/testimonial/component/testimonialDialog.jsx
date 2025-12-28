'use client'

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Trash2, Edit } from "lucide-react"; // Changed Trash2 to Edit for 'edit' mode
import { updateTestimonial, createTestimonial } from "@/actions/testimonial.action";
import toast from "react-hot-toast";

export default function TestimonialDialog({ initialData = null, mode = 'create' }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    review: initialData?.review || '',
    rate: initialData?.rate || 4,
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    
    try {
      let res;
      if (mode === 'create') {
        res = await createTestimonial(formData);
      } else {
        // Pass the ID from initialData for updates
        res = await updateTestimonial(initialData.id, formData);
      }

      if (res?.success) {
        toast.success(`Testimonial ${mode === 'create' ? 'created' : 'updated'} successfully!`);
        setIsOpen(false); // Close the modal on success
      } else {
        toast.error(res?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to save testimonial");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {mode === 'create' ? (
          <button className="border p-2 bg-blue-800 rounded-[10px] text-white">
            Add New Testimonial
          </button>
        ) : (
          <button className="p-2 hover:bg-slate-100 rounded-full">
            <Edit size={20} className="text-blue-600" />
          </button>
        )}
      </DialogTrigger>
      
      <DialogContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <DialogHeader>
            <DialogTitle>
              {mode === 'create' ? "Create Testimonial" : "Edit Testimonial"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Name</label>
            <input 
              className="border p-2 rounded-md" 
              type="text" 
              required
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
            
            <label className="text-sm font-medium">Review</label>
            <textarea 
              className="border p-2 rounded-md min-h-[100px]" 
              required
              value={formData.review} 
              onChange={(e) => setFormData({ ...formData, review: e.target.value })} 
            />
            
            <label className="text-sm font-medium">Rating</label>
            <input 
              className="border p-2 rounded-md" 
              type="number" 
              min="1" 
              max="5"
              value={formData.rate} 
              onChange={(e) => setFormData({ ...formData, rate: e.target.value })} 
            />
          </div>

          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <button type="button" className="border px-4 py-2 rounded-[10px]">Cancel</button>
            </DialogClose>
            <button 
              className="bg-blue-800 px-4 py-2 rounded-[10px] text-white" 
              type="submit"
            >
              {mode === 'create' ? 'Create' : 'Save Changes'}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}