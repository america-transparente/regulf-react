import { useState } from "react";
import { FilterIcon } from "../components/icons";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import HitsOnScroll from "../components/HitsOnScroll";
import Searchbox from "../components/Searchbox";
import DonationCard from "../components/DonationCard";
import Modal from "../components/Modal";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDonationCardOpen, setIsDonationCardOpen] = useState(false);

  // this is the first time or more than 2 hours since
  if (
    !localStorage.alreadyAnswered &&
    (!localStorage.firstVisit ||
      localStorage.firstVisit >= Date.now() + 1800000)
  ) {
    // Start the user segment popup
    setIsDonationCardOpen(true);

    localStorage.firstVisit = Date.now();
  }

  return (
    <>
      <Header title="Reguleque" />
      <main className="mx-auto max-w-6xl px-4 text-font font">
        <section className="sticky top-0 pt-4 bg-gray-100/90 bg-clip-padding backdrop-filter backdrop-blur-sm">
          <div className="flex flex-row items-center space-x-4 pb-4 lg:pb-0">
            <Searchbox />
            <button
              aria-label="Abrir filtros de busqueda"
              className="p-2 bg-white rounded-2xl shadow-md lg:hidden"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            >
              <FilterIcon />
            </button>
          </div>
          <Sidebar isOpen={isSidebarOpen} />
        </section>
        <HitsOnScroll />
      </main>
      <Modal
        title="Necesitamos pedirte algo."
        content={<DonationCard />}
        isOpen={isDonationCardOpen}
        setIsOpen={setIsDonationCardOpen}
      />
    </>
  );
}

export default Home;
