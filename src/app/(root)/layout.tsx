import type { ReactNode } from "react";

import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default RootLayout;
