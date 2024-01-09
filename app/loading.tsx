import LoadingSpinner from '@/components/loading-spinner/loading-spinner';

export default function Loading() {
  return (
    <div className="h-3/5 grid justify-items-center content-center loader">
      <LoadingSpinner></LoadingSpinner>
    </div>
  );
}
