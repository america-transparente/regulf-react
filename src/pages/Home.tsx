import { useState } from 'react';
import { SearchBox, InfiniteHits } from 'react-instantsearch-hooks-web';
import { FilterIcon } from '../components/icons';
import Header from '../components/Header';
import Hit from '../components/Hit';
import Sidebar from '../components/Sidebar';
import HitsOnScroll from '../components/HitsOnScroll';

function Home() {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	return (
		<>
			<Header title='Reguleque' />
			<main className='mx-auto max-w-6xl px-4 text-font font'>
				<div className='flex flex-row items-center space-x-4'>
					<SearchBox
						placeholder='Buscar funcionarios'
						classNames={{
							root: 'flex-auto',
							form: 'my-4 shadow-md rounded-md flex bg-white',
							input: 'flex-auto rounded order-2 px-1 py-1.5 focus:outline-none',
							submitIcon: 'h-6 w-6 p-1 order-1 fill-font',
							reset: 'order-3',
							resetIcon: 'h-5 w-5 p-1 fill-font',
						}}
						autoFocus={true}
					/>
					<button
						className='p-1.5 bg-white rounded-md shadow-md lg:hidden'
						onClick={() => setIsSidebarOpen((prev) => !prev)}
					>
						<FilterIcon />
					</button>
				</div>
				<section className={isSidebarOpen ? 'space-y-4' : 'lg:space-y-4'}>
					<Sidebar isOpen={isSidebarOpen} />
					<HitsOnScroll />
				</section>
			</main>
		</>
	);
}

export default Home;
