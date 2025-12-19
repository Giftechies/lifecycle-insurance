import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

export default function DashboardHeader({ text, url }) {
  return (
    <div className="relative w-fit group mb-6">
      <Link
        href={url}
        className="flex items-center text-2xl font-semibold tracking-wide text-gray-800 hover:text-gray-900 transition-colors"
      >
        <span className="absolute -left-6 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300">
          <IoArrowBackOutline size={22} className="text-gray-700" />
        </span>
        <span>{text}</span>
      </Link>
    </div>
  );
}
