"use client";

import { useState } from "react";
import { Loading } from "./loading";

interface LoadingProviderProps {
  children: React.ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {children}
      {isLoading && <Loading onComplete={handleComplete} />}
    </>
  );
}
