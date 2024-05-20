import { v4 } from 'uuid'

import Image from 'next/image'

import { Task } from '@/types'
import { useState } from 'react'

export interface CreateTaskFormProps {
  setData: React.Dispatch<React.SetStateAction<Task[]>>
}

export function CreateTaskForm({ setData }: CreateTaskFormProps) {
  const [description, setDescription] = useState('')

  return (
    <form
      className="w-full flex items-center justify-between gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        if (description) {
          setData((prevState) => [
            { id: v4(), description, time: 0 },
            ...prevState,
          ])
          setDescription('')
        }
      }}
    >
      <input
        type="text"
        className="w-full h-[40px] bg-gray-600 rounded-md p-2 focus:outline-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        <Image
          src="/play_icon.svg"
          alt="play-icon"
          width={40}
          height={40}
          priority
        />
      </button>
    </form>
  )
}
