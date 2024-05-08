import React, { useState } from 'react';
import { SlNotebook } from "react-icons/sl";
import SearchInput from './SearchInput';
import Profile from './Profile';

const Notes = ({ isUserActive }) => {
  // State to store notes
  const [notes, setNotes] = useState([]);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  // Function to add a new note
  const addNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteContent.trim() !== '') {
      const newNote = {
        id: notes.length + 1, // Generate unique id for the note
        title: newNoteTitle.trim(), // Title of the note
        content: newNoteContent.trim(), // Content of the note
      };
      setNotes([...notes, newNote]);
      setNewNoteTitle(''); // Clear title input after adding note
      setNewNoteContent(''); // Clear content input after adding note
      setShowAddNoteForm(false); // Hide the form after adding note
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex items-center justify-between h-[5%]'>
        <div className='flex items-center gap-x-2'>
          <SlNotebook className='w-6 h-6 text-gray-200' />
          <p className='text-2xl text-gray-200 font-sora pr-4'>NoteStorage</p>
          <SearchInput placeholder="Search note" />
        </div>
        <div className='flex items-center'>
          {!showAddNoteForm && (
            <button 
              className='px-4 bg-purple-500 rounded-lg text-gray-100 py-2 mr-4' 
              onClick={() => setShowAddNoteForm(true)}
            >
              + Add Note
            </button>
          )}
          <div className='relative'>
            <Profile isUserActive={isUserActive} />
          </div>
        </div>
      </div>

      <div className='h-[95%] grid grid-cols-3 gap-4 pt-4 overflow-auto'>
        {showAddNoteForm && (
          <div className='col-span-3 bg-gray-800 rounded-md p-4'>
            <input
              type="text"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)}
              placeholder="Title"
              className="w-full px-4 py-2 mb-4 bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
            />
            <textarea
              value={newNoteContent}
              onChange={(e) => setNewNoteContent(e.target.value)}
              placeholder="Type your new note..."
              className="w-full h-24 px-4 py-2 mb-4 bg-gray-700 text-gray-200 rounded-lg resize-none focus:outline-none"
            />
            <div className="flex justify-end mt-4">
              <button 
                className="px-4 py-2 bg-purple-500 rounded-lg text-gray-100 mr-2"
                onClick={addNote}
              >
                Save
              </button>
              <button 
                className="px-4 py-2 bg-gray-600 rounded-lg text-gray-100"
                onClick={() => setShowAddNoteForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {notes.map(note => (
          <div key={note.id} className='bg-gray-800 w-1/4 h-1/2 rounded-md p-4'>
            <input
              type="text"
              value={note.title}
              readOnly
              className="mb-2 w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
            />
            <p className='text-gray-200'>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes;
