import SortByFilter from './SortByFilter';
import HitsPerPageFilter from './HitsPerPageFilter';
import ContractTypeFilter from './ContractTypeFilter';
import OrganizationTypeFilter from './OrganizationTypeFilter';
import YearFilter from './YearFilter';
import MonthFilter from './MonthFilter';

function Sidebar() {
	return (
		<aside className='max-w-[15rem]'>
			<SortByFilter />
			<HitsPerPageFilter />
			<OrganizationTypeFilter />
			<ContractTypeFilter />
			<YearFilter />
			<MonthFilter />
		</aside>
	);
}

export default Sidebar;
