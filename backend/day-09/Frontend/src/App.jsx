import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  // const [notes, setNotes] = useState([
  //   {
  //     title: "test title 1",
  //     description: "test description 1"
  //   },
  //   {
  //     title: "test title 2",
  //     description: "test description 2"
  //   },
  //   {
  //     title: "test title 3",
  //     description: "test description 3"
  //   },
  //   {
  //     title: "test title 4",
  //     description: "test description 4"
  //   },
  // ])  
  const [notes, setNotes] = useState([])

  // console.log("connection established and data rendered.")

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes")
    .then((response) => 
      // console.log(response.data.notes)
      setNotes(response.data.notes)
    )
  }

  useEffect(() => {
    fetchNotes()
  }, [])
  

  function handleSubmit(e) {
    e.preventDefault();
    const {title, description} = e.target.elements

    console.log(title.value,description.value)
    axios.post("http://localhost:3000/api/notes",{
      title: title.value,
      description: description.value
    })
    .then(response => {
      console.log(response.data)
      fetchNotes()
    })
  }

  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/"+noteId)
    .then(response=> {
      console.log(response.data)
      fetchNotes()
    })
  }


  return (
    <>

      <div className='form-wrapper'>
        <form className='note-form' onSubmit={handleSubmit}>
          <div className="form-grp">
            <input type="text" name="title" id="" placeholder="Enter Title" />
          </div>
          <div className="form-grp">
            <input type="text" name="description" id="" placeholder="Enter Description" />
          </div>
          <button className='cta-btn'>Create Note</button>
        </form>
      </div>
      <div className="notes">
        {
          notes.map((note, index) => {
            return <div key={index} className="note">
                      <h3>{note.title}</h3>
                      <p>{note.description}</p>
                      <button className='del-btn' onClick={()=> {handleDeleteNote(note._id)}}>Delete Note</button>
                    </div>
          })
        }
        
      </div>
    </>
  )
}

export default App
