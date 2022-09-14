import SortByFilter from './SortByFilter';
import HitsPerPageFilter from './HitsPerPageFilter';
import ContractTypeFilter from './ContractTypeFilter';
import OrganizationTypeFilter from './OrganizationTypeFilter';
import YearFilter from './YearFilter';
import MonthFilter from './MonthFilter';

function Sidebar() {
	return (
		<aside className='lg:max-w-[15rem]'>
			<div className='grid grid-cols-2 gap-4 lg:grid-cols-1'>
				<SortByFilter />
				<HitsPerPageFilter />
				<OrganizationTypeFilter />
				<ContractTypeFilter />
				<YearFilter />
				<MonthFilter />
			</div>
		</aside>
	);
}

export default Sidebar;
