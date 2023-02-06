import { useDispatch } from "react-redux"

import { update } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(update(event.target.value))
  }

  return (
    <>
      <label htmlFor='filter'> Filter </label>
        <input
          type='text'
          name='filter'
          onChange={(event) => handleChange(event)}>
        </input>
    </>
  )
}

export default Filter