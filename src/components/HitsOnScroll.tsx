import { useEffect, useRef, useState } from 'react';
import {
	useInfiniteHits,
	UseInfiniteHitsProps,
} from 'react-instantsearch-hooks-web';
import Hit from './Hit';

interface Props {
	config?: UseInfiniteHitsProps;
}

// TODO: document this component bcz its very confusing, also, it would be nice if the Hit component could be pass as a prop

function HitsOnScroll({ config }: Props) {
	const { hits, results, showMore } = useInfiniteHits(config);

	const targetRef = useRef(null);
	const showHitsOnScroll = (entries: any) => {
		const [targetRefEntry] = entries;
		targetRefEntry.isIntersecting && showMore(); // when targetRef element visible trigger showMore
	};
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5, // percentage of how much the targetRef element is visible for showHitsOnScroll to trigger
	};

	useEffect(() => {
		const observer = new IntersectionObserver(showHitsOnScroll, options);
		const currentTarget = targetRef.current;
		currentTarget && observer.observe(currentTarget);
		return () => {
			currentTarget && observer.unobserve(currentTarget);
		};
	}, [targetRef, options]);

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
			{hits.map((hit) => (
				<Hit hit={hit} />
			))}
			<div ref={targetRef} className='py-24'></div>
		</div>
	);
}

export default HitsOnScroll;
