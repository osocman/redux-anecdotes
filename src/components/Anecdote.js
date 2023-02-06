import { useDispatch } from "react-redux";

import { addVote } from '../reducers/anecdoteReducer';
import { setNotification, clearNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();
  
  const vote = ({id, text}) => {
    dispatch(addVote(id));
    dispatch(setNotification({ message: `Voted for: ${text}`, error: false }));
    setTimeout(() => dispatch(clearNotification()), 5000);
  };

  return (
    <div>
      <div>{anecdote.text}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote;