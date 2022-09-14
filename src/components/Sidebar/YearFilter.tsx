import { RefinementList } from 'react-instantsearch-hooks-web';

function YearFilter() {
	return (
		<div className='flex flex-col'>
			<p className='font-bold'>Año</p>
			<RefinementList attribute='año' showMore={true} limit={6} />
		</div>
	);
}

export default YearFilter;
