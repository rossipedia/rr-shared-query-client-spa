import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RouterContextProvider } from 'react-router'
import { HydratedRouter } from 'react-router/dom'

import { QueryClientRRContext } from './query-client-context.client'

const queryClient = new QueryClient({
  // ... options
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
})

const initialContext = new Map([[QueryClientRRContext, queryClient]])

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <HydratedRouter
          getContext={() => new RouterContextProvider(initialContext)}
        />
      </QueryClientProvider>
    </StrictMode>,
  )
})
