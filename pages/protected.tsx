import { getAuth } from '@clerk/nextjs/server';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // Use `getAuth()` to read the session on the server and protect this page.
  // Unlike <SignedIn>, which only controls what renders, this is the real
  // access check: a signed-out user who navigates here directly is redirected.
  const { isAuthenticated, userId } = getAuth(ctx.req);

  if (!isAuthenticated) {
    return { redirect: { destination: '/', permanent: false } };
  }

  return { props: { userId } };
}

export default function ProtectedPage({
  userId,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>
        Welcome! Your user ID is <code>{userId}</code>.
      </p>
    </main>
  );
}
