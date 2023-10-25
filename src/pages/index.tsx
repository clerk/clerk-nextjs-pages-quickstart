import { UserButton } from "@clerk/nextjs";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <header className={inter.className}>
        <UserButton afterSignOutUrl="/" />
      </header>
      <div className={inter.className}>Your page's content can go here.</div>
    </>
  );
}

