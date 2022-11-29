import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@america-transparente/ui/core";
import logo from "../assets/at_logo.webp";

interface DonationCardProps {
  showDonationCard: boolean;
  setShowDonationCard: Dispatch<React.SetStateAction<boolean>>;
}

function DonationCard({
  showDonationCard,
  setShowDonationCard,
}: DonationCardProps) {
  return (
    <Dialog
      open={showDonationCard}
      onClose={() => setShowDonationCard(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center bg-black/30 p-4">
        <Dialog.Panel>
          <div className="max-h-[75vh] max-w-2xl space-y-4 overflow-auto rounded-2xl bg-white p-4 md:text-xl">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xl font-extrabold md:text-2xl">
                ¡Hola! Por favor no cierres este mensaje.
              </p>
              <Button
                primary={false}
                icon={true}
                color="primary-rl"
                aria-label="Cerrar"
                className="shrink-0"
                onClick={() => setShowDonationCard(false)}
              >
                <XMarkIcon className="h-6 w-6 text-black" />
              </Button>
            </div>
            <p>
              Somos una fundación, y para mantener Reguleque arriba necesitamos
              pagar servidores, infraestructura y desarrolladores, y para eso{" "}
              <span className="font-semibold">necesitamos tu ayuda.</span>
            </p>
            <p>
              Puedes ayudarnos donando tan poco como $2.000 pesos mensuales, no
              toma más de un minuto.{" "}
              <span className="font-semibold">
                para aumentar juntos y juntas la Transparencia, sé parte del
                cambio.
              </span>
            </p>
            <div className="flex justify-end">
              <img
                src={logo}
                alt="Logo de la fundacion América Transparente"
                className="h-10 md:h-12"
              />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Button href="" color="primary-rl" primary={true}>
                Donar ahora
              </Button>
              <Button href="" color="primary-rl" primary={true}>
                Hazte socio
              </Button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default DonationCard;
