import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch } from "react";
import { Dialog } from "@headlessui/react";
import { Button } from "@america-transparente/ui/core";
import logoBlack from "../assets/logo_black.webp";

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
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
        <Dialog.Panel>
          <div className="p-4 bg-white rounded-2xl max-w-2xl md:text-xl space-y-4 max-h-[75vh] overflow-auto">
            <div className="flex justify-between items-center gap-4">
              <p className="text-xl md:text-2xl font-extrabold">
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
                src={logoBlack}
                alt="Logo de la fundacion América Transparente"
                className="h-10 md:h-12"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
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
