import React from "react";
import type {AnchorHTMLAttributes} from "react"
type LiProps = {
    children:  React.ReactNode,
}

type props = AnchorHTMLAttributes<HTMLAnchorElement> & LiProps

export const ItemCategoryNavbar = ({children,...Liprops} : props): JSX.Element => {
  return (
    <li>
      <a className=" bg-white/10 rounded-lg px-3 py-1 hover:font-semibold transition-all duration-300"
        {...Liprops}
        href="">
            {children}
      </a>
    </li>
  );
};
