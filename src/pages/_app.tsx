import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "~/components/ui/sonner";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}
