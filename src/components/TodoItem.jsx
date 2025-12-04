import React from 'react'
import { Check, Trash2, Circle } from 'lucide-react'
import { Button } from './Button'
import { cn } from '../lib/utils'

export function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onToggle(todo.id)}
        className="shrink-0"
      >
        {todo.completed ? (
          <Check className="h-5 w-5 text-primary" />
        ) : (
          <Circle className="h-5 w-5 text-muted-foreground" />
        )}
      </Button>
      
      <div className="flex-1 min-w-0">
        <p
          className={cn(
            'text-sm font-medium transition-all',
            todo.completed && 'line-through text-muted-foreground'
          )}
        >
          {todo.text}
        </p>
        {todo.createdAt && (
          <p className="text-xs text-muted-foreground mt-1">
            {new Date(todo.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        )}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="h-4 w-4 text-destructive" />
      </Button>
    </div>
  )
}
