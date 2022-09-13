interface Props {
	title: string;
}

/**
 * Builds the page header with a gradient from primary color to secondary color (left to right)
 *
 * Colors primary and secondary must be declare in ```tailwind.config.cjs```
 */

function Header({ title }: Props) {
	return (
		<header className={`bg-gradient-to-r from-primary to-secondary p-3`}>
			<h1 className='text-2xl text-white font-extrabold italic'>{title}</h1>
		</header>
	);
}

export default Header;
