import Valley from '@/components/splash-screen/valley-screen/valley-screen';
import BlendMode from '@/components/splash-screen/blend-mode-screen/blend-mode-screen';
import CheckCorbadoAuth from '@/lib/auth/check-corbado-auth';
import CorbadoLogin from '@/components/auth/corbado-login';

export default async function IndexPage() {
  return (
    <>
      {/* <Valley /> */}
      {/* <BlendMode /> */}
      <CheckCorbadoAuth />
      <CorbadoLogin />
    </>
  );
}
