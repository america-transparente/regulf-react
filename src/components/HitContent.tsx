import { ReactNode } from "react";
import { Calendar } from "../components/icons";

interface Props {
  hit: any;
  buttonComponent: ReactNode;
  type: "full" | "compact";
}

function HitContent({ hit, buttonComponent, type }: Props) {
  const isCompact = type === "compact";

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white flex flex-col justify-between h-full text-font max-w-lg">
      <table>
        <tbody className="divide-y">
          <tr>
            <td colSpan={2}>
              <h3 className="font-bold text-xl">{hit.nombre}</h3>
              <p className="flex items-start gap-1">
                <Calendar />
                {hit.mes} {hit.año}
              </p>
            </td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Región</td>
            <td>{hit.región}</td>
          </tr>
          <tr>
            <td className="font-bold">Organismo</td>
            <td>{hit.nombre_organismo}</td>
          </tr>
          <tr>
            <td className="font-bold">Cargo</td>
            <td>{hit.tipo_cargo}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Calificación Profesional</td>
            <td>{hit.tipo_calificación_profesional}</td>
          </tr>
          <tr>
            <td className="font-bold">Tipo</td>
            <td>{hit.tipo_contrato}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Ingreso</td>
            <td>{hit.fecha_ingreso}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Egreso</td>
            <td>{hit.fecha_egreso}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Remuneración Liq.</td>
            <td>{`${hit.remuneración_líquida_mensual} ${hit.unidad_monetaria}`}</td>
          </tr>
          <tr>
            <td className="font-bold">Renumeración Bruta</td>
            <td>{hit.remuneración_bruta_mensual}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Viáticos</td>
            <td>{`${hit.viáticos} ${hit.unidad_monetaria}`}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Asignaciones</td>
            <td>{hit.asignaciones}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Horas</td>
            <td>{`Diurnas: ${hit.horas_diurnas}, Nocturnas: ${hit.horas_nocturnas}, Festivas: ${hit.horas_festivas}`}</td>
          </tr>
          <tr hidden={isCompact}>
            <td className="font-bold">Observaciones</td>
            <td>{hit.observaciones}</td>
          </tr>
          <tr>
            {isCompact ? (
              <td colSpan={2}>
                Desde el{" "}
                <span className="font-semibold">{hit.fecha_ingreso}</span> hasta
                el <span className="font-semibold">{hit.fecha_término}</span>
              </td>
            ) : (
              <td colSpan={2} className="text-center">
                Datos obtenidos el{" "}
                <span className="font-semibold">{hit.fecha_publicación}</span>
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div className="grid grid-cols-2 pt-4">{buttonComponent}</div>
    </div>
  );
}

export default HitContent;
