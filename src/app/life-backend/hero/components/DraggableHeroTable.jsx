"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  deleteHeroBanner,
  toggleHeroBannerStatus,
  updateHeroBannersOrder,
} from "@/actions/heroSection.actions";
import {
  FiEdit,
  FiTrash2,
  FiEye,
  FiEyeOff,
  FiPlus,
  FiMove,
} from "react-icons/fi";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableRow({ banner, isLoading, onToggleStatus, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: banner._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      className={`hover:bg-gray-50 ${isDragging ? "bg-blue-50" : ""}`}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-gray-100 inline-flex"
          title="Drag to reorder"
        >
          <FiMove className="w-4 h-4 text-gray-400" />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="w-16 h-10 relative rounded overflow-hidden">
          <Image
            src={banner.image}
            alt={banner.imageAlt}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
          {banner.title}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-500 max-w-xs truncate">
          {banner.subTitle}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{banner.order}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => onToggleStatus(banner._id)}
          disabled={isLoading}
          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
            banner.isActive
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-red-100 text-red-800 hover:bg-red-200"
          } disabled:opacity-50`}
        >
          {banner.isActive ? (
            <>
              <FiEye className="w-3 h-3" />
              Active
            </>
          ) : (
            <>
              <FiEyeOff className="w-3 h-3" />
              Inactive
            </>
          )}
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center gap-2">
          <Link
            href={`/aws-backend/hero/edit/${banner._id}`}
            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
            title="Edit"
          >
            <FiEdit className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onDelete(banner._id, banner.title)}
            disabled={isLoading}
            className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50 transition-colors disabled:opacity-50"
            title="Delete"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function DraggableHeroTable({ initialData }) {
  const [banners, setBanners] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatingOrder, setIsUpdatingOrder] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await deleteHeroBanner(id);
      if (result.success) {
        setBanners(banners.filter((banner) => banner._id !== id));
        toast.success("Hero banner deleted successfully!");
      } else {
        toast.error(result.error || "Failed to delete hero banner");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleStatus = async (id) => {
    setIsLoading(true);
    try {
      const result = await toggleHeroBannerStatus(id);
      if (result.success) {
        setBanners(
          banners.map((banner) =>
            banner._id === id
              ? { ...banner, isActive: !banner.isActive }
              : banner
          )
        );
        toast.success("Status updated successfully!");
      } else {
        toast.error(result.error || "Failed to update status");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDragEnd = async (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = banners.findIndex((banner) => banner._id === active.id);
      const newIndex = banners.findIndex((banner) => banner._id === over.id);

      const newBanners = arrayMove(banners, oldIndex, newIndex);

      setBanners(newBanners);

      const updatedBanners = newBanners.map((banner, index) => ({
        ...banner,
        order: index,
      }));

      setBanners(updatedBanners);

      setIsUpdatingOrder(true);
      try {
        const result = await updateHeroBannersOrder(updatedBanners);
        if (result.success) {
          toast.success("Order updated successfully!");
        } else {
          toast.error("Failed to update order");
          setBanners(banners);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to update order");
        setBanners(banners);
      } finally {
        setIsUpdatingOrder(false);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Hero Banners</h2>
        <Link
          href="/aws-backend/hero/add"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-[15px] tracking-wide"
        >
          <FiPlus className="w-4 h-4" />
          Add New Banner
        </Link>
      </div>

      {isUpdatingOrder && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-blue-800 text-sm">Updating order...</p>
        </div>
      )}

      {banners.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hero banners found.</p>
          <Link
            href="/aws-backend/hero/add"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FiPlus className="w-4 h-4" />
            Create Your First Banner
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sub Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order #
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <SortableContext
                    items={banners.map((banner) => banner._id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {banners.map((banner) => (
                      <SortableRow
                        key={banner._id}
                        banner={banner}
                        isLoading={isLoading}
                        onToggleStatus={handleToggleStatus}
                        onDelete={handleDelete}
                      />
                    ))}
                  </SortableContext>
                </tbody>
              </table>
            </DndContext>
          </div>
        </div>
      )}
    </div>
  );
}
