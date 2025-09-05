import React, { useContext, useEffect, useState } from "react";
import { useGetAllQuery } from "../feature/apiSlice";
import { TAG_TYPES } from "../feature/tagType";
import SkeletonCard from "../components/common/SkeletonCard";
import PodcastCard from "../components/cards/PodcastCard";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/ContextProvider";

export default function PodcastPage() {
  const navigate = useNavigate();
  const { searchPodcast } = useContext(myContext);
  const [podcastData, setPodcastData] = useState([]);

  const { data: podcast = [], isLoading } = useGetAllQuery({
    resource: "podcast",
    tag: TAG_TYPES.GET_ALL_PODCAST,
  });

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
      <div className="flex justify-end m-5">
        <Button
          label={"Add Podcast"}
          onClick={() => navigate("/podcast/new")}
        />
      </div>
      {isLoading ? (
        <SkeletonCard />
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
