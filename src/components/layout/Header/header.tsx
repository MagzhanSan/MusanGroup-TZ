import { Logo } from "@/assets/logo";
import React from "react";

const Header = () => {
  return (
    <header
      className="bg-white py-3 flex justify-center items-center"
      aria-label="logo"
    >
      <Logo
        className="w-[clamp(151px,calc(151px+137*(100vw-320px)/880),287px)]"
        fillColor="var(--logo-color)"
      />
    </header>
  );
};

export { Header };
