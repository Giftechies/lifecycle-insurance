'use client'

import { useState } from "react";
import {
   Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog"
import { Trash2 } from "lucide-react";
// import { updateTestimonial,createTestimonial } from "../../../../actions/testimonial.action";
import toast from "react-hot-toast";


export default function TestimonialDialog({initialData=[],mode='create'}){
      const [formData,setFormData]=useState({
        name:initialData?.name || '',
        review:initialData?.review || '',
        rate:initialData?.rate || 0,
    })
    const [isOpen,setIsOpen] = useState(false)
    const handlesubmit=async(e)=>{
        e.preventDefault();
      if(mode=='create'){
        // const res = await createTestimonial(formData);
        if(res.success){
            toast.success("Testimonial create successfully!")
        }
      }else{
        // const  res = await updateTestimonial(id,formData);
      }
    }


    return(
        <Dialog  >
            <DialogTrigger>
                {mode=='create'?
            <button className="" >Add New Testimonial</button>:
            <Trash2/>
            }
            </DialogTrigger>
            <form onSubmit={handlesubmit} className="form-container grid grid-cols-2 gap-6" >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {
                            mode=='create'?
                            "Create Testimonial":
                            "Edit Testimonial"
                        }
                    </DialogTitle>
                </DialogHeader>
        <label>Name</label>
        <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <label>Review</label>
        <textarea value={formData.review} onChange={(e) => setFormData({...formData, review: e.target.value})} />
        <label>Rating</label>
        <input type="number" value={formData.rate} onChange={(e) => setFormData({...formData, rate: e.target.value})} />


          <DialogFooter>
            <DialogClose asChild >
                <button>Close</button>
            </DialogClose>

        <button type="submit">{mode === 'create' ? 'Create' : 'Edit'}</button>
          </DialogFooter>

            </DialogContent>
     </form>


        </Dialog>
       
    )
}