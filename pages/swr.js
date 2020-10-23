import useSWR from "swr";
import Layout from "../components/Layout";

function Profile() {
  const { data, error } = useSWR("/api/user");

  if (error)
    return (
      <Layout>
        <h1>failed to load</h1>
      </Layout>
    );
  if (!data)
    return (
      <Layout>
        <h1>loading...</h1>
      </Layout>
    );
  return (
    <Layout>
      <h1>hello {data.name}!</h1>
    </Layout>
  );
}

export default Profile;
