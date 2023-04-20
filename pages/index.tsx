import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: current } = useCurrentUser();
  return (
    <>
      <h1 className="text-8xl text-green-500">Hello Next</h1>
      <p className="text-4xl text-white">{current?.email}</p>
      <button onClick={() => signOut()} className="bg-white w-full">
        Sign Out
      </button>
    </>
  );
}
