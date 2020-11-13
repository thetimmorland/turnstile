import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProof } from "features/proofs/proofSlice";
import styles from "./Counter.module.css";

interface MatchParams {
  proofId: string;
}

const ProofEditor = () => {
  const { proofId } = useParams<MatchParams>();
  const proof = useSelector(selectProof(proofId));

  console.log(proof);

  return <p></p>;
};

export default ProofEditor;
