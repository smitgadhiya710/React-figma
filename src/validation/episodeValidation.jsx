import * as Yup from "yup";

export const episodeSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  episodeNum: Yup.number().required("Episode Number is required"),
  releaseDate: Yup.date().required("Release date is required"),
});
