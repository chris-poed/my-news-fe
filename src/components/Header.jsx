import { useContext } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header>
      <h1>Welcome to your news, {user.name}</h1>
    </header>
  );
};

export default Header;
