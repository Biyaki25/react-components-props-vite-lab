// Child of App. Shows the blog's name, received as the `name` prop.
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;