import { useState } from "react";
import { Calendar } from "../components/icons";
import Modal from "../components/Modal";
import Button from "./Button";
import HitContent from "./HitContent";

// interface IHit {
// 	nombre: string;
// 	tipo_calificación_profesional: string;
// 	tipo_cargo: string;
// 	remuneración_líquida_mensual: string;
// 	remuneración_bruta_mensual: string;
// 	tipo_contrato: string;
// 	tipo_estamento: string;
// 	unidad_monetaria: string;
// 	viáticos: string;
// 	fecha_ingreso: string;
// 	fecha_término: string;
// 	mes: string;
// 	año: string;
// 	nombre_organismo: string;
// }

// TODO: figure a way to add IHit to prop hit that doesnt throw erros in HitsOnScroll

function Hit({ hit }: any) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <li>
      <HitContent
        hit={hit}
        type="compact"
        buttonComponent={
          <Button
            buttonType="primary"
            className="col-start-2"
            onClick={() => setIsModalOpen(true)}
          >
            Más información
          </Button>
        }
      />
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        content={
          <HitContent
            hit={hit}
            type="full"
            buttonComponent={
              <Button
                buttonType="primary"
                className="col-start-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </Button>
            }
          />
        }
      />
    </li>
  );
}

export default Hit;
