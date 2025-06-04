import { QueryClient } from '@tanstack/react-query';
import { unstable_createContext } from 'react-router';

// To differentiate from RQ's QueryClientContext
export const QueryClientRRContext = unstable_createContext<QueryClient>();
