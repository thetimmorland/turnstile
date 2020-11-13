import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface Proof {
  id: string;
}

const initialState = [] as Proof[];

export const editorSlice = createSlice({
  name: "proofs",
  initialState,
  reducers: {},
});

export const {} = editorSlice.actions;

export const selectProof = (proofId: string) => (state: RootState) =>
  state.proofs.find((proof) => proof.id === proofId);

export default editorSlice.reducer;
