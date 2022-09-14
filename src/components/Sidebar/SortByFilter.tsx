import { SortBy } from 'react-instantsearch-hooks-web';

function SortByFilter() {
	return (
		<SortBy
			items={[
				{ label: 'Por relevancia', value: 'reguleque' },
				{
					label: 'Sueldo (asc)',
					value: 'reguleque/sort/remuneración_líquida_mensual:asc',
				},
				{
					label: 'Sueldo (desc)',
					value: 'reguleque/sort/remuneración_líquida_mensual:desc',
				},
				{ label: 'Grado EUS (asc)', value: 'reguleque/sort/grado_eus:asc' },
				{ label: 'Grado EUS (desc)', value: 'reguleque/sort/grado_eus:desc' },
			]}
		/>
	);
}

export default SortByFilter;
