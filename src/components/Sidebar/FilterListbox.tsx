import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import {
	useRefinementList,
	UseRefinementListProps,
} from 'react-instantsearch-hooks-web';
import { usePopper } from 'react-popper';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import numberWithDots from '../../utils/numberWithDots';
interface Props {
	config: UseRefinementListProps;
	title: string;
	searchPlaceHolder?: string;
}
/**
 * if `searchPlaceholder` prop is provided, you enable the search option within the filter
 *
 */
function Filter({ config, title }: Props) {
	const {
		items, // filter options
		refine, // apply filter option
		canToggleShowMore,
		isShowingMore,
		toggleShowMore,
		searchForItems,
	} = useRefinementList(config);

	const [referenceElement, setReferenceElement] =
		useState<HTMLButtonElement | null>();
	const [popperElement, setPopperElement] = useState<HTMLUListElement | null>();
	const { styles, attributes } = usePopper(referenceElement, popperElement);

	return (
		<Listbox onChange={(value) => refine(value)}>
			<div>
				<Listbox.Button
					ref={setReferenceElement}
					className='flex w-full justify-center p-1 lg:py-4'
				>
					{({ open }) => (
						<>
							{title}
							<span>{open ? <ChevronUp /> : <ChevronDown />}</span>
						</>
					)}
				</Listbox.Button>
				<Listbox.Options
					ref={setPopperElement}
					className='shadow-lg border rounded-md divide-y bg-white max-w-[15rem]'
					style={styles.popper}
					{...attributes.popper}
				>
					{items.map((item) => (
						<Listbox.Option
							key={item.value}
							value={item.value}
							className={
								item.isRefined
									? 'hover:bg-primary/30 transition-all duration-300 hover:cursor-pointer p-2 text-primary'
									: 'hover:bg-primary/30 transition-all duration-300 hover:cursor-pointer p-2'
							}
						>
							{item.value == 'codigodeltrabajo' ? 'Código del Trabajo' : item.value}
							<span className='ml-1 text-xs bg-gray-200 py-0.5 px-1 rounded-md'>
								{numberWithDots(item.count)}
							</span>
						</Listbox.Option>
					))}
					{canToggleShowMore && (
						<button
							className='px-2 py-0.5 bg-primary hover:bg-secondary transition-all duration-300 text-white rounded-b-md hover:cursor-pointer w-full'
							onClick={() => toggleShowMore()}
						>
							{isShowingMore ? 'Mostrar menos' : 'Mostrar más'}
						</button>
					)}
				</Listbox.Options>
			</div>
		</Listbox>
	);
}

export default Filter;
