import React from "react";
import type {AnchorHTMLAttributes} from "react"
type PropsFooterRedirect = {
    children: React.ReactNode
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & PropsFooterRedirect

export const OptionsRedirectModal = ({children,...propsA}: Props): JSX.Element => {
  return (
    <li className="mt-2">
      <a href="#" {...propsA} className="hover:font-semibold transition duration-300">
        {children}
      </a>
    </li>
  );
};
