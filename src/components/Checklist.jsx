import React, { useState} from 'react'
import './checklist.css'

const Checklist = () => {

  const [list, setList] = useState([])
  const [newItem, setNewItem] = useState("")

  const handleItemCheck = (id) => {
    let itemIndex = list.findIndex((item) => item.id === id);
   
    if (itemIndex > -1) {
      let selectedItem = list[itemIndex]
      let newList = list.slice();
      
      selectedItem.done = !selectedItem.done     
      newList[itemIndex] = selectedItem;
    
      setList(newList);
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (newItem?.trim() !== '') {
      let newItemObj = {
        name: newItem,
        id: Math.random() * 10
      }
      setList((item) => [...item, newItemObj]);
      setNewItem('');
    }
    
  }

  const handleOnChange = (e) => {
    const { value } = e.target;
    setNewItem(value)
  }

  return (
    <div className="checklist-ui">
      <h3>Check List</h3>
      <form autoComplete='off' onSubmit={(e) => handleFormSubmit(e)}>
        <input 
          type="text" 
          onChange={(e) => handleOnChange(e)}
          value = {newItem}
          placeholder="Enter new item" 
        />
        <button>Add</button>
      </form>
      <ul>
        {
          list && list.map((item) => {
            return <li key={item.id} onClick={() => handleItemCheck(item.id)}>
              <input name="item" type="checkbox" defaultChecked={item.done} />
              {item.done && <del>{item.name}</del>}
              {!item.done && <span>{item.name}</span>}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Checklist