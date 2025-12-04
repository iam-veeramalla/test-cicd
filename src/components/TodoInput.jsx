import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { Input } from './Input'
import { Button } from './Button'

export function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onAdd(text.trim())
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1"
      />
      <Button type="submit" size="icon" disabled={!text.trim()}>
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  )
}
