import { RootState } from "../../store/store";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("appState");
    if (serializedState === null) {
      return undefined; // Let reducers initialize state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state:", err);
    return undefined;
  }
};

export const saveState = (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("appState", serializedState);
  } catch (err) {
    console.error("Failed to save state:", err);
  }
};
