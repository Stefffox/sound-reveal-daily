import { createContext, useContext, useState, type ReactNode } from "react";
import { tracks, type Track } from "./music-data";

type AppState = {
  hasPosted: boolean;
  postedTrack: Track | null;
  postTrack: (track: Track) => void;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [postedTrack, setPostedTrack] = useState<Track | null>(null);
  return (
    <AppContext.Provider value={{ hasPosted: postedTrack !== null, postedTrack, postTrack: setPostedTrack }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used within AppProvider");
  return value;
}

export const defaultTrack = tracks[0];