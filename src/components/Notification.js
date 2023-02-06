import { useSelector } from "react-redux"

const Notification = () => {
  const { message, visible, error } = useSelector((state) => state.notification)

  const style = {
    display: visible ? 'block' : 'none',
    border: 'solid',
    padding: 10,
    backgroundColor: error ? '#edb8b7' : '#c7edb7',
    maxWidth: 400,
    borderWidth: 1,
    position: 'absolute',
    top: 15,
    right: 15,
  }

  return (
    <div style={style}>
      { message }
    </div>
  )
}

export default Notification