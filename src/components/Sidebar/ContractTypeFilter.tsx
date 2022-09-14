import { RefinementList } from 'react-instantsearch-hooks-web';

function ContractTypeFilter() {
	return (
		<div className='flex flex-col'>
			<p className='font-bold'>Tipo Contrato</p>
			<RefinementList attribute='tipo_contrato' />
		</div>
	);
}

export default ContractTypeFilter;
