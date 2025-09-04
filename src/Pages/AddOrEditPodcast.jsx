import { useFormik } from "formik";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { PodcastSchema } from "../validation/podcastValidation";
import Button from "../components/common/Button";
import { TAG_TYPES } from "../feature/tagType";
import {
  useCreateMutation,
  useGetByIdQuery,
  useLazyGetByIdQuery,
  useUpdateMutation,
} from "../feature/apiSlice";
import Loader from "../components/common/Loader";

export default function AddOrEditPodcast() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [createPodcast, { isLoading, isSuccess, isError }] =
    useCreateMutation();
  const [getPodcastById, { data: podcastData, isLoading: isPodcastLoading }] =
    useLazyGetByIdQuery();
  const [updatePodcast, { isLoading: isUpdateLoading }] = useUpdateMutation();

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
      title: podcastData?.data?.title || "",
      description: podcastData?.data?.description || "",
      category: podcastData?.data?.category || "",
      language: podcastData?.data?.language || "",
      author: podcastData?.data?.author || "",
      releaseDate: podcastData?.data?.releaseDate || "",
      createdAt: podcastData?.data?.createdAt || "",
      updatedAt: podcastData?.data?.updatedAt || "",
    },
    validationSchema: PodcastSchema,
    enableReinitialize: true,

    onSubmit: async (values, { resetForm }) => {
      try {
        if (id) {
          // update
          await updatePodcast({
            resource: "podcast",
            id,
            data: values,
            tag: TAG_TYPES.GET_ALL_PODCAST,
          }).unwrap();
          toast.success("Podcast updated successfully!");
        } else if (!id) {
          // create flow
          await createPodcast({
            resource: "podcast",
            data: values,
            tag: TAG_TYPES.GET_ALL_PODCAST,
          }).unwrap();
          toast.success("Podcast added successfully!");
        }
        navigate("/podcast");
        resetForm();
      } catch (err) {
        toast.error(err?.data?.message || "Something went wrong");
      }
    },
  });

  async function handlePodcastById() {
    try {
      const result = await getPodcastById({
        resource: "podcast",
        id,
        tag: TAG_TYPES.GET_PODCAST_BY_ID,
      }).unwrap();
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong");
    }
  }

  useEffect(() => {
    if (id) {
      handlePodcastById();
    }
  }, [id]);

  return (
    <div>
      <div className="relative flex items-center m-5">
        <div className="absolute left-0 sm:left-10">
          <RiArrowGoBackFill size={25} onClick={() => navigate("/podcast")} />
        </div>

        <div className="mx-auto text-secondary text-3xl font-semibold">
          {id ? "Edit" : "Add"} Podcast
        </div>
      </div>

      {isPodcastLoading ? (
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

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                ${
                  errors.category && touched.category
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
            />
            {errors.category && touched.category && (
              <div className="text-red-500 text-sm mt-1">{errors.category}</div>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={values.language}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                ${
                  errors.language && touched.language
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
            />
            {errors.language && touched.language && (
              <div className="text-red-500 text-sm mt-1">{errors.language}</div>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border px-3 py-2 rounded-lg focus:ring-accent 
                ${
                  errors.author && touched.author
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
            />
            {errors.author && touched.author && (
              <div className="text-red-500 text-sm mt-1">{errors.author}</div>
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
            <Button label={"Cancle"} onClick={() => navigate("/podcast")} />
            <Button type={"submit"} label={id ? "Update" : "Submit"} />
          </div>
        </form>
      )}
    </div>
  );
}
