// Bonus: build the emoji string for the "minutes to read" label.
// Under 30 min: one ☕️ per 5 minutes (rounded up).
// 30 min or more: one 🍱 per 10 minutes (rounded up).
function getReadTime(minutes) {
  if (minutes === undefined) return null;
  const emoji =
    minutes < 30
      ? "☕️".repeat(Math.ceil(minutes / 5))
      : "🍱".repeat(Math.ceil(minutes / 10));
  return `${emoji} ${minutes} min read`;
}

// Child of ArticleList. `date` has a default if none is passed.
function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutes !== undefined && <span className="read-time"> {getReadTime(minutes)}</span>}
      <p>{preview}</p>
    </article>
  );
}

export default Article;