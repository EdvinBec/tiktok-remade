import { getAuth, signOut } from "firebase/auth";

export default function Home() {
  const auth = getAuth();

  return (
    <>
      <main>
        <button onClick={() => signOut(auth)}>sign out</button>
      </main>
    </>
  );
}
