import americatransparenteLogo from '../assets/americatransparente_logo.png';
import Button from './Button';
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
		<header className='bg-gradient-to-r from-primary to-secondary'>
			<section className='max-w-6xl mx-auto p-4 flex items-center justify-between'>
				<div className='flex gap-4'>
					<h1 className='text-xl text-white font-extrabold italic font-poppins uppercase'>
						{title}
					</h1>
					<a href='https://americatransparente.org/' target='_blank'>
						<img
							src={americatransparenteLogo}
							className='h-8'
							alt='Logo de la fundacion America Transparente'
						/>
					</a>
				</div>
				<div className='space-x-4'>
					<Button type='primary'>Donar</Button>
					<Button type='primary'>Hazte Socio</Button>
				</div>
			</section>
		</header>
	);
}

export default Header;
