import { Task } from '@/types'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNotificationsStore } from '@/components/Notifications/store'
import { createTask } from '@/api'

export interface TaskListItemProps {
  item: Task
}

export function TaskListItem({ item }: TaskListItemProps) {
  const addNotification = useNotificationsStore(
    (state) => state.addNotification
  )

  const [time, setTime] = useState(item.time)

  const stopwatch = useRef<NodeJS.Timeout>(null)
  const [isActive, setIsActive] = useState(false)

  const displayedTime = useMemo(() => {
    const minutes = Math.floor(time / 60)
    if (isActive) {
      return `${minutes > 9 ? minutes : `0${minutes}`}:${time % 60 > 9 ? time % 60 : `0${time % 60}`}`
    }

    return `${Math.floor(minutes / 60)}ч. ${minutes % 60}м.`
  }, [time, isActive])

  const stopHandler = () => {
    if (stopwatch.current) {
      if (time >= 60 && isActive) {
        clearInterval(stopwatch.current)
        setIsActive(false)
        createTask({ id: item.id, description: item.description, time }).then(
          () => {
            addNotification('Задача сохранена!')
          }
        )
      } else if (isActive) {
        addNotification('Задачи длительностью менее 1 минуты не сохраняются!')
      }
    }
  }

  useEffect(() => {
    if (item.time < 60 && !stopwatch.current) {
      setIsActive(true)
      // @ts-ignore
      stopwatch.current = setInterval(() => {
        setTime((prevState) => prevState + 1)
      }, 1000)
    }
  }, [item])

  return (
    <li className="border-b-[1px] border-gray-600 last-of-type:border-none">
      <button
        type="button"
        className={`w-full py-2 flex items-center pr-16 text-left relative ${isActive ? 'cursor-pointer' : 'cursor-auto'} break-all`}
        onClick={stopHandler}
      >
        {item.description}
        <span className="text-blue-600 break-normal absolute right-0 bottom-1/2 translate-y-1/2">
          {displayedTime}
        </span>
      </button>
    </li>
  )
}
