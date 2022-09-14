import { RefinementList } from 'react-instantsearch-hooks-web';

function MonthFilter() {
	return (
		<div className='flex flex-col'>
			<p className='font-bold'>Mes</p>
			<RefinementList attribute='mes' limit={12} />
		</div>
	);
}

export default MonthFilter;
