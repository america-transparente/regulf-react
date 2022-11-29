import { useEffect, useState, Suspense, lazy } from "react";
import { Header } from "@america-transparente/ui/core";
import { Provider, SearchBar } from "@america-transparente/ui/search";
import DonationCard from "../components/DonationCard";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import Filters from "../components/Filters";
const Results = lazy(() => import("../components/Results"));
import logo from "../assets/at_logo.webp";

function Home() {
  const searchClient = instantMeiliSearch(
    "https://api.reguleque.cl",
    "1fadde29df3f086cba5cae2c43a3e68883df5388f2e1c91e8549c470d60dbba9", // Public Search API Key
    { keepZeroFacets: true }
  );

  const [showDonationCard, setShowDonationCard] = useState(false);

  const halfAnHourInMilliseconds = 30 * 60000;

  useEffect(() => {
    const donationPopup = setTimeout(() => {
      setShowDonationCard(true);
    }, halfAnHourInMilliseconds);
    return () => clearInterval(donationPopup);
  }, []);

  return (
    <Provider searchClient={searchClient} indexName="reguleque">
      <Header
        title="Reguleque"
        description="Reguleque es un buscador de funcionarios públicos de Chile, basado en distintas fuentes de transparencia estatal."
        imagePath={logo}
      />
      <main className="text-font font mx-auto max-w-6xl px-4 pb-4">
        <div className="sticky top-0 z-50 flex flex-col gap-4 bg-light-neutral-300/80 bg-clip-padding py-4 backdrop-blur-sm backdrop-filter dark:bg-dark-neutral-300/80">
          <SearchBar placeholder="Buscar funcionarios" />
          <Filters />
        </div>
        <Suspense fallback={<p className="text-center">Cargando...</p>}>
          <Results />
        </Suspense>
      </main>
      {showDonationCard && (
        <DonationCard
          showDonationCard={showDonationCard}
          setShowDonationCard={setShowDonationCard}
        />
      )}
    </Provider>
  );
}

export default Home;
