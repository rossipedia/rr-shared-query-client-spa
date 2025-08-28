import { QueryClientRRContext } from '~/query-client-context.client';
import { Route } from './+types/_._index';
import * as queryDefs from '~/query-definitions.client';
import { useQuery } from '@tanstack/react-query';

export async function clientLoader({ context }: Route.ClientLoaderArgs) {
  // Preload
  const queryClient = context.get(QueryClientRRContext);
  queryClient.prefetchQuery({
    ...queryDefs.products,
  });
  return null;
}

export default function Component() {
  const productsQuery = useQuery(queryDefs.products);
  return (
    <div>
      <h1>Hello React Router</h1>
      {productsQuery.isPending && <p>Loading...</p>}
      {productsQuery.isError && <p>Error: {productsQuery.error.message}</p>}
      {productsQuery.isSuccess && (
        <ul>
          {productsQuery.data.products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
