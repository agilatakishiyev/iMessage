import type { NextPage, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { Box } from "@chakra-ui/react";
import Chat from "../components/chat";
import Auth from "../components/auth";

const Home: NextPage = () => {
  const { data: session } = useSession();

  const reloadSession = () => {};

  return (
    <Box>
      {session?.user ? (
        <Chat />
      ) : (
        <Auth session={session} reloadSession={reloadSession} />
      )}
    </Box>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession();
  return {
    props: {
      session,
    },
  };
}

export default Home;
