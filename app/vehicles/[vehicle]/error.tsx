'use client';

import UnauthorizedPage from '@/components/vehicles/vehicles-components/unauthorized/unauthorized';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return <UnauthorizedPage error={error.message} />;
}
