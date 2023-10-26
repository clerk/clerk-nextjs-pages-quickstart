import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div>Your page's content can go here.</div>
    </>
  );
}

