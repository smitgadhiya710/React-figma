import * as Yup from "yup";

export const PodcastSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  language: Yup.string().required("Language is required"),
  author: Yup.string().required("Author is required"),
  releaseDate: Yup.date().required("Release date is required"),
});
