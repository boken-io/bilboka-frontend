'use client';

import AuthCorbado from '@/components/auth/auth-corbado';
import LoginOptions from '@/components/auth/login-options';

export default function LoginPage() {
  return (
    <div className="mt-5">
      <AuthCorbado mode="login" />
    </div>
  );
}
