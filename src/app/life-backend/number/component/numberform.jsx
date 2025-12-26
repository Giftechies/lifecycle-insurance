"use client"

import { useState } from "react";
import ImageInput from "../../../../lib/ImageUpload"
import { uploadPageFile } from "../../../../lib/uploadPageFile";
import { updateandCreateNumber } from "../../../../actions/number.action";
import toast from "react-hot-toast";

export default function NumberForm({ initialData }) {
    const [formData, setFormData] = useState({
        box1image: initialData?.box1image || "",
        box1number: initialData?.box1number || "",
        box1content: initialData?.box1content || "",
        box2image: initialData?.box2image || "",
        box2number: initialData?.box2number || "",
        box2content: initialData?.box2content || "",
        box3image: initialData?.box3image || "",
        box3number: initialData?.box3number || "",
        box3content: initialData?.box3content || "",
        box4image: initialData?.box4image || "",
        box4number: initialData?.box4number || "",
        box4content: initialData?.box4content || "",
        heading: initialData?.heading || "",
        image: initialData?.image || "",


    })
    const handlesubmit = async (e) => {
        e.preventDefault();

        const res = await updateandCreateNumber(formData);
        if(res.success){
            toast.success(res.message || 'Number section updated successfully');
        }
        else{
            toast.error(res.message || 'Something went wrong');
        }
    }
    return (
        <form onSubmit={handlesubmit} className="form-container grid grid-cols-2 gap-6" >
            <div>
                <div className="box_1">
                    <label >Box 1 Number</label>
                    <input
                        id="box1number"
                        type='text'
                        value={formData?.box1number}
                        onChange={(e) => setFormData({ ...formData, box1number: e.target.value })}
                    />
                    <label >Box 1 Content</label>
                    <input
                        id="box1content"
                        type='text'
                        value={formData?.box1content}
                        onChange={(e) => setFormData({ ...formData, box1content: e.target.value  })}
                    />
                   
                    <ImageInput
                        initialImage={formData.box1image}
                        onChange={(e) => setFormData({ ...formData, box1image: e  })}
                        uploadAction={uploadPageFile}
                        text="Box 1 Image"
                    />
                </div>

                <div className="box_2">
                     <label >Box 2 Number</label>
                    <input
                        id="box2number"
                        type='text'
                        value={formData?.box2number}
                        onChange={(e) => setFormData({ ...formData, box2number: e.target.value  })}
                    />
                    <label >Box 2 Content</label>
                    <input
                        id="box1content"
                        type='text'
                        value={formData?.box2content}
                        onChange={(e) => setFormData({ ...formData, box2content: e.target.value  })}
                    />
                   
                    <ImageInput
                        initialImage={formData.box2image}
                        onChange={(e) => setFormData({ ...formData, box2image: e  })}
                        uploadAction={uploadPageFile}
                         text="Box 2 Image"
                    />

                </div>
               
            </div>
            <div>
                 <div className="box_3">
                     <label >Box 3 Number</label>
                    <input
                        id="box3number"
                        type='text'
                        value={formData?.box3number}
                        onChange={(e) => setFormData({ ...formData, box3number: e.target.value  })}
                    />
                    <label >Box 3 Content</label>
                    <input
                        id="box1content"
                        type='text'
                        value={formData?.box3content}
                        onChange={(e) => setFormData({ ...formData, box3content: e.target.value  })}
                    />
                 
                    <ImageInput
                        initialImage={formData.box3image}
                        onChange={(e) => setFormData({ ...formData, box3image: e  })}
                        uploadAction={uploadPageFile}
                         text="Box 3 Image"
                    />

                </div>
                <div className="box_4">
                     <label >Box 4 Number</label>
                    <input
                        id="box4number"
                        type='text'
                        value={formData?.box4number}
                        onChange={(e) => setFormData({ ...formData, box4number: e.target.value  })}
                    />
                    <label >Box 4 Content</label>
                    <input
                        id="box4content"
                        type='text'
                        value={formData?.box4content}
                        onChange={(e) => setFormData({ ...formData, box4content: e.target.value  })}
                    />
                   
                    <ImageInput
                        initialImage={formData.box4image}
                        onChange={(e) => setFormData({ ...formData, box4image: e  })}
                        uploadAction={uploadPageFile}
                         text="Box 4 Image"
                    />

                    <label >Heading</label>
                    <input
                        id="heading"
                        type='text'
                        value={formData?.heading}
                        onChange={(e) => setFormData({ ...formData, heading: e.target.value  })}
                    />
                  
                    <ImageInput
                        initialImage={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e  })}
                        uploadAction={uploadPageFile}
                    />
                   
                  <button type="submit" className="submit-button">Save Changes</button>
                </div>
            </div>
        </form>
    );
}