import { PrismaClient } from "@prisma/client";
import React from "react";
import Layout from "../shared/components/Layout";
import Navbar from "../shared/components/Navbar";
import RecentThreads from "../shared/components/RecentThreads";
import { ThreadWithRelations } from "../shared/models/ThreadWithRelations";

// This gets rendered on the client
export default function Home(props: { threads: ThreadWithRelations[] }) {
  return (
    <Layout>
      <Navbar />
      <RecentThreads threads={props.threads} />
    </Layout>
  );
}

// This gets rendered on the server
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const threads = await prisma.thread.findMany({
    include: {
      author: true,
      tags: true,
    },
  });

  return {
    props: { threads: JSON.parse(JSON.stringify(threads)) },
  };
};
