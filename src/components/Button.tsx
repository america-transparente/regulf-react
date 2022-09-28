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
      ? `p-2 bg-white text-font font-bold rounded-lg shadow-md ${className}`
      : `p-2 bg-primary text-green-100 font-bold rounded-lg shadow-md shadow-primary/20 ${className}`;

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
