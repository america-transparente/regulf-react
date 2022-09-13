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
		<header className='bg-gradient-to-r from-primary to-secondary p-4'>
			<h1 className='text-xl text-white font-extrabold italic font-poppins uppercase'>
				{title}
			</h1>
		</header>
	);
}

export default Header;
