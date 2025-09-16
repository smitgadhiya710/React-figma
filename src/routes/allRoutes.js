// src/routes/routes.js
import LandingPage from "../Pages/LandingPage";
import PodcastPage from "../Pages/PodcastPage";
import AddOrEditPodcast from "../Pages/AddOrEditPodcast";
import EpisodesPage from "../Pages/EpisodesPage";
import AddOrEditEpisode from "../Pages/AddOrEditEpisode";
import Login from "../Pages/auth/Login";
import Registration from "../Pages/auth/Registration";

export const publicRoutes = [
  { path: "/", element: LandingPage },
  { path: "/home", element: LandingPage },
  { path: "/login", element: Login },
  { path: "/registration", element: Registration },
];

export const privateRoutes = [
  { path: "/podcast", element: PodcastPage },
  { path: "/podcast/new", element: AddOrEditPodcast },
  { path: "/podcast/:slug", element: AddOrEditPodcast },
  { path: "/episodes", element: EpisodesPage },
  { path: "/episodes/new", element: AddOrEditEpisode },
  { path: "/episodes/:slug", element: AddOrEditEpisode },
];
