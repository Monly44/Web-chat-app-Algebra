import "./Style/Header.css";

const Header = (props) => {
  const isLoggedIn = !!props.username;
  return (
    <>
      {}
      {isLoggedIn && (
        <div className="App-header">
          <h1>{props.username}'s Chat Room</h1>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};
export default Header;
