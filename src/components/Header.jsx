import { useContext } from "react";
import { UserContext, UserProvider } from "../contexts/UserContext";
import { Typography, Box } from "@mui/material";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

<Typography variant="h2">
      Welcome to your news, {user.name}
    </Typography>

</Box>


  );
};

export default Header;
