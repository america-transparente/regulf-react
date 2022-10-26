// @ts-nocheck
// either Instantsearch doesn't have very good ts support or i don't know how to pass an Interface to their base hit

import { useEffect, useRef } from "react";
import {
  useInfiniteHits,
  UseInfiniteHitsProps,
} from "react-instantsearch-hooks-web";
import { formatName, formatRevenue } from "../utils";
import logoBlack from "../assets/logo_black.webp";
import HitCard from "./HitCard";

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

  // const targetRef = useRef(null);
  // const showHitsOnScroll = (entries: any) => {
  //   const [targetRefEntry] = entries;
  //   if (!isLastPage) targetRefEntry.isIntersecting && showMore(); // when targetRef element visible trigger showMore
  // };
  // const options = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.1, // percentage of how much the targetRef element is visible for showHitsOnScroll to trigger
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(showHitsOnScroll, options);
  //   const currentTarget = targetRef.current;
  //   currentTarget && observer.observe(currentTarget);
  //   return () => {
  //     currentTarget && observer.unobserve(currentTarget);
  //   };
  // }, [targetRef, options]);

  return (
    <section>
      <ul className="grid grid-cols-1m md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hits.map((hit, index) => (
          <HitCard key={index} hit={hit} />
        ))}
      </ul>
      {/* <div
        ref={targetRef}
        className="animate-pulse w-full flex justify-center h-full items-center min-h-[50vh]"
      >
        <img src={logoBlack} alt="Logo de la Fundacion America Transparente" />
      </div> */}
    </section>
  );
}

export default Hits;
