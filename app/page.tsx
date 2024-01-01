import LoadingSpinner from './_components/loading-spinner/loading-spinner';
import LoginOptions from './_components/login/login';

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <LoginOptions></LoginOptions>
    </main>
  );
}
