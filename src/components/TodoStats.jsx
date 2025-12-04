import React from 'react'
import { CheckCircle2, Circle, ListTodo } from 'lucide-react'

export function TodoStats({ todos }) {
  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const pending = total - completed

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
        <ListTodo className="h-5 w-5 text-primary" />
        <div>
          <p className="text-2xl font-bold">{total}</p>
          <p className="text-xs text-muted-foreground">Total</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
        <Circle className="h-5 w-5 text-orange-500" />
        <div>
          <p className="text-2xl font-bold">{pending}</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
        <CheckCircle2 className="h-5 w-5 text-green-500" />
        <div>
          <p className="text-2xl font-bold">{completed}</p>
          <p className="text-xs text-muted-foreground">Completed</p>
        </div>
      </div>
    </div>
  )
}
