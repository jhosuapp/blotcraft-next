import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "@/shared/interfaces";
import { sampleUserData } from "@/shared/utils/sample-data";
import Layout from "pages/Layout";
import List from "@/shared/components/List";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example" description="test">
    <h1>Users List</h1>
    {JSON.stringify(items)}
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
