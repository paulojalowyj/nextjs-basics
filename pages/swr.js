import useSWR from "swr";
import Layout from "../components/Layout";

export async function getStaticProps() {
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const posts = await fetcher("/api/user");
  return { props: { name } };
}
function Profile(props) {
  // Here the `fetcher` function will be executed on the client-side.
  const { data } = useSWR("/api/user", fetcher, { initialData: props.name });
  // ...
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Layout>
      <h1>hello {data.name}!</h1>
    </Layout>
  );
}

export default Profile;
