import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { MainPage, AnimePage, MangaPage, TitlePage, ErrorPage } from "../Pages";

import { Header, Footer } from "../../components";

export default function App() {
  const styles = {
    divWrapper: "w-full min-h-screen bg-primaryBg/80 box-border",
  };
  const router = createBrowserRouter([
    { path: "/", element: <MainPage />, errorElement: <ErrorPage /> },
    { path: "/anime", element: <AnimePage /> },
    { path: "/manga", element: <MangaPage /> },
    { path: "/:type/:titleId", element: <TitlePage /> },
  ]);
  return (
    <div className={styles.divWrapper}>
      <Header />
      <RouterProvider router={router} />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}
