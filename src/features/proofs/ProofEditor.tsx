import NavBar from "app/Navbar";
import { selectProof } from "features/proofs/proofsSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

interface MatchParams {
  proofId: string;
}

const ProofEditor = () => {
  const { proofId } = useParams<MatchParams>();
  const proof = useSelector(selectProof(proofId));

  return (
    <div>
      <NavBar />
      {proof ? <div>json.stringify(proof)</div> : <h2>Could not find proof</h2>}
    </div>
  );
};

export default ProofEditor;
