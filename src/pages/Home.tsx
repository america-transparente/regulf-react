import { SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Header from '../components/Header';
import Hit from '../components/Hit';

function Home() {
	return (
		<>
			<Header title='Reguleque' />
			<main className='mx-auto max-w-6xl px-4 text-font font'>
				<SearchBox
					placeholder='Buscar funcionarios'
					classNames={{
						form: 'my-4 flex border-gray-300 border rounded-md',
						input: 'flex-auto rounded order-2 px-1 py-1.5 focus:outline-none',
						submitIcon: 'h-6 w-6 p-1 order-1 fill-font',
						reset: 'order-3',
						resetIcon: 'h-5 w-5 p-1 fill-font',
					}}
					autoFocus={true}
				/>
				<Hits
					hitComponent={Hit}
					classNames={{ list: 'grid grid-cols-1 lg:grid-cols-3 gap-2' }}
				/>
			</main>
		</>
	);
}

export default Home;
