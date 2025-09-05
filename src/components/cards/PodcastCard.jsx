import React from "react";
import { useDeleteMutation } from "../../feature/apiSlice";
import { TAG_TYPES } from "../../feature/tagType";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function PodcastCard({
  title,
  description,
  category,
  language,
  author,
  releaseDate,
  createdAt,
  editPodcastId,
  deletePodcastId,
  slug,
}) {
  const navigate = useNavigate();
  const [deletePodcast, { isSuccess, isError }] = useDeleteMutation();

  async function handleDeletePodcast() {
    try {
      await deletePodcast({
        resource: `podcast`,
        id: slug,
        tag: TAG_TYPES.GET_ALL_PODCAST,
      }).unwrap();
      toast.success("Podcast Deleted successfully!");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Language:</span> {language}
        </p>
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>
        <p>
          <span className="font-semibold">Release:</span> {releaseDate}
        </p>
      </div>

      <div className="flex text-xs text-secondary-muted items-center justify-between">
        Created At: {new Date(createdAt).toLocaleDateString()}
        <div className="flex gap-3 items-center justify-end">
          <MdEdit
            title="Edit"
            onClick={() => navigate(`/podcast/${slug}`)}
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <MdDelete
            title="Delete"
            onClick={() => handleDeletePodcast()}
            size={20}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
