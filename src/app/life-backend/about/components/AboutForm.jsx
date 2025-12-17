"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateAboutData } from "@/actions/about.actions";
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

function SortablePointItem({
  point,
  index,
  onPointChange,
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
  } = useSortable({ id: point.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex gap-2 items-center p-2 rounded-lg border ${
        isDragging
          ? "bg-blue-50 border-blue-300 shadow-lg"
          : "bg-white border-gray-200 hover:border-gray-300"
      } transition-all duration-200`}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing p-2 rounded hover:bg-gray-100 flex items-center group"
        title="Drag to reorder"
      >
        <FiMove className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 min-w-[3rem]">
        <span className="font-medium">#{index + 1}</span>
      </div>
      <input
        type="text"
        value={point.text}
        onChange={(e) => onPointChange(index, e.target.value)}
        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={`Service point ${index + 1}`}
      />
      {canRemove && (
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="px-3 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
          title="Remove this point"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default function AboutForm({ initialData }) {
  const router = useRouter();

  // Convert initial data points to new format if needed
  const convertedPoints = initialData?.points
    ? initialData.points
        .map((point, index) => {
          if (typeof point === "string") {
            // Legacy format - convert to new format
            return {
              id: `point-${index}`,
              text: point,
              order: index,
            };
          } else {
            // New format
            return {
              id: `point-${index}`,
              text: point.text,
              order: point.order,
            };
          }
        })
        .sort((a, b) => a.order - b.order)
    : [{ id: "point-0", text: "", order: 0 }];

  const [formData, setFormData] = useState({
    image: initialData?.image || "",
    imageAlt: initialData?.imageAlt || "",
    title: initialData?.title || "",
    content: initialData?.content || "",
    points: convertedPoints,
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

  const handleImageChange = (url) => {
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...formData.points];
    newPoints[index] = { ...newPoints[index], text: value };
    setFormData((prev) => ({ ...prev, points: newPoints }));
  };

  const addPoint = () => {
    const newPoint = {
      id: `point-${Date.now()}`,
      text: "",
      order: formData.points.length,
    };
    setFormData((prev) => ({ ...prev, points: [...prev.points, newPoint] }));
  };

  const removePoint = (index) => {
    if (formData.points.length > 1) {
      const newPoints = formData.points.filter((_, i) => i !== index);
      // Update order for remaining points
      const reorderedPoints = newPoints.map((point, idx) => ({
        ...point,
        order: idx,
      }));
      setFormData((prev) => ({ ...prev, points: reorderedPoints }));
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = formData.points.findIndex(
        (point) => point.id === active.id
      );
      const newIndex = formData.points.findIndex(
        (point) => point.id === over.id
      );

      const newPoints = arrayMove(formData.points, oldIndex, newIndex);

      // Update order for all points
      const reorderedPoints = newPoints.map((point, index) => ({
        ...point,
        order: index,
      }));

      setFormData((prev) => ({ ...prev, points: reorderedPoints }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Filter out empty points and prepare data
      const filteredPoints = formData.points
        .filter((point) => point.text.trim() !== "")
        .map((point, index) => ({
          text: point.text,
          order: index,
        }));

      if (filteredPoints.length === 0) {
        toast.error("Please add at least one service point");
        setIsSubmitting(false);
        return;
      }

      const dataToSubmit = {
        ...formData,
        points: filteredPoints,
      };

      const result = await updateAboutData(dataToSubmit);

      if (result.success) {
        toast.success("About section updated successfully!");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to update about section");
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
        {/* Image Upload */}
        <ImageInput
          uploadAction={uploadPageFile}
          onChange={handleImageChange}
          initialImage={formData.image}
        />

        {/* Image Alt Text */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image Alt Text
          </label>
          <input
            type="text"
            value={formData.imageAlt}
            onChange={(e) => handleChange("imageAlt", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image alt text"
            required
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter title"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => handleChange("content", e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter content description"
            required
          />
        </div>

        {/* Service Points */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Service Points
            </label>
            <button
              type="button"
              onClick={addPoint}
              className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            >
              <FiPlus className="w-4 h-4" />
              Add Point
            </button>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
              <FiMove className="w-4 h-4" />
              Drag the points to reorder them. The order here will be reflected
              on the frontend.
            </p>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <div className="space-y-3">
                <SortableContext
                  items={formData.points.map((point) => point.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {formData.points.map((point, index) => (
                    <SortablePointItem
                      key={point.id}
                      point={point}
                      index={index}
                      onPointChange={handlePointChange}
                      onRemove={removePoint}
                      canRemove={formData.points.length > 1}
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
            {isSubmitting ? "Updating..." : "Update About Section"}
          </button>
        </div>
      </form>
    </div>
  );
}
