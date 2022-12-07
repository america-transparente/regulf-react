import { SearchFilter, SearchSortBy } from "@america-transparente/ui/search";

function Filters() {
  return (
    <div className="flex grid-cols-5 gap-4 overflow-auto sm:grid">
      <SearchSortBy
        config={{
          items: [
            { label: "Por relevancia", value: "reguleque" },
            {
              label: "Sueldo (asc)",
              value: "reguleque/sort/remuneración_líquida_mensual:asc",
            },
            {
              label: "Sueldo (desc)",
              value: "reguleque/sort/remuneración_líquida_mensual:desc",
            },
            {
              label: "Grado EUS (asc)",
              value: "reguleque/sort/grado_eus:asc",
            },
            {
              label: "Grado EUS (desc)",
              value: "reguleque/sort/grado_eus:desc",
            },
          ],
        }}
        title="Ordenar por"
      />
      <SearchFilter
        title="Organismo"
        config={{
          attribute: "nombre_organismo",
          showMore: true,
          limit: 6,
        }}
        label="Filtrar por organismo gubernamental"
      />
      <SearchFilter
        title="Tipo Contrato"
        config={{ attribute: "tipo_contrato" }}
        label="Filtrar por tipo de contrato"
      />
      <SearchFilter
        title="Año"
        config={{ attribute: "año", showMore: true, limit: 6 }}
        label="Filtrar por año"
      />
      <SearchFilter
        title="Mes"
        config={{ attribute: "mes", limit: 12 }}
        label="Filtrar por mes"
      />
    </div>
  );
}

export default Filters;
