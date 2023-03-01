import './NoteList.css'
import { useState, useEffect } from 'react'
import * as notesAPI from '../../utilities/notes-api'
import NoteItem from '../../components/NoteItem/NoteItem'

export default function NoteList({user}) {
    const [newNote, setNewNote] = useState('')
    const [notes, setNotes] = useState([])

    useEffect(function() {
        async function getNotes() {
          const notes = await notesAPI.getAll();
          setNotes(notes);
        }
        getNotes();
      }, []);

    async function handleAddNote(evt) {
        evt.preventDefault()
        try {
            const note = await notesAPI.createNote({ text: newNote, user: user._id})
            setNotes(prevNotes => [...prevNotes, note])
            setNewNote("")
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            <h1>{user.name}'s Notes</h1>
            <div className="flex col add-note">
                <textarea
                    value={newNote}
                    onChange={(evt) => setNewNote(evt.target.value)}
                    placeholder='Add a new note!'
                    rows={10}
                    cols={50}
                ></textarea>
                <div>
                    <button onClick={handleAddNote}>Add Note</button>
                </div>
            </div>
            { notes.length > 0 ? 
                <div className="flex show-note">
                    {notes.map((note, index) => 
                        <NoteItem note={note} user={user} key={index}/>
                    )}
                </div>
                    :
                    "No notes yet!"
            }
        </>
    )
}