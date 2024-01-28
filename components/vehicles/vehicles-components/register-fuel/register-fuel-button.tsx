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
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full fixed bottom-4 right-4"
        href="?modal=true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </Link>

      {showModal && <RegisterFuel />}
    </>
  );
}
