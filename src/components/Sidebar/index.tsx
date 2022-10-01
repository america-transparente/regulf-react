import SortByFilter from "./SortByFilter";
import HitsPerPageFilter from "./HitsPerPageFilter";
import FilterListbox from "./FilterListbox";

interface Props {
  isOpen: boolean;
}

function Sidebar({ isOpen }: Props) {
  const sidebarStyles = isOpen ? "" : "hidden lg:block";

  return (
    <aside className={sidebarStyles}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-2 lg:grid-cols-6 pb-4 lg:pb-0">
        <SortByFilter
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
        />
        <HitsPerPageFilter
          config={{
            items: [
              { label: "12 por pág.", value: 12, default: true },
              { label: "30 por pág.", value: 30 },
              { label: "60 por pág.", value: 60 },
              { label: "120 por pág.", value: 120 },
            ],
          }}
        />
        <FilterListbox
          title="Organismo"
          config={{
            attribute: "nombre_organismo",
            showMore: true,
            limit: 6,
          }}
          searchPlaceHolder="Buscar organismos"
        />
        <FilterListbox
          title="Tipo Contrato"
          config={{ attribute: "tipo_contrato" }}
        />
        <FilterListbox
          title="Año"
          config={{ attribute: "año", showMore: true, limit: 6 }}
        />
        <FilterListbox title="Mes" config={{ attribute: "mes", limit: 12 }} />
      </div>
    </aside>
  );
}

export default Sidebar;
