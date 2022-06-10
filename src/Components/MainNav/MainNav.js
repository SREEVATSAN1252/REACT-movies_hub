import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Movie, Search, Tv, Whatshot } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  }, [value]);

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#2d313a",
        zIndex: 100,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Trending"
        icon={<Whatshot />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Movies"
        icon={<Movie />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="TV Series"
        icon={<Tv />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label="Search"
        icon={<Search />}
      />
    </BottomNavigation>
  );
}
