'use client'

import { useEffect, useState } from 'react'

import { getTask } from '@/api'

import { Task } from '@/types'

import { TaskList } from '@/components/TaskList'
import { CreateTaskForm } from '@/components/CreateTaskForm'
import { NotificationsList } from '@/components/Notifications'

export default function Home() {
  const [data, setData] = useState<Task[]>([])

  useEffect(() => {
    getTask().then(({ data }) => {
      setData(data)
    })
  }, [])

  return (
    <main className="max-w-lg min-h-screen max-h-screen overflow-hidden mx-auto flex flex-col items-center justify-center py-12 px-4 text-white gap-2">
      <CreateTaskForm setData={setData} />
      {!!data.length && <TaskList data={data} />}
      <NotificationsList />
    </main>
  )
}
