/**
 * Project: lifeplanner-webapp
 * File: Provider
 * Created by pennycodes on 09/08/2023.
 * Copyright lifeplanner-webapp
 */
"use client"

import {ReactNode, useState} from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'next-themes'
import {validateEnvironmentVariables} from "@/config/validate-environment-variables";
import {ErrorBoundaryFallback} from "@/components/ui/error-message";
function LifePlannerApp({ children }:  { children: ReactNode}) {
    const [queryClient] = useState(() => new QueryClient());

    validateEnvironmentVariables();

    return (
      <ErrorBoundary
          FallbackComponent={ErrorBoundaryFallback}
      >
          <QueryClientProvider client={queryClient}>
              <Hydrate>
                  <ThemeProvider
                      attribute="class"
                      defaultTheme="light"
                      enableSystem={false}
                  >
                      <AnimatePresence
                          initial={false}
                          onExitComplete={() => window.scrollTo(0, 0)}
                      >
                          <>
                              {children}

                              <Toaster containerClassName="!top-16 sm:!top-3.5 !bottom-16 sm:!bottom-3.5" />
                          </>
                      </AnimatePresence>

                  </ThemeProvider>
              </Hydrate>
              <ReactQueryDevtools
                  initialIsOpen={false}
                  position="bottom-right"
              />
          </QueryClientProvider>
      </ErrorBoundary>
    );
}

export default LifePlannerApp;

