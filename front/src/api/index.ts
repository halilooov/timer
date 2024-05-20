import { Task } from '@/types'

export async function getTask() {
  return (await fetch('/api/task/all')).json()
}

export async function createTask(body: Task) {
  return (
    await fetch('/api/task/create', {
      method: 'POST',
      body: JSON.stringify(body),
    })
  ).json()
}
