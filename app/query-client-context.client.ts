import { QueryClient } from '@tanstack/react-query';
import { createContext } from 'react-router';

// To differentiate from RQ's QueryClientContext
export const QueryClientRRContext = createContext<QueryClient>();
