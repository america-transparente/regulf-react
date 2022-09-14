import { RefinementList } from 'react-instantsearch-hooks-web';
// la prop para cambiar el texto de botones de mostrar mas y menos no esta en la version de react hooks
// https://www.algolia.com/doc/api-reference/widgets/refinement-list/react/#widget-param-translations

function OrganizationTypeFilter() {
	return (
		<>
			<p className='font-bold'>Organismo</p>
			<RefinementList
				attribute='nombre_organismo'
				searchable={true}
				searchablePlaceholder='Buscar organismos'
				showMore={true}
				limit={6}
			/>
		</>
	);
}

export default OrganizationTypeFilter;
