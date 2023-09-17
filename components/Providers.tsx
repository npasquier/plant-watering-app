"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  session?: any;
  status?: any;
  profile?: any;
}

const Providers = (props: Props) => {
  const { children, session } = props;
  return <SessionProvider 
  session={session}
  >
    {children}
    </SessionProvider>;
};

export default Providers;
