import { useNotificationsStore } from '../store'

import { NotificationsListItem } from './NotificationsListItem'

export function NotificationsList() {
  const notifications = useNotificationsStore((state) => state.notifications)

  return (
    <ul className="max-w-full w-[320px] pl-4 absolute bottom-2 right-2 flex flex-col gap-4">
      {notifications.map((notification, index) => (
        <NotificationsListItem
          key={notification + index}
          notification={notification}
        />
      ))}
    </ul>
  )
}
