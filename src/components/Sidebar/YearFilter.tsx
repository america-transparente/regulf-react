import { RefinementList } from 'react-instantsearch-hooks-web';

function YearFilter() {
	return (
		<>
			<p className='font-bold'>Año</p>
			<RefinementList attribute='año' showMore={true} limit={6} />
		</>
	);
}

export default YearFilter;
