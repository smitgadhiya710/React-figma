import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import { useGetAllQuery } from "../feature/apiSlice";
import { TAG_TYPES } from "../feature/tagType";
import SkeletonCard from "../components/common/SkeletonCard";
import { useNavigate } from "react-router-dom";
import EpisodeCard from "../components/cards/EpisodeCard";
import useDebounce from "../customHoocks/useDebounce";

function EpisodesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const { data: episode = [], isLoading } = useGetAllQuery({
    resource: "episode",
    tag: TAG_TYPES.GET_ALL_EPISODE,
    search: search ? debouncedSearch : null,
  });

  return (
    <div className="px-5 sm:px-20">
      <div className="flex flex-col sm:flex-row items-center justify-end">
        <div className=" m-5 gap-3  w-72 px-3 py-2 bg-gray border-secondary-muted rounded-full shadow-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your episode"
            className="flex-1 px-2 text-secondary bg-transparent border-secondary-muted focus:outline-none text-sm"
          />
        </div>

        <Button
          label={"Add Episode"}
          onClick={() => navigate("/episodes/new")}
        />
      </div>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-5">
          {episode?.data?.map((i, index) => (
            <div key={index}>
              <EpisodeCard
                title={i.title}
                description={i.description}
                episodeNum={i.episodeNum}
                duration={i.duration}
                releaseDate={i.releaseDate}
                createdAt={i.createdAt}
                slug={i.slug}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EpisodesPage;
