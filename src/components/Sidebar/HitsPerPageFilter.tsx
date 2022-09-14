import { HitsPerPage } from 'react-instantsearch-hooks-web';

function HitsPerPageFilter() {
	return (
		<HitsPerPage
			items={[
				{ label: '12 por pág.', value: 12, default: true },
				{ label: '30 por pág.', value: 30 },
				{ label: '60 por pág.', value: 60 },
				{ label: '120 por pág.', value: 120 },
			]}
		/>
	);
}

export default HitsPerPageFilter;
