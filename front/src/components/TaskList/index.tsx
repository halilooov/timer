import { TaskListItem } from '@/components/TaskListItem'
import { Task } from '@/types'

export interface TaskListProps {
  data: Task[]
}

export function TaskList({ data }: TaskListProps) {
  return (
    <ul className="overflow-y-auto w-full border-y-[1px] border-gray-600 animate-[fade_0.5s_ease-in-out_1]">
      {data.map((item) => (
        <TaskListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}
