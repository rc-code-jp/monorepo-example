import type { Metadata } from 'next';

export const createMetadata = ({
  title,
  description = 'Monorepo Web by Next.js',
}: {
  title: string;
  description?: string;
}): Metadata => {
  return {
    title,
    description,
  };
};
