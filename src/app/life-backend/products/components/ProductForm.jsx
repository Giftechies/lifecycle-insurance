"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProductData } from "@/actions/product.actions";
import ImageInput from "@/lib/ImageUpload";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { FiPlus, FiTrash2, FiMove } from "react-icons/fi";
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

function SortableServiceItem({
  service,
  index,
  onServiceChange,
  onRemove,
  canRemove,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: service.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  const handleFieldChange = (field, value) => {
    onServiceChange(index, { ...service, [field]: value });
  };

  const handleImageChange = (url) => {
    onServiceChange(index, { ...service, image: url });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-4 rounded-lg border ${
        isDragging
          ? "bg-blue-50 border-blue-300 shadow-lg"
          : "bg-white border-gray-200 hover:border-gray-300"
      } transition-all duration-200`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-2 rounded hover:bg-gray-100 flex items-center group"
            title="Drag to reorder"
          >
            <FiMove className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium">Service #{index + 1}</span>
          </div>
        </div>
        {canRemove && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
            title="Remove this service"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image Upload */}
        <div className="md:col-span-2">
          <ImageInput
            uploadAction={uploadPageFile}
            onChange={handleImageChange}
            initialImage={service.image}
          />
        </div>

        {/* Image Alt Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image Alt Text
          </label>
          <input
            type="text"
            value={service.imageAlt}
            onChange={(e) => handleFieldChange("imageAlt", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image alt text"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Title
          </label>
          <input
            type="text"
            value={service.title}
            onChange={(e) => handleFieldChange("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service title"
            required
          />
        </div>

        {/* Link */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Link
          </label>
          <input
            type="text"
            value={service.link}
            onChange={(e) => handleFieldChange("link", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service link (e.g., /mortgages/residential-mortgages)"
            required
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Description
          </label>
          <textarea
            value={service.description}
            onChange={(e) => handleFieldChange("description", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter service description"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default function ProductForm({ initialData }) {
  const router = useRouter();

  // Convert initial data services to new format if needed
  const convertedServices = initialData?.services
    ? initialData.services
        .map((service, index) => ({
          id: `service-${index}`,
          image: service.image || "",
          imageAlt: service.imageAlt || "",
          title: service.title || "",
          description: service.description || "",
          link: service.link || "",
          order: service.order !== undefined ? service.order : index,
        }))
        .sort((a, b) => a.order - b.order)
    : [
        {
          id: "service-0",
          image: "",
          imageAlt: "",
          title: "",
          description: "",
          link: "",
          order: 0,
        },
      ];

  const [formData, setFormData] = useState({
    title: initialData?.title || "Our Key Products",
    description: initialData?.description || "",
    services: convertedServices,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (index, updatedService) => {
    const newServices = [...formData?.services];
    newServices[index] = updatedService;
    setFormData((prev) => ({ ...prev, services: newServices }));
  };

  const addService = () => {
    const newService = {
      id: `service-${Date.now()}`,
      image: "",
      imageAlt: "",
      title: "",
      description: "",
      link: "",
      order: formData?.services.length,
    };
    setFormData((prev) => ({
      ...prev,
      services: [...prev.services, newService],
    }));
  };

  const removeService = (index) => {
    if (formData?.services.length > 1) {
      const newServices = formData?.services.filter((_, i) => i !== index);
      // Update order for remaining services
      const reorderedServices = newServices.map((service, idx) => ({
        ...service,
        order: idx,
      }));
      setFormData((prev) => ({ ...prev, services: reorderedServices }));
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = formData?.services.findIndex(
        (service) => service.id === active.id
      );
      const newIndex = formData?.services.findIndex(
        (service) => service.id === over.id
      );

      const newServices = arrayMove(formData?.services, oldIndex, newIndex);

      // Update order for all services
      const reorderedServices = newServices.map((service, index) => ({
        ...service,
        order: index,
      }));

      setFormData((prev) => ({ ...prev, services: reorderedServices }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate and prepare services data
      const validServices = formData?.services.filter(
        (service) =>
          service.title.trim() !== "" &&
          service.description.trim() !== "" &&
          service.link.trim() !== "" &&
          service.image.trim() !== "" &&
          service.imageAlt.trim() !== ""
      );

      if (validServices.length === 0) {
        toast.error("Please add at least one complete service");
        setIsSubmitting(false);
        return;
      }

      const dataToSubmit = {
        title: formData?.title,
        description: formData?.description,
        services: validServices.map((service, index) => ({
          image: service.image,
          imageAlt: service.imageAlt,
          title: service.title,
          description: service.description,
          link: service.link,
          order: index,
        })),
      };

      const result = await updateProductData(dataToSubmit);

      if (result.success) {
        toast.success("Products section updated successfully!");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to update products section");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Section Title
          </label>
          <input
            type="text"
            value={formData?.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter section title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Section Description
          </label>
          <textarea
            value={formData?.description}
            onChange={(e) => handleChange("description", e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter section description"
            required
          />
        </div>

        {/* Services */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Services
            </label>
            <button
              type="button"
              onClick={addService}
              className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              <FiPlus className="w-4 h-4" />
              Add Service
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
              <FiMove className="w-4 h-4" />
              Drag the services to reorder them. The order here will be
              reflected on the frontend.
            </p>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <div className="space-y-4">
                <SortableContext
                  items={formData?.services.map((service) => service.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {formData?.services.map((service, index) => (
                    <SortableServiceItem
                      key={service.id}
                      service={service}
                      index={index}
                      onServiceChange={handleServiceChange}
                      onRemove={removeService}
                      canRemove={formData?.services.length > 1}
                    />
                  ))}
                </SortableContext>
              </div>
            </DndContext>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Updating..." : "Update Products Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
