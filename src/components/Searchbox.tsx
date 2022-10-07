import { useEffect, useState } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";
import { CancelIcon, SearchIcon } from "../components/icons";

function Searchbox(props: UseSearchBoxProps) {
  const { refine, clear } = useSearchBox(props);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => setSearchQuery(debouncedSearchQuery), 150);
    return () => clearTimeout(timer);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (searchQuery !== "") {
      refine(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="flex bg-white px-2 rounded-2xl w-full gap-2 items-center shadow-md">
      <SearchIcon />
      <input
        className="w-full py-2"
        type="search"
        placeholder="Buscar funcionarios"
        onChange={(e) => setDebouncedSearchQuery(e.target.value)}
        value={debouncedSearchQuery}
      />
      <button
        aria-label="Limpiar busqueda"
        className="p-1"
        onClick={() => {
          clear();
          setDebouncedSearchQuery("");
        }}
      >
        <CancelIcon />
      </button>
    </div>
  );
}

export default Searchbox;
