import { useSortBy, UseSortByProps } from 'react-instantsearch-hooks-web';
import { Listbox } from '@headlessui/react';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import { useState } from 'react';
import { usePopper } from 'react-popper';
interface Option {
	value: string;
	label: string;
}
interface Props {
	config: UseSortByProps;
}

function SortByFilter({ config }: Props) {
	const { options, refine } = useSortBy(config);

	const [referenceElement, setReferenceElement] =
		useState<HTMLButtonElement | null>();
	const [popperElement, setPopperElement] = useState<HTMLUListElement | null>();
	const { styles, attributes } = usePopper(referenceElement, popperElement);

	return (
		<Listbox
			onChange={(option: Option) => {
				// setSelectedOption(option);
				refine(option.value);
			}}
		>
			<div>
				<Listbox.Button
					ref={setReferenceElement}
					className='flex w-full justify-center p-1 lg:py-4'
				>
					{({ open }) => (
						<>
							Ordenar por
							<span>{open ? <ChevronUp /> : <ChevronDown />}</span>
						</>
					)}
				</Listbox.Button>
				<Listbox.Options
					ref={setPopperElement}
					className='shadow-md border rounded-md divide-y bg-white'
					style={styles.popper}
					{...attributes.popper}
				>
					{options.map((option) => (
						<Listbox.Option
							className='hover:bg-primary/30 transition-all duration-300 hover:cursor-pointer p-2'
							key={option.label}
							value={option}
						>
							{option.label}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</div>
		</Listbox>
	);
}

export default SortByFilter;
