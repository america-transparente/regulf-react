import { RefinementList } from 'react-instantsearch-hooks-web';

function MonthFilter() {
	return (
		<>
			<p className='font-bold'>Mes</p>
			<RefinementList attribute='mes' limit={12} />
		</>
	);
}

export default MonthFilter;
