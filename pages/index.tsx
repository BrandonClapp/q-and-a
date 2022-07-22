import React from "react";
import Layout from "../shared/components/Layout";
import Navbar from "../shared/components/Navbar";
import RecentThreads from "../shared/components/RecentThreads";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <RecentThreads />
    </Layout>
  );
}
