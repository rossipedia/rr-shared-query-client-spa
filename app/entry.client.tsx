import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import { QueryClientRRContext } from './query-client-context.client';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000, // 1 minute
      gcTime: 300_000, // 5 minutes
    },
  },
});

function AppWithQueryClient() {
  return (
    <QueryClientProvider client={client}>
      <HydratedRouter
        unstable_getContext={() => new Map([[QueryClientRRContext, client]])}
      />
    </QueryClientProvider>
  );
}

startTransition(() => {
  hydrateRoot(
    document,

    <AppWithQueryClient />
  );
});
