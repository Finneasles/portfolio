import {
  MobileMenu as Burger,
  CTA,
  LogoComponent,
  Nav as Menu,
  SignInButtonComponent,
} from "@/components";
import { NextRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  menuData: object;
  variant?: string;
  router: NextRouter;
  scrollY: number;
  transparentNav?: boolean;
};

const variants = {
  primary: "absolute border-transparent border-b-0 text-white",
  fixed:
    "fixed bg-white dark:bg-[#00162D] bg-opacity-95 backdrop-blur-xl dark:border-white/10 border-white/10 bg-opacity-80",
};

export const Navbar = (props) => {
  const [visible, setMobileMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <nav
      aria-label="Site Navigation"
      className={`${
        variants[props.variant || "primary"]
      } z-[98] h-[96px] w-full border-b px-6 lg:px-32`}
    >
      <div
        className={`mx-auto flex h-full w-full max-w-4xl items-center justify-between text-sm`}
      >
        <LogoComponent transparentNav={props.transparentNav} />
        <div className="flex w-full items-center justify-end space-x-2">
          <Menu
          {...{...props,}}
            transparentNav={props.transparentNav}
          />
          <SignInButtonComponent state={{ modal, setModal }} />
          <CTA />
          <Burger data={props.menuData} state={{ visible, setMobileMenu }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
