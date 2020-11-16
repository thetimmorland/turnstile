import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "app/Navbar";
import { RootState } from "app/store";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ProofList = () => {
  const styles = useStyles();
  const proofs = useSelector((state: RootState) => state.proofs);
  const renderedProofs = proofs.map((proof) => <p>proof.id</p>);

  return (
    <div>
      <Navbar />
      {renderedProofs}
      <Fab
        component={Link}
        to="/proof/foo"
        variant="extended"
        color="secondary"
        className={styles.fab}
      >
        <AddIcon className={styles.extendedIcon} />
        New Proof
      </Fab>
    </div>
  );
};

export default ProofList;
