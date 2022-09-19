import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { UserContext } from "../../App";

export default function HomePage() {
  const { user, setUser } = React.useContext(UserContext);

  const ulogujUsera = () => {
    setUser({
      ...user,
      name: "John",
      email: "john@doe.com",
      address: "Prvomajska",
    });
  };

  const izlogujUsera = () => {
    setUser({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Button
        variant="contained"
        onClick={() => (user.name === "" ? ulogujUsera() : izlogujUsera())}
      >
        {user.name === "" ? "Log in" : "Log out"}
      </Button>

      {user.name === "" ? <h1>Niste ulogovani</h1> : <h1>Ulogvani ste</h1>}
    </Box>
  );
}
