import { create } from 'zustand'

export interface UseNotificationsStoreState {
  notifications: string[]
}
export interface UseNotificationsStoreActions {
  addNotification: (notification: string) => void
}

export type UseNotificationsStore = UseNotificationsStoreState &
  UseNotificationsStoreActions

export const useNotificationsStore = create<UseNotificationsStore>()((set) => ({
  notifications: [],
  addNotification: (notification) => {
    set((prevState) => ({
      notifications: [notification, ...prevState.notifications],
    }))
    setTimeout(() => {
      set((prevState) => ({
        notifications: prevState.notifications.slice(1),
      }))
    }, 2000)
  },
}))
