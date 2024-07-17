import * as ReactDOM from "react-dom/client";
import { RouterProvider, Outlet } from "react-router-dom";

import { router } from "../../routes";

import { Header, Footer } from "../../components";

export default function App() {
  const styles = {
    divWrapper: "w-full min-h-screen bg-primaryBg/80 box-border",
    container: "container mx-auto",
  };
  return (
    <div className={styles.divWrapper}>
      <Header />
      <div className={styles.container}>
        <RouterProvider router={router} />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
