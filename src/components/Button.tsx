import { ReactNode, ComponentProps, DetailedHTMLProps } from "react";

// interface Props {
//   className?: string;

//   onClick?: (param: any) => void;
// }
interface Props extends ButtonType {
  buttonType: "primary" | "filter";
  children: ReactNode;
  href?: string;
  target?: string;
}

type ButtonType = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

type AnchorType = DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {};

// TODO: figure out the best way to work with buttons that open links

function AppButton({
  children,
  className,
  buttonType,
  target,
  href,
  ...rest
}: Props) {
  const classes =
    buttonType == "filter"
      ? `py-2 px-4 bg-white text-font font-bold rounded-2xl shadow-md hover:bg-gray-50 transition-all ${className}`
      : `py-2 px-4 bg-primary text-white font-bold rounded-2xl shadow-md shadow-primary/20 hover:bg-primary/80 transition-all ${className}`;

  return (
    <>
      {href ? (
        <a
          href={href}
          target={target}
          className={classes}
          {...(rest as AnchorType)}
        >
          {children}
        </a>
      ) : (
        <button {...rest} className={classes}>
          {children}
        </button>
      )}
    </>
  );
}
export default AppButton;
