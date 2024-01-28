import Link from 'next/link';
import { RegisterFuel } from './register-fuel';

export default function RegisterFuelButton({
  searchParams
}: {
  searchParams: { modal: string };
}) {
  const showModal = searchParams?.modal;
  return (
    <>
      <Link
        className="hover:brightness-75 text-white text-2xl font-bold py-2 px-4 rounded-full inline-flex flex-col fixed bottom-4 right-4"
        style={{
          backgroundImage:
            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)'
        }}
        href="?modal=true"
      >
        {/* TODO make the gradient background a reusable style */}+
      </Link>

      {showModal && <RegisterFuel />}
    </>
  );
}
