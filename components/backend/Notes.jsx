import React, { useState, useEffect } from 'react';
import { SlNotebook } from "react-icons/sl";
import Profile from './Profile';
import axios from 'axios';
import Skeleton from '../Skeleton';
import SearchInput from '../backend/SearchInput';

const Notes = ({ isUserActive }) => {
  // State to store notes and loading state
  const [notes, setNotes] = useState([]);
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a new note
  const addNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteContent.trim() !== '') {
      const newNote = {
        title: newNoteTitle.trim(),
        content: newNoteContent.trim(),
      };

      axios.post('/api/addNote', newNote)
        .then(response => {
          const { id } = response.data;
          setNotes([...notes, { id, ...newNote }]);
          setNewNoteTitle('');
          setNewNoteContent('');
          setShowAddNoteForm(false);
        })
        .catch(error => {
          console.error('Error adding note:', error);
        });
    }
  };

  // Function to fetch notes from API
  const fetchNotes = () => {
    axios.get('/api/getNotes')
      .then(response => {
        setNotes(response.data);
        setLoading(false); // Set loading to false after fetching
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Function to filter notes based on search query
  const filteredNotes = notes.filter(note => {
    return note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           note.content.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='flex items-center justify-between h-12'>
        <div className='flex items-center gap-x-2'>
          <SlNotebook className='w-6 h-6 text-gray-200' />
          <p className='text-2xl text-gray-200 font-sora pr-4'>NoteStorage</p>
          {/* Search Input */}
          <SearchInput placeholder="Search notes..." setSearchQuery={setSearchQuery} />
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

      <div className='overflow-auto pt-4'>

        <div className='grid grid-cols-3 gap-4'>
          {showAddNoteForm && (
            <div className='bg-gray-800 h-[350px] rounded-md p-4 mb-4'>
              <input
                type="text"
                value={newNoteTitle}
                onChange={(e) => setNewNoteTitle(e.target.value)}
                placeholder="Title"
                className="w-full mb-4 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
              />
              <textarea
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                placeholder="Type your new note..."
                className="w-full h-24 px-4 py-2 mb-4 bg-gray-700 text-gray-200 rounded-lg resize-none focus:outline-none"
              />
              <div className="flex justify-end">
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

          {/* Display skeleton while loading */}
          {loading && [1, 2, 3, 4, 5, 6].map(index => <Skeleton key={index} />)}

          {/* Display filtered notes */}
          {!loading && filteredNotes.map(note => (
            <div key={note.id} className='bg-gray-800 h-[350px] rounded-md p-4'>
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
    </div>
  )
}

export default Notes;
