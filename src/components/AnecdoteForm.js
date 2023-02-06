import { useDispatch } from "react-redux";

import { addAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, clearNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const newAnecdote = (event) => {
    event.preventDefault();
    const anecdoteText = event.target.anecdote.value;
    dispatch(addAnecdote(anecdoteText));
    document.querySelector('[name="anecdote"]').value = '';

    dispatch(setNotification({ message: `Added: ${ anecdoteText }`, error: false}))
    setTimeout(() => dispatch(clearNotification()), 5000);
  }

  return (
      <form onSubmit={newAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>Create</button>
      </form>
  )
}

export default AnecdoteForm;