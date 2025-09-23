import React, { useContext, useEffect, useState } from "react";
import { useLazyGetAllQuery } from "../feature/apiSlice";
import { TAG_TYPES } from "../feature/tagType";
import PodcastCard from "../components/cards/PodcastCard";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/ContextProvider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { podcastCategory, podcastLanguage } from "../enums.js/dropDownValue";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Loader from "../components/common/Loader";

export default function PodcastPage() {
  const navigate = useNavigate();
  const { searchPodcast } = useContext(myContext);
  const [podcastData, setPodcastData] = useState([]);
  const [reqParams, setReqParams] = useState({
    category: ["All"],
    language: "All",
  });

  const [getPodcast, { data: podcast = [], isLoading, isFetching }] =
    useLazyGetAllQuery();

  function createParams(obj) {
    let paramsString = "";

    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        paramsString += `${key}=${value.join(",")}&`;
      } else {
        paramsString += `${key}=${value}&`;
      }
    });

    return paramsString.slice(0, -1);
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setReqParams({
      ...reqParams,
      category: typeof value === "string" ? value.split(",") : value,
    });
  };

  async function handlePodcast() {
    try {
      await getPodcast({
        resource: "podcast",
        tag: TAG_TYPES.GET_ALL_PODCAST,
        params: createParams(reqParams) || null,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    handlePodcast();
  }, [reqParams]);

  useEffect(() => {
    if (!podcast?.data) return;

    const search = podcast.data.filter((i) =>
      Object.values(i).some((val) =>
        String(val).toLowerCase().includes(searchPodcast.toLowerCase())
      )
    );

    setPodcastData(search);
  }, [searchPodcast, podcast]);

  return (
    <div className="px-5 sm:px-20">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center">
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <InputLabel>Language</InputLabel>
            <Select
              value={reqParams.language}
              label="language"
              onChange={(e) =>
                setReqParams({ ...reqParams, language: e.target.value })
              }
            >
              {podcastLanguage.map((i, index) => (
                <MenuItem key={index} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </div>

          <div>
            <InputLabel id="demo-multiple-checkbox-label">Category</InputLabel>
            <Select
              multiple
              value={reqParams.category}
              onChange={handleChange}
              // onChange={(e) =>
              //   setReqParams({ ...reqParams.params, category: e.target.value })
              // }
              // input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              // MenuProps={MenuProps}
            >
              {podcastCategory.map((cat, index) => (
                <MenuItem key={index} value={cat}>
                  <Checkbox checked={reqParams?.category?.includes(cat)} />

                  <ListItemText primary={cat} />
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex justify-end m-5">
          <Button
            label={"Add Podcast"}
            onClick={() => navigate("/podcast/new")}
          />
        </div>
      </div>
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-5">
          {podcastData?.map((i, index) => (
            <div key={index}>
              <PodcastCard
                title={i.title}
                description={i.description}
                category={i.category}
                language={i.language}
                author={i.author}
                releaseDate={i.releaseDate}
                createdAt={i.createdAt}
                editPodcastId={i._id}
                deletePodcastId={i._id}
                slug={i.slug}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
