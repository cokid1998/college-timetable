import { PropsWithChildren } from "react";
import NextClassTimer from "../components/\bNextClassTimer";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div style={{ maxWidth: "767px", margin: "0 auto" }}>
      <NextClassTimer />
      {children}
    </div>
  );
};

export default Layout;
