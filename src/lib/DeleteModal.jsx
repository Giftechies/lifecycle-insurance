"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { BiX } from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";

export default function DeleteModal({
  data,
  setData,
  onDelete,
  title,
  description,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (data) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [data]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setData(null);
    }
  };

  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClickOutside}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-hidden"
        style={{ backdropFilter: "blur(2px)" }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="min-h-screen px-4 text-center "
        >
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <motion.div
            ref={modalRef}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
            className="inline-block w-full max-w-md p-6 my-8 text-left align-middle bg-white rounded-2xl shadow-xl overflow-hidden relative"
          >
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <FiAlertTriangle className="size-5 text-red-600" />
              </div>
            </div>
            <button
              onClick={() => setData(null)}
              className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <BiX className="w-5 h-5 text-gray-500" />
            </button>

            <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
              {title}
            </h3>

            <p className="text-sm text-gray-600 text-center mb-4">
              {description}
            </p>

            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setData(null)}
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  await onDelete(data);
                  setData(null);
                }}
                className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
