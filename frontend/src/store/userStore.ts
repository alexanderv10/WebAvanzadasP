import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  username: string
  firstName: string
  lastName: string
  currentMode: 'buyer' | 'artist'
  isArtistModeEnabled: boolean
  avatarUrl?: string
}

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  switchMode: (mode: 'buyer' | 'artist') => void
  logout: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      switchMode: (mode) => 
        set((state) => ({
          user: state.user ? { ...state.user, currentMode: mode } : null
        })),
      logout: () => set({ user: null })
    }),
    {
      name: 'user-storage'
    }
  )
)