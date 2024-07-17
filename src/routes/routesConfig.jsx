import { createBrowserRouter } from "react-router-dom";

import {
  MainPage,
  AnimePage,
  MangaPage,
  TitlePage,
  ErrorPage,
} from "../containers/Pages";
// import { DATA_ROOT } from "../utils";

const router = createBrowserRouter([
  { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
  { path: "/anime", element: <AnimePage /> },
  { path: "/manga", element: <MangaPage /> },
  { path: "/title/:titleId", element: <TitlePage /> },
]);

export default router;
