// @ts-nocheck
// either Instantsearch doesn't have very good ts support or i don't know how to pass an Interface to their base hit

import { useEffect, useRef } from "react";
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
} from "@america-transparente/ui/search";
import { formatName, formatRevenue } from "../utils";
import logoBlack from "../assets/logo_black.webp";
import HitCard from "./HitCard";
import SkeletonCard from "./SkeletonCard";

interface Props {
  config?: UseInfiniteHitsProps;
}

const tidyItems: UseInfiniteHitsProps["transformItems"] = (items) => {
  return items.map((item, index) => ({
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
    fecha_egreso: item.fecha_egreso ?? "Sigue trabajando",
    position: index,
  }));
};

function Hits({ config }: Props) {
  const { hits, showMore, isLastPage } = useInfiniteHits({
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
    console.log(hits.length % 3);
    return () => {
      currentTarget && observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);

  return (
    <section>
      <ul className="grid grid-cols-1m md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hits.map((hit, index) => (
          <HitCard key={index} hit={hit} />
        ))}
        {(hits.length % 3 == 2 || hits.length % 3 == 1) && (
          <li>
            <SkeletonCard />
          </li>
        )}
        {hits.length % 3 == 1 && (
          <li>
            <SkeletonCard />
          </li>
        )}
      </ul>
      <div
        ref={targetRef}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
}

export default Hits;
