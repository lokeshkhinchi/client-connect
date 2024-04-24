import React from 'react'

function ItemList({listKey, itemList, defaultItems, selectHandle}) {
  return (
    <div class="item-wrap">
        {itemList.map((item, index) => {
         return <div className={`list-item ${item.isSelected ? 'selected' : 'not-selected'}`} onClick={() => selectHandle(item.itemId, listKey)} key={item.itemId+index}>{defaultItems[item.itemId]}</div>
        })}
    </div>
  )
}

// function Item({name}) {
//     return (
//       <div className='item'>{ItemList}</div>
//     )
//   }

export default ItemList