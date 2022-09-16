import SortByFilter from './SortByFilter';
import HitsPerPageFilter from './HitsPerPageFilter';
import Filter from './Filter';

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
				<Filter
					title='Organismo'
					config={{
						attribute: 'nombre_organismo',
						showMore: true,
						limit: 6,
					}}
					type='listbox'
					searchPlaceHolder='Buscar organismos'
				/>
				<Filter
					title='Tipo Contrato'
					config={{ attribute: 'tipo_contrato' }}
					type='listbox'
				/>
				<Filter
					title='Año'
					config={{ attribute: 'año', showMore: true, limit: 6 }}
					type='listbox'
				/>
				<Filter
					title='Mes'
					config={{ attribute: 'mes', limit: 12 }}
					type='listbox'
				/>
			</div>
		</aside>
	);
}

export default Sidebar;
