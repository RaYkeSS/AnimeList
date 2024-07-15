import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import MainPage from "./Pages/main.js";
import AnimePage from "./Pages/anime.js";
import MangaPage from "./Pages/manga.js";
import TitlePage from "./Pages/title.js";
import ErrorPage from "./Pages/error.js";

import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
    { path: "/anime", element: <AnimePage /> },
    { path: "/manga", element: <MangaPage /> },
    { path: "/:type/:titleId", element: <TitlePage /> },
  ]);
  return (
    <div className="w-full min-h-screen bg-[rgba(18,_23,_37,_0.8)] box-border">
      <Header />
      <RouterProvider router={router} />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}
