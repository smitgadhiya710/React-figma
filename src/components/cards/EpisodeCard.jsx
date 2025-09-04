import React from "react";
import { useDeleteMutation } from "../../feature/apiSlice";
import { TAG_TYPES } from "../../feature/tagType";
import toast from "react-hot-toast";
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function EpisodeCard({
  title,
  description,
  episodeNum,
  duration,
  releaseDate,
  createdAt,
  editEpisodeId,
  deleteEpisodeId,
}) {
  const navigate = useNavigate();
  const [deleteEpisode] = useDeleteMutation();

  async function handleDeleteEpisode() {
    try {
      await deleteEpisode({
        resource: `episode`,
        id: deleteEpisodeId,
        tag: TAG_TYPES.GET_ALL_EPISODE,
      }).unwrap();
      toast.success("Episode deleted successfully!");
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 max-w-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-1">
        {title} <span className="text-sm text-gray-500">#{episodeNum}</span>
      </h2>

      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
        <p>
          <span className="font-semibold">Duration:</span> {duration}
        </p>
        <p>
          <span className="font-semibold">Release:</span>
          {releaseDate ? new Date(releaseDate).toLocaleDateString() : "—"}
        </p>
      </div>

      {/* Footer */}
      <div className="flex text-xs text-secondary-muted items-center justify-between">
        Created At: {createdAt ? new Date(createdAt).toLocaleDateString() : "—"}
        <div className="flex gap-3 items-center justify-end">
          <MdEdit
            title="Edit"
            onClick={() => navigate(`/episodes/${editEpisodeId}`)}
            size={20}
            className="text-blue-500 cursor-pointer"
          />
          <MdDelete
            title="Delete"
            onClick={handleDeleteEpisode}
            size={20}
            className="text-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
