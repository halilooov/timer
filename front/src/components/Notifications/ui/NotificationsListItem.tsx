export interface NotificationsListItemProps {
  notification: string
}

export function NotificationsListItem({
  notification,
}: NotificationsListItemProps) {
  return (
    <li className="bg-gray-600 rounded-xl flex p-4 items-center animate-[fade_0.5s_ease-in-out_1]">
      {notification}
    </li>
  )
}
