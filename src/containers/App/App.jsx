import * as ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../../components";

export default function App() {
  const styles = {
    divWrapper:
      "w-full min-h-screen bg-lightBg text-lightText dark:bg-primaryBg/80 dark:text-white box-border flex flex-col",
    container: "container mx-auto mb-3",
  };
  return (
    <div className={styles.divWrapper}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
