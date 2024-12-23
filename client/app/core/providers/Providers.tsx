"use client";

import { ThemeProvider } from "next-themes";
import ErrorBoundary from "./ErrorBoundary";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="data-theme"
        defaultTheme="system"
        enableSystem={true}
      >
        <ThemeProvider />
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  );
};
