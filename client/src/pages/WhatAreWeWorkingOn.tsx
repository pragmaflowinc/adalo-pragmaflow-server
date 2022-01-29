import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGetToDoListQuery } from '../generated/graphql'

interface ToDoItem {
  id: number
  title: string
  description: string
  status: string
}

export function WhatAreWeWorkingOn() {
  const [workStatus, setWorkState] = useState<{ [key: string]: ToDoItem[] }>({})
  const { data: currentWork } = useGetToDoListQuery()
  useEffect(() => {
    if (currentWork) {
      setWorkState(currentWork.getToDoList.reduce((acc, todo) => {
        if (!acc[todo.status]) {
          acc[todo.status] = []
        }
        acc[todo.status].push(todo)
        return acc
      }, {} as { [key: string]: ToDoItem[] }))
    }
  }, [currentWork])
  return (
    <div>
      <Typography variant="h1">What are we working on?</Typography>
      <Typography>Below is the list of items we are either tackling or plan on tackling. If we talked about something and it is not on the list, let us know because we probably forgot.</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2em'}}>
      {
        ["To Do", "Doing"].map((status, idx) => (
          <Box key={idx}>
            <Typography sx={{ textDecoration: 'underline' }}>{status}</Typography>
            {
              workStatus[status] && workStatus[status].map(toDo => (
                <Card key={toDo.id}>
                  <CardHeader title={toDo.title} />
                  <CardContent>
                    {toDo.description}
                  </CardContent>
                </Card>
              ))
            }
          </Box>
        ))
      }
      </Box>
    </div>
  )
}