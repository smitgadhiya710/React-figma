import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

import {
  useCreateMutation,
  useLazyGetByIdQuery,
  useUpdateMutation,
} from "../feature/apiSlice";
import Loader from "../components/common/Loader";
import { TAG_TYPES } from "../feature/tagType";
import { episodeSchema } from "../validation/episodeValidation";
import { useFormik } from "formik";
import Button from "../components/common/Button";
import toast from "react-hot-toast";

function AddOrEditEpisode() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [createEpisode, { isLoading, isSuccess, isError }] =
    useCreateMutation();
  const [getEpisodeById, { data: episodeData, isLoading: isEpisodeLoading }] =
    useLazyGetByIdQuery();
  const [updateEpisode] = useUpdateMutation();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      title: episodeData?.data?.title || "",
      description: episodeData?.data?.description || "",
      episodeNum: episodeData?.data?.episodeNum || "",
      duration: episodeData?.data?.duration || "",
      releaseDate: episodeData?.data?.releaseDate || "",
      createdAt: episodeData?.data?.createdAt || "",
      updatedAt: episodeData?.data?.updatedAt || "",
    },
    validationSchema: episodeSchema,
    enableReinitialize: true,

    onSubmit: async (values) => {
      try {
        if (id) {
          // update
          await updateEpisode({
            resource: "episode",
            id,
            data: values,
            tag: TAG_TYPES.GET_ALL_EPISODE,
          }).unwrap();
          toast.success("Episode updated successfully!");
        } else if (!id) {
          // create flow
          await createEpisode({
            resource: "episode",
            data: values,
            tag: TAG_TYPES.GET_ALL_EPISODE,
          }).unwrap();
          toast.success("Episode added successfully!");
        }
        navigate("/episodes");
        resetForm();
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  async function handleEpisodeById() {
    try {
      const result = await getEpisodeById({
        resource: "episode",
        id,
        tag: TAG_TYPES.GET_EPISODE_BY_ID,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  useEffect(() => {
    if (id) {
      handleEpisodeById();
    }
  }, [id]);

  return (
    <div>
      <div className="relative flex items-center m-5">
        <div className="absolute left-0 sm:left-10">
          <RiArrowGoBackFill size={25} onClick={() => navigate("/episodes")} />
        </div>

        <div className="mx-auto text-secondary text-3xl font-semibold">
          {id ? "Edit" : "Add"} Episode
        </div>
      </div>

      {isEpisodeLoading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg  focus:ring-accent 
                    ${
                      errors.title && touched.title
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
            />
            {errors.title && touched.title && (
              <div className="text-red-500 text-sm mt-1">{errors.title}</div>
            )}
          </div>

          {/* episodeNum */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              EpisodeNum
            </label>
            <input
              type="text"
              name="episodeNum"
              value={values.episodeNum}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                    ${
                      errors.episodeNum && touched.episodeNum
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
            />
            {errors.episodeNum && touched.episodeNum && (
              <div className="text-red-500 text-sm mt-1">
                {errors.episodeNum}
              </div>
            )}
          </div>

          {/* duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              value={values.duration}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                    ${
                      errors.duration && touched.duration
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
            />
            {errors.duration && touched.duration && (
              <div className="text-red-500 text-sm mt-1">{errors.duration}</div>
            )}
          </div>

          {/* Release Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Release Date
            </label>
            <input
              type="date"
              name="releaseDate"
              value={values.releaseDate}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                    ${
                      errors.releaseDate && touched.releaseDate
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
            />
            {errors.releaseDate && touched.releaseDate && (
              <div className="text-red-500 text-sm mt-1">
                {errors.releaseDate}
              </div>
            )}
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                    ${
                      errors.description && touched.description
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
            />
            {errors.description && touched.description && (
              <div className="text-red-500 text-sm mt-1">
                {errors.description}
              </div>
            )}
          </div>

          <div className="flex gap-2 justify-end">
            <Button label={"Cancle"} onClick={() => navigate("/episodes")} />
            <Button type={"submit"} label={id ? "Update" : "Submit"} />
          </div>
        </form>
      )}
    </div>
  );
}

export default AddOrEditEpisode;
