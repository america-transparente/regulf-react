import { InstantSearch } from "react-instantsearch-hooks-web";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import Home from "./pages/Home";

function App() {
  const searchClient = instantMeiliSearch(
    "https://api.reguleque.cl",
    "1fadde29df3f086cba5cae2c43a3e68883df5388f2e1c91e8549c470d60dbba9", // Public Search API Key
    { keepZeroFacets: true }
  );

  return (
    <InstantSearch searchClient={searchClient} indexName="reguleque">
      <Home />
    </InstantSearch>
  );

  // return <Home />;
}

export default App;
