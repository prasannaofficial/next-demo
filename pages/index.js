import Layout from "../components/Layout";

function Index(props) {
  return (
    <Layout>
      <div>
        <h1>Welcome</h1>
        <div className="post-container">
          {props.posts.map((post) => (
            <div className="post">
              <div className="title">{post.title}</div>
              <div className="body">{post.body}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .post-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .post {
          border: 1px solid #333;
          max-width: 300px;
          min-width: 300px;
          padding: 10px;
          margin: 20px;
          border-radius: 5px;
        }
        .post:hover {
          box-shadow: 3px 3px #ccc;
        }
        .title {
          font-size: 20px;
          color: #003fff;
        }
        .body {
          font-size: 16px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
      temp: "temp",
    },
  };
}

export default Index;
