import { useState } from 'react';
import { SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Header from '../components/Header';
import Hit from '../components/Hit';
import Sidebar from '../components/Sidebar';
import FilterIcon from '../components/icons/FilterIcon';

function Home() {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	return (
		<>
			<Header title='Reguleque' />
			<main className='mx-auto max-w-6xl px-4 text-font font'>
				<div className='flex flex-row items-center'>
					<SearchBox
						placeholder='Buscar funcionarios'
						classNames={{
							root: 'flex-auto',
							form: 'my-4 border-gray-300 border rounded-md flex',
							input: 'flex-auto rounded order-2 px-1 py-1.5 focus:outline-none',
							submitIcon: 'h-6 w-6 p-1 order-1 fill-font',
							reset: 'order-3',
							resetIcon: 'h-5 w-5 p-1 fill-font',
						}}
						autoFocus={true}
					/>
					<button
						className='p-1 lg:hidden'
						onClick={() => setIsSidebarOpen((prev) => !prev)}
					>
						<FilterIcon />
					</button>
				</div>
				<section className='flex flex-col lg:flex-row gap-4'>
					<Sidebar isOpen={isSidebarOpen} />
					<Hits
						hitComponent={Hit}
						classNames={{ list: 'grid grid-cols-1 lg:grid-cols-3 gap-4' }}
					/>
				</section>
			</main>
		</>
	);
}

export default Home;
