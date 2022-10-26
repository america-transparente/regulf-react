import { Button } from "@america-transparente/ui/core";
import logoBlack from "../assets/logo_black.webp";

function DonationCard() {
  return (
    <div className="p-4 bg-white rounded-2xl max-w-2xl text-xl space-y-4">
      <p className="text-2xl font-extrabold">
        ¡Hola! Por favor no cierres este mensaje.
      </p>
      <p>
        Somos una fundación, y para mantener Reguleque arriba necesitamos pagar
        servidores, infraestructura y desarrolladores, y para eso{" "}
        <span className="font-semibold">necesitamos tu ayuda.</span>
      </p>
      <p>
        Puedes ayudarnos donando tan poco como $2.000 pesos mensuales, no toma
        más de un minuto.{" "}
        <span className="font-semibold">
          para aumentar juntos y juntas la Transparencia, sé parte del cambio.
        </span>
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={logoBlack}
          alt="Logo de la fundacion América Transparente"
          className="col-start-2 h-12 place-self-end"
        />
        <Button href="" color="primary-rl" primary={true}>
          Donar ahora.
        </Button>
        <Button href="" color="primary-rl" primary={true}>
          Hazte socio.
        </Button>
      </div>
    </div>
  );
}

export default DonationCard;
