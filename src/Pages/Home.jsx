import React, { useEffect, useState } from 'react'

const apiUrl = "https://jsonplaceholder.typicode.com/users";
const itemsPerPage = 5

function Home() {
  const [users, setUsers] = useState([])
  const [currPage, setCurrPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [currPageList, setCurrPageList] = useState([])

  useEffect(() => {
    setCurrPageList(users.slice((currPage-1) * itemsPerPage, currPage * itemsPerPage))
  }, [totalPages, currPage])

  useEffect(() => {
    setCurrPage(1)
  }, [totalPages])
  
  useEffect(() => {
    if (users.length > 0) {
      setTotalPages(Math.ceil(users.length / itemsPerPage))
    }
  }, [users, currPage])

  useEffect(() => {
    if (users.length > 0) {
      setTotalPages(Math.ceil(users.length / itemsPerPage))
    }
  }, [totalPages])



  const goToPage = (pageNumb=1) => {
    setCurrPage(pageNumb)
  }
  

  const fetchUsers = async () => {
    const res = await fetch(apiUrl)
    const resJson = await res.json()
    setUsers([...resJson])
  }

  useEffect(() => {
    fetchUsers()
  }, [])
  

  return (
    <div className='w-full shadow-md'>
      {currPageList.map((user) => <div key={`${user.id}__${user.email}`}>{user.email}</div>)}
      <div className='pagi-wrap'>

        {
          Array.from({length: totalPages}, (_,i) => i+1).map((page, index) => (
            <button onClick={() => goToPage(page)} className="mr-4 p-5" key={`pagi_key${index}_${page}`}>{page}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Home