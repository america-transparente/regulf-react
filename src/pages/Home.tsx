import { useEffect, useState, Suspense, lazy } from "react";
import { Header } from "@america-transparente/ui/core";
import { SearchBar } from "@america-transparente/ui/search";
import { DonationCard } from "@america-transparente/ui/core";
import Filters from "../components/Filters";
const Results = lazy(() => import("../components/Results"));
import logo from "../assets/at_logo.webp";

function Home() {
  const [theme, setTheme] = useState("");
  const [showDonationCard, setShowDonationCard] = useState(false);

  const halfAnHourInMilliseconds = 30 * 60000;

  useEffect(() => {
    const donationPopup = setTimeout(() => {
      setShowDonationCard(true);
    }, halfAnHourInMilliseconds);
    return () => clearInterval(donationPopup);
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header
        title="Reguleque"
        description="Reguleque es un buscador de funcionarios públicos de Chile, basado en distintas fuentes de transparencia estatal."
        imagePath={logo}
        captureThemeChange={setTheme}
      />
      <main className="text-font font mx-auto max-w-6xl px-4 pb-4">
        <div className="sticky top-0 z-50 flex flex-col gap-4 bg-light-neutral-300/80 bg-clip-padding py-4 backdrop-blur-sm backdrop-filter dark:bg-dark-neutral-300/80">
          <SearchBar placeholder="Buscar funcionarios" />
          <Filters />
        </div>
        <Suspense
          fallback={
            <p className="text-center text-xl text-light-text-100 dark:text-dark-text-100">
              Cargando...
            </p>
          }
        >
          <Results />
        </Suspense>
      </main>
      {showDonationCard && (
        <DonationCard
          showDonationCard={showDonationCard}
          setShowDonationCard={setShowDonationCard}
        />
      )}
    </>
  );
}

export default Home;
