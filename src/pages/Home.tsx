import { SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Header from '../components/Header';
import Hit from '../components/Hit';

function Home() {
	return (
		<>
			<Header title='Reguleque' />
			<main className='mx-auto max-w-6xl'>
				<SearchBox />
				<Hits hitComponent={Hit} />
			</main>
		</>
	);
}

export default Home;
