import { RefinementList } from 'react-instantsearch-hooks-web';

function ContractTypeFilter() {
	return (
		<>
			<p className='font-bold'>Tipo Contrato</p>
			<RefinementList attribute='tipo_contrato' />
		</>
	);
}

export default ContractTypeFilter;
