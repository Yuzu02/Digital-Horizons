"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

// This component is used to wrap the entire application to provide the session context
const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
