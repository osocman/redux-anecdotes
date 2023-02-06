import { useSelector } from "react-redux"

import Anecdote from "./Anecdote";
import Filter from "./Filter";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter}) => {
    if (!filter) {
      return anecdotes;
    } else {
      return anecdotes.filter((anecdote) => {
        return anecdote.text.toLowerCase().includes(filter.toLowerCase())
      })
    }
  });

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => {
    return b.votes - a.votes;
  })

  return (
    <>
      <Filter/>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote}/>
        ))
      }     
    </>
  )
}

export default AnecdoteList