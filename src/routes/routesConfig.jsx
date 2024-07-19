import { createBrowserRouter } from "react-router-dom";

import {
  MainPage,
  AnimePage,
  MangaPage,
  TitlePage,
  ErrorPage,
} from "../containers/Pages";

import App from "../containers/App";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage />, name: 'Main' },
      { path: "/anime", element: <AnimePage />, name: 'Anime' },
      { path: "/manga", element: <MangaPage />, name: 'Manga' },
      { path: "/anime/:titleId", element: <TitlePage /> },
    ]
   },
]);

export default router;
