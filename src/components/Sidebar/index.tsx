import SortByFilter from './SortByFilter';
import HitsPerPageFilter from './HitsPerPageFilter';
import ContractTypeFilter from './ContractTypeFilter';
import OrganizationTypeFilter from './OrganizationTypeFilter';
import YearFilter from './YearFilter';
import MonthFilter from './MonthFilter';

interface Props {
	isOpen: boolean;
}

function Sidebar({ isOpen }: Props) {
	const sidebarStyles = isOpen
		? 'lg:max-w-[15rem]'
		: 'lg:max-w-[15rem] hidden lg:block';

	return (
		<aside className={sidebarStyles}>
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
