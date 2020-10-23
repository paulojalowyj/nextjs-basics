import useSWR from "swr";
import Layout from "../components/Layout";

function Profile() {
  const { data, error } = useSWR("http://localhost:3000/api/user");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <Layout>
      <h1>hello {data.name}!</h1>
    </Layout>
  );
}

export default Profile;
