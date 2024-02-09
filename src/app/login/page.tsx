'use client';

import AuthOptions from '@/components/auth/auth-options';

export default function LoginPage() {
  return (
    <div className="mt-5">
      <AuthOptions mode="login" />
    </div>
  );
}
