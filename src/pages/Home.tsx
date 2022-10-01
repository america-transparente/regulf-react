import { useState } from "react";
import { FilterIcon } from "../components/icons";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HitsOnScroll from "../components/HitsOnScroll";
import Searchbox from "../components/Searchbox";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <Header title="Reguleque" />
      <main className="mx-auto max-w-6xl px-4 text-font font">
        <section className="sticky top-0 pt-4 bg-gray-100/90 bg-clip-padding backdrop-filter backdrop-blur-sm">
          <div className="flex flex-row items-center space-x-4 pb-4 lg:pb-0">
            <Searchbox />
            <button
              className="p-1.5 bg-white rounded-lg shadow-md lg:hidden"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <FilterIcon />
            </button>
          </div>
          <Sidebar isOpen={isSidebarOpen} />
        </section>
        <HitsOnScroll />
      </main>
    </>
  );
}

export default Home;
