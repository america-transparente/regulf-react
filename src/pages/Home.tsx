import { SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Header from '../components/Header';
import Hit from '../components/Hit';

function Home() {
	return (
		<>
			<Header title='Reguleque' />
			<main className='mx-auto max-w-6xl p-4 text-font'>
				<SearchBox />
				<Hits
					hitComponent={Hit}
					classNames={{ list: 'grid grid-cols-1 lg:grid-cols-3 gap-2' }}
				/>
			</main>
		</>
	);
}

export default Home;
