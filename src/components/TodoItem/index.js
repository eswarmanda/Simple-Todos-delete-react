import './index.css'

const Todo = props => {
  const {todoList, onDelete} = props
  const {id, title} = todoList
  const onDeleteButton = () => {
    onDelete(id)
  }
  return (
    <li className="list-ele">
      <p className="title">{title}</p>
      <button className="btn" type="button" onClick={onDeleteButton}>
        Delete
      </button>
    </li>
  )
}

export default Todo
