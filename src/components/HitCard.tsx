import { useState, memo } from "react";
import {
  XMarkIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Button, Card } from "@america-transparente/ui/core";
import Hit from "../interface/hit";

interface HitCardProps {
  hit: Hit;
}

function HitCard({ hit }: HitCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card title={hit.nombre}>
        <section className="flex h-full flex-col justify-between">
          <div className="space-y-2 text-neutral-600">
            <div className="flex items-start gap-1 text-xl font-bold">
              <CurrencyDollarIcon className="h-6 w-6" />
              <div className="-space-y-1">
                <p>{hit.remuneración_bruta_mensual}</p>
                <p className="text-xs">Remuneración Bruta</p>
              </div>
            </div>
            <div className=" flex items-start gap-1 font-bold">
              <CalendarDaysIcon className="h-6 w-6" />
              <p>{`${hit.mes} ${hit.año}`}</p>
            </div>
            <div className=" flex items-start gap-1 font-bold">
              <BuildingLibraryIcon className="h-6 w-6 shrink-0" />
              <p>{hit.nombre_organismo}</p>
            </div>
            <div className=" flex items-start gap-1 font-bold">
              <BriefcaseIcon className="h-6 w-6 shrink-0" />
              <p>{hit.tipo_cargo}</p>
            </div>
          </div>
          <div className="flex w-full justify-end">
            <Button
              primary={true}
              onClick={() => setIsModalOpen(true)}
              icon={true}
              aria-label="Más información"
            >
              <PlusIcon className="h-6 w-6 stroke-2" />
            </Button>
          </div>
        </section>
      </Card>
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 m-4 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-2xl border-2 bg-white p-4">
            <div className="flex w-full items-center justify-between">
              <Dialog.Title className="text-xl font-bold">
                {hit.nombre}
              </Dialog.Title>
              <Button
                primary={false}
                icon={true}
                onClick={() => setIsModalOpen(false)}
                className="self-start p-1"
                aria-label="Cerrar"
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </Button>
            </div>
            <div className="font-semibold space-y-2 max-h-[60vh] md:max-h-full overflow-auto">
              <p className="flex">
                <CalendarDaysIcon className="h-6 w-6" />
                {`${hit.mes} ${hit.año}`}
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Región</span>
                <span>{hit.región}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Organismo</span>
                <span>{hit.nombre_organismo}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Cargo</span>
                <span>{hit.tipo_cargo}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">
                  Calificación Profesional
                </span>
                <span>{hit.tipo_calificación_profesional}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Tipo</span>
                <span>{hit.tipo_contrato}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Ingreso</span>
                <span>{hit.fecha_ingreso}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Egreso</span>
                <span>{hit.fecha_egreso}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Remuneración Liquida</span>
                <span>{`${hit.remuneración_líquida_mensual} ${hit.unidad_monetaria}`}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Remuneración Bruta</span>
                <span>{`${hit.remuneración_líquida_mensual} ${hit.unidad_monetaria}`}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Viáticos</span>
                <span>
                  {hit.viáticos
                    ? `${hit.viáticos} ${hit.unidad_monetaria}`
                    : "No informados"}
                </span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Asignaciones</span>
                <span>{hit.asignaciones || "No informadas"}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Horas</span>
                <span>{`Diurnas: ${
                  hit.horas_diurnas || "No informadas"
                }, Nocturnas: ${
                  hit.horas_nocturnas || "No informadas"
                }, Festivas: ${hit.horas_festivas || "No informadas"}`}</span>
              </p>
              <p className="grid grid-cols-2">
                <span className="text-grayscale-5">Observaciones</span>
                <span>{hit.observaciones || "No hay observaciones"}</span>
              </p>
              <p className="text-center">
                Desde el{" "}
                <span className="font-semibold">{hit.fecha_ingreso}</span> hasta
                el <span className="font-semibold">{hit.fecha_término}</span>
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default memo(HitCard);
