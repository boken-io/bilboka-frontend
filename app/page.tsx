import LoginOptions from '@/components/auth/login-options';

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <LoginOptions></LoginOptions>
    </main>
  );
}
