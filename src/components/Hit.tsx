// TODO: Definir interfaz para hit, tengo problemitas con los tipos de instantsearch

function Hit({ hit }: any) {
	return (
		<article className='p-4 rounded-md shadow-md bg-white'>
			<p>{hit.nombre}</p>
			<button className='bg-primary hover:bg-secondary transition-all duration-300 rounded-md px-2 py-1 text-white font-semibold'>
				Más información
			</button>
		</article>
	);
}

export default Hit;
