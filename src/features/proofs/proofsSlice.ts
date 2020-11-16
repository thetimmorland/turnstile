import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface Proof {
  id: string;
}

export const proofsSlice = createSlice({
  name: "proofs",
  initialState: [] as Proof[],
  reducers: {
    addProof: {
      reducer: (state, action: PayloadAction<Proof>) => {
        state.push(action.payload);
      },
      prepare: () => {
        const id = nanoid();
        return { payload: { id } };
      },
    },
  },
});

export const { addProof } = proofsSlice.actions;

export const selectProof = (proofId: string) => (state: RootState) =>
  state.proofs.find((proof) => proof.id === proofId);

export default proofsSlice.reducer;
