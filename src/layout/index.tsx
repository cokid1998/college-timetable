import { PropsWithChildren } from "react";
import NextClassTimer from "../components/\bNextClassTimer";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NextClassTimer />
      {children}
    </>
  );
};

export default Layout;
