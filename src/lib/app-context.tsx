import { createContext, useContext, useState, type ReactNode } from "react";
import { groups, solsticeTrack, type Track } from "./music-data";

type AppState = {
  hasPosted: boolean;
  postedTrack: Track | null;
  postedGroup: string | null;
  postTrack: (track: Track, groupName: string) => void;
};

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [postedTrack, setPostedTrack] = useState<Track | null>(null);
  const [postedGroup, setPostedGroup] = useState<string | null>(null);
  return (
    <AppContext.Provider
      value={{
        hasPosted: postedTrack !== null,
        postedTrack,
        postedGroup,
        postTrack: (track, groupName) => {
          setPostedTrack(track);
          setPostedGroup(groupName);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const value = useContext(AppContext);
  if (!value) throw new Error("useApp must be used within AppProvider");
  return value;
}

export const defaultTrack = solsticeTrack;
export const defaultGroup = groups[0].name;
