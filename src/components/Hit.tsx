// TODO: Definir interfaz para hit, tengo problemitas con los tipos de instantsearch

interface IHit {
	nombre: string;
	tipo_calificación_profesional: string;
	tipo_cargo: string;
	remuneración_líquida_mensual: string;
	remuneración_bruta_mensual: string;
	tipo_contrato: string;
	tipo_estamento: string;
	unidad_monetaria: string;
	viáticos: string;
	fecha_egreso: string;
	mes: string;
	año: string;
	nombre_organismo: string;
}

interface Props {
	hit: IHit;
}

function Hit({ hit }: any) {
	return (
		<article className='p-4 rounded-md shadow-md bg-white'>
			<table className='divide-y'>
				<tr>
					<td colSpan={2}>
						<h3 className='font-bold'>{hit.nombre}</h3>
						<p>
							{hit.mes} {hit.año}
						</p>
					</td>
				</tr>
				<tr>
					<td className='font-bold'>Organismo</td>
					<td>{hit.nombre_organismo}</td>
				</tr>
				<tr>
					<td className='font-bold'>Cargo</td>
					<td>{hit.tipo_cargo}</td>
				</tr>
				<tr>
					<td className='font-bold'>Tipo</td>
					<td>{hit.tipo_contrato}</td>
				</tr>
				<tr>
					<td className='font-bold'>Renumeración Bruta</td>
					<td>{hit.remuneración_bruta_mensual}</td>
				</tr>
			</table>
			<div className='grid grid-cols-2 pt-4'>
				<button className='p-2 bg-primary text-green-100 font-bold rounded-lg col-start-2'>
					Más información
				</button>
			</div>
		</article>
	);
}

export default Hit;
