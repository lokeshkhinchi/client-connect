import React, { useEffect, useState } from 'react'
import ItemList from '../Components/ItemList'

const defaultItems = {
  1 : "List item 1",
  2 : "List item 2",
  3 : "List item 3",
  4 : "List item 4",
  5 : "List item 5",
  6 : "List item 6",
  7 : "List item 7",
  7 : "List item 8"
}

function Order() {
  const [leftList, setLeftList] = useState([])
  const [rightList, setRightList] = useState([])


  useEffect(() => {
    setupDefaultList()
  }, [])



  const setupDefaultList = () => {
    let tempList = []
    Object.keys(defaultItems).forEach(itemId => {
      tempList.push({
        itemId,
        isSelected: false
      })
    })
    setLeftList([...tempList])
  }

  const selectHandle = (itemID, fromList) => {
    let tempList = fromList === "left" ? leftList : rightList;
    
    tempList.forEach(item => {
      console.log(item.itemId)
        if (item.itemId == itemID) {
          item.isSelected = !item.isSelected
        }
    })

    if (fromList === "left") {
      setLeftList([...tempList])
    } else {
      setRightList([...tempList])
    }
    console.log(tempList)
  }

  const shiftItemRight = (desti="right") => {
    let readtForshift = [];
    let reamaningItems = [];
    let tempList = desti === "right" ? leftList : rightList;
    tempList.forEach(item => {
      if (item.isSelected) {        
        readtForshift.push({...item, isSelected: false})
      } else {
        reamaningItems.push(item)
      }
    })
    console.log(readtForshift, reamaningItems)
    console.log(readtForshift, reamaningItems)

    if (desti == "right") {
      setRightList([...rightList, ...readtForshift])
      setLeftList([...reamaningItems])
    } else  {
      setLeftList([...leftList, ...readtForshift])
      setRightList([...reamaningItems])
    }
  }

  const shiftAllItems = (desti="right") => {
    let tempList = desti == "right" ? leftList : rightList;
    console.log(tempList)
    if (desti === "right") {
      setLeftList([])
      setRightList([...rightList, ...tempList])
    } else  {
      setLeftList([...leftList, ...tempList])
      setRightList([])
    }
  }

  return (
    <div>
      <ItemList listKey="left"  itemList={leftList} defaultItems={defaultItems} selectHandle={selectHandle} />
      <button className='mr-2' onClick={() => shiftItemRight("right")}>Right</button>
      <button onClick={() => shiftAllItems("right")}>All Right</button>
      <br />
      <button className='mr-2' onClick={() => shiftItemRight("left")}>Left</button> 
      <button onClick={() => shiftAllItems("left")}>All Left</button>
      
      <ItemList listKey="right" itemList={rightList} defaultItems={defaultItems} selectHandle={selectHandle} />
    </div>
  )
}

export default Order