import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
