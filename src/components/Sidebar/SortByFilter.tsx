import {
	SortBy,
	useSortBy,
	UseSortByProps,
} from 'react-instantsearch-hooks-web';
import { Listbox } from '@headlessui/react';
import ChevronDown from '../icons/ChevronDown';
import ChevronUp from '../icons/ChevronUp';
import { useState } from 'react';
interface Option {
	value: string;
	label: string;
}
interface Props {
	config: UseSortByProps;
}

function SortByFilter({ config }: Props) {
	const { options, refine } = useSortBy(config);

	return (
		<Listbox
			onChange={(option: Option) => {
				// setSelectedOption(option);
				refine(option.value);
			}}
		>
			<div>
				<Listbox.Button className='flex w-full justify-between p-1 lg:py-4'>
					{({ open }) => (
						<>
							Ordenar por
							<span>{open ? <ChevronUp /> : <ChevronDown />}</span>
						</>
					)}
				</Listbox.Button>
				<Listbox.Options className='shadow-md border rounded-md divide-y'>
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
