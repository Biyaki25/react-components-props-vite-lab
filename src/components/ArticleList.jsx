import Article from "./Article";

// Child of App. Turns the `posts` array into one <Article> per post.
// Each Article needs a unique `key` so React can track it.
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;