import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  wallet: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const useAuth = create<AuthState>((set) => ({
  isAuthenticated: false,
  wallet: null,
  connect: async () => {
    // Here you would implement actual wallet connection logic
    set({ isAuthenticated: true, wallet: '0x...' });
  },
  disconnect: () => {
    set({ isAuthenticated: false, wallet: null });
  },
}));

export default useAuth;