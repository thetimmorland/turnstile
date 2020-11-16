import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import proofReducer from "features/proofs/proofsSlice";

const store = configureStore({
  reducer: {
    proofs: proofReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
