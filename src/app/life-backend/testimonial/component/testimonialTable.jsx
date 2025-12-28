"use client";
import { EditIcon, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteTestimonial } from "../../../../actions/testimonial.action";
import toast from "react-hot-toast";
import TestimonialDialog from "./testimonialDialog";

export default function TestimonialTable({ initialData = [] }) {
  const Heading = ["Name", "Review", "rate", "action"];

  const delethandler = async (id) => {
    const res = await deleteTestimonial(id);
    if (res.success) {
      toast.success("Testimonial deleted successfully!");
    }
  };

  console.log(initialData);

  return (
    <div>
      <div className="sm:flex justify-between  ">
        <div className="">
          <h2 className=" font-semibold ">Testimonial Managment Page</h2>
        </div>
        <div>
          {" "}
          <TestimonialDialog />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {Heading.map((item, idx) => (
              <TableHead key={Heading} className=" capitalize ">
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {initialData?.map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{item?.name}</TableCell>
                <TableCell>
                  <p
                    className=" max-w-[200px] "
                    
                  >
                    {item?.review?.slice(0,50) + "..."}
                  </p>
                </TableCell>
                <TableCell>{item?.rate}</TableCell>
                <TableCell>
                  <div className="flex gap-6 w-full">
                    <TestimonialDialog initialData={item} mode="edit" />

                    <Trash2 onClick={() => delethandler(item.id)} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
