import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { AppBar, Toolbar, Typography, Button, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ProofList = () => {
  const styles = useStyles();
  const proofs = useSelector((state: RootState) => state.proofs);
  const renderedProofs = proofs.map((proof) => <p>proof.id</p>);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Proofs</Typography>
        </Toolbar>
      </AppBar>
      {renderedProofs}
      <Fab color="primary" className={styles.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default ProofList;
