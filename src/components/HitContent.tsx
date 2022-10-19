import { ReactNode } from "react";
import { Calendar } from "../components/icons";

interface Props {
  hit: any;
  buttonComponent: ReactNode;
  type: "full" | "compact";
}

function HitContent({ hit, buttonComponent, type }: Props) {
  const isCompact = type === "compact";

  const contentWrapperStyles =
    "p-4 rounded-2xl shadow-md bg-white flex flex-col justify-between h-full text-font max-w-lg";

  return (
    <section
      className={
        !isCompact
          ? `${contentWrapperStyles} max-h-[32rem] md:max-h-full overflow-auto pt-0`
          : contentWrapperStyles
      }
    >
      <div>
        <p className={!isCompact ? "hidden" : "text-xl"}>
          <strong>{hit.nombre}</strong>
        </p>
        <p className="flex items-start gap-1">
          <Calendar /> {`${hit.mes} ${hit.año}`}
        </p>
        <div className="divide-y space-y-1">
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Región</strong>
            {hit.región}
          </p>
          <p className="flex justify-between">
            <strong>Organismo</strong>
            {hit.nombre_organismo}
          </p>
          <p className="flex justify-between">
            <strong>Cargo</strong>
            {hit.tipo_cargo}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Calificación Profesional</strong>
            {hit.tipo_calificación_profesional}
          </p>
          <p className="flex justify-between">
            <strong>Tipo</strong>
            {hit.tipo_contrato}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Ingreso</strong>
            {hit.fecha_ingreso}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Egreso</strong>
            {hit.fecha_egreso}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Remuneración Liq.</strong>
            {`${hit.remuneración_líquida_mensual} ${hit.unidad_monetaria}`}
          </p>
          <p className="flex justify-between">
            <strong>Remuneración Bruta</strong>
            {hit.remuneración_bruta_mensual}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Viáticos</strong>
            {`${hit.viáticos} ${hit.unidad_monetaria}`}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Asignaciones</strong>
            {hit.asignaciones}
          </p>
          <p className={isCompact ? "hidden" : "flex justify-between"}>
            <strong>Horas</strong>
            {`Diurnas: ${hit.horas_diurnas}, Nocturnas: ${hit.horas_nocturnas}, Festivas: ${hit.horas_festivas}`}
          </p>
          <p
            className={
              isCompact ? "hidden" : "flex justify-between text-right gap-4"
            }
          >
            <strong>Observaciones</strong>
            {hit.observaciones}
          </p>
        </div>

        {isCompact ? (
          <p className="text-center">
            Desde el <span className="font-semibold">{hit.fecha_ingreso}</span>{" "}
            hasta el <span className="font-semibold">{hit.fecha_término}</span>
          </p>
        ) : (
          <p className="text-center">
            Datos obtenidos el{" "}
            <span className="font-semibold">{hit.fecha_publicación}</span>
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 pt-4">{buttonComponent}</div>
    </section>
  );
}

export default HitContent;
