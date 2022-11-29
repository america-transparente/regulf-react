import { useEffect, useRef } from "react";
import {
  useInfiniteHits,
  type UseInfiniteHitsProps,
} from "@america-transparente/ui/search";
import { formatName, formatRevenue } from "../utils";
import HitCard from "./HitCard";
import SkeletonCard from "./SkeletonCard";

interface Props {
  config?: UseInfiniteHitsProps;
}

const tidyItems: UseInfiniteHitsProps["transformItems"] = (items) =>
  items.map((item, index) => ({
    ...item,
    nombre: formatName(item.nombre),
    tipo_calificación_profesional: formatName(
      item.tipo_calificación_profesional
    ),
    región: formatName(item.región),
    tipo_cargo: formatName(item.tipo_cargo),
    tipo_contrato:
      item.tipo_contrato?.charAt?.(0)?.toUpperCase?.() +
      item.tipo_contrato?.slice?.(1),
    tipo_estamento:
      item.tipo_estamento?.charAt?.(0).toUpperCase?.() +
      item.tipo_estamento?.slice?.(1),
    remuneración_líquida_mensual: formatRevenue(
      item.remuneración_líquida_mensual
    ),
    remuneración_bruta_mensual: formatRevenue(item.remuneración_bruta_mensual),
    unidad_monetaria: item.unidad_monetaria?.toLowerCase?.(),
    viáticos: formatRevenue(item.viáticos ?? "Indeterminado"),
    fecha_egreso: item.fecha_egreso ?? "No reportado",
    position: index,
  }));

function Hits({ config }: Props) {
  const { hits, showMore, isLastPage, results } = useInfiniteHits({
    ...config,
    transformItems: tidyItems,
  });

  const targetRef = useRef(null);
  function fetchHits(entries: any) {
    const [targetRefEntry] = entries;
    if (!isLastPage) targetRefEntry.isIntersecting && showMore(); // when targetRef element visible trigger showMore
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8, // percentage of how much the targetRef element is visible for fetchHits to trigger
  };

  useEffect(() => {
    const observer = new IntersectionObserver(fetchHits, options);
    const currentTarget = targetRef.current;
    currentTarget && observer.observe(currentTarget);

    return () => {
      currentTarget && observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <section>
      <ul className="grid-cols-1m grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hits.map((hit, index) => (
          <li key={index} className="flex">
            <HitCard hit={hit} />
          </li>
        ))}
        {((!isLastPage && hits.length % 3 == 2) || hits.length % 3 == 1) && (
          <li>
            <SkeletonCard />
          </li>
        )}
        {!isLastPage && hits.length % 3 == 1 && (
          <li>
            <SkeletonCard />
          </li>
        )}
      </ul>
      {results && results.nbHits > 20 && !isLastPage && (
        <div
          ref={targetRef}
          className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
    </section>
  );
}

export default Hits;
