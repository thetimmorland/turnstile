import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "#FFF",
  },
}));

interface Props {
  children?: React.ReactNode;
}

const Navbar = ({ children }: Props) => {
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          <Link to="/" className={styles.link}>
            Turnstile
          </Link>
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
