import { Header } from "@america-transparente/ui/core";
import { Provider, SearchBar } from "@america-transparente/ui/search";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Filters, Results } from "../components";
import logoWhite from "../assets/logo_white.webp";

function Home() {
  const searchClient = instantMeiliSearch(
    "https://api.reguleque.cl",
    "1fadde29df3f086cba5cae2c43a3e68883df5388f2e1c91e8549c470d60dbba9", // Public Search API Key
    { keepZeroFacets: true }
  );

  return (
    <Provider searchClient={searchClient} indexName="reguleque">
      <Header title="Reguleque" color="primary-rl" imagePath={logoWhite} />
      <main className="mx-auto max-w-6xl px-4 text-font font">
        <div className="top-0 sticky flex flex-col gap-4 bg-background-light/80 py-4">
          <SearchBar />
          <Filters />
        </div>
        <Results />
      </main>
    </Provider>
  );
}

export default Home;
