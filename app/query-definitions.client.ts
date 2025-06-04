import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

const ProductsSchema = z.object({
  products: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      price: z.number(),
    })
  ),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export const products = queryOptions({
  queryKey: ['products'],
  queryFn: async ({ signal }) => {
    return ProductsSchema.parse(
      await fetch('https://dummyjson.com/products?limit=25', {
        signal,
      }).then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
    );
  },
});
