import React from 'react'
import './list.css';

const SimpleList = (props) => {

  const { listItems, heading }  = props
 
  return (
    <React.Fragment>
      { heading && heading !== '' && <h3 className='list-heading'>List</h3> }
      { listItems && (listItems.length > 0) && <ul className='list-items-ui'>
        { 
          listItems.map((item) => <li key={item?.id}>{item?.title}</li>)
        }
        </ul>
      }
    </React.Fragment>
  )
}

export default SimpleList