import { SearchBox, Hits } from 'react-instantsearch-hooks-web';
import Hit from '../components/Hit';

function Home() {
	return (
		<main className='mx-auto max-w-2xl'>
			<SearchBox />
			<Hits hitComponent={Hit} />
		</main>
	);
}

export default Home;
