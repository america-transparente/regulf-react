import {
	useRefinementList,
	UseRefinementListProps,
} from 'react-instantsearch-hooks-web';
import numberWithDots from '../../utils/numberWithDots';

interface Props {
	config: UseRefinementListProps;
	title: string;
	type: 'checkbox' | 'listbox';
	searchPlaceHolder?: string;
}
/**
 * if `searchPlaceholder` prop is provided, you enable the search option within the filter
 *
 */
function Filter({ config, title, searchPlaceHolder }: Props) {
	const {
		items, // filter options
		refine, // apply filter option
		canToggleShowMore,
		isShowingMore,
		toggleShowMore,
		searchForItems,
	} = useRefinementList(config);

	return (
		<div className='flex flex-col space-y-2'>
			<p className='font-bold text-xl'>{title}</p>
			{searchPlaceHolder && (
				<input
					type='search'
					className='border-gray-300 border rounded-md p-1'
					placeholder={searchPlaceHolder}
					onChange={(e) => searchForItems(e.target.value)}
				/>
			)}

			<ul className='space-y-1'>
				{items.map((item) => (
					<li>
						<input
							className='accent-primary h-4 w-4 hover:cursor-pointer'
							type='checkbox'
							checked={item.isRefined}
							onClick={() => refine(item.value)}
						/>
						<p className='inline ml-1'>
							{item.value == 'codigodeltrabajo' ? 'Código del Trabajo' : item.value}
							<span className='ml-1 text-xs bg-gray-200 py-0.5 px-1 rounded-md'>
								{numberWithDots(item.count)}
							</span>
						</p>
					</li>
				))}
				{canToggleShowMore && (
					<button
						className='px-2 py-0.5 bg-primary hover:bg-secondary transition-all duration-300 text-white rounded-md hover:cursor-pointer'
						onClick={() => toggleShowMore()}
					>
						{isShowingMore ? 'Mostrar menos' : 'Mostrar más'}
					</button>
				)}
			</ul>
		</div>
	);
}

export default Filter;
