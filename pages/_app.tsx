import '@/styles/globals.css';
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider
      {...pageProps}
      appearance={{
        cssLayerName: 'clerk',
      }}
    >
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <Link href="/protected">Protected</Link>
          <UserButton />
        </Show>
      </header>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
