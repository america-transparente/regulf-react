import {
	useHitsPerPage,
	UseHitsPerPageProps,
} from 'react-instantsearch-hooks-web';
import { Listbox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
interface Item {
	value: number;
	label: string;
	default?: boolean;
}
interface Props {
	config: UseHitsPerPageProps;
}

function HitsPerPageFilter({ config }: Props) {
	const { items, refine } = useHitsPerPage(config);
	const defaultItem = config.items.find((item) => item.default == true);
	const [selectedOption, setSelectedOption] = useState(defaultItem);

	return (
		<Listbox
			onChange={(item: Item) => {
				setSelectedOption(item);
				refine(item.value);
			}}
		>
			<div>
				<Listbox.Button className='flex w-full justify-between p-1 lg:py-4'>
					{({ open }) => (
						<>
							{selectedOption?.label}
							<span>{open ? <ChevronUp /> : <ChevronDown />}</span>
						</>
					)}
				</Listbox.Button>
				<Listbox.Options className='shadow-md border rounded-md divide-y'>
					{items.map((item) => (
						<Listbox.Option
							className='hover:bg-primary/30 transition-all duration-300 hover:cursor-pointer p-2'
							key={item.label}
							value={item}
						>
							{item.label}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</div>
		</Listbox>
	);
}

export default HitsPerPageFilter;
