import { ReactNode } from 'react';

interface Props {
	className?: string;
	type: 'primary' | 'filter';
	children: ReactNode;
	onClick?: (param: any) => void;
}

function Button({ children, className, type, ...props }: Props) {
	const classes =
		type == 'filter'
			? `p-2 bg-white text-font font-bold rounded-lg shadow-md ${className}`
			: `p-2 bg-primary text-green-100 font-bold rounded-lg shadow-md shadow-primary/20 ${className}`;

	return (
		<button {...props} className={classes}>
			{children}
		</button>
	);
}
export default Button;
