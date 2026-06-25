import '@/styles/globals.css';
import {
  ClerkProvider,
  Show,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps} appearance={{
      cssLayerName: 'clerk'
    }}>
      <header>
        <Show when="signed-out">
          <SignInButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
