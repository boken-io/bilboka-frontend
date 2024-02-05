import LoadingSpinner from '@/components/loading-spinner/loading-spinner';

export default function Loading() {
  return (
    <div className="grid justify-items-center content-center min-h-screen">
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
}
