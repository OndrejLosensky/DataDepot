import React, { useState, useEffect } from 'react';
import { SlNotebook} from "react-icons/sl";
import { AiFillEdit, AiFillDelete  } from "react-icons/ai";

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
  const [selectedNote, setSelectedNote] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

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

  // Function to delete a note
  const deleteNote = (id) => {
    axios.delete(`/api/deleteNote/${id}`)
      .then(() => {
        setNotes(notes.filter(note => note.id !== id));
      })
      .catch(error => {
        console.error('Error deleting note:', error);
      });
  };

  // Function to handle editing a note
  const editNote = () => {
    // Update note API call
    setShowEditModal(false);
  };

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
        <h2 className="text-xl font-sora mb-2 font-semibold text-left text-gray-200 ">
          Notes{" "}
          <span className="text-gray-300 font-thin">
            ({filteredNotes.length})
          </span>
        </h2>
        <div className='grid grid-cols-3 gap-4'>
          {showAddNoteForm && (
            <div className='bg-gray-800 h-72 rounded-md p-4 mb-4'>
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

          {loading ? (
            Array.from({ length: 9 }, (_, index) => (
              <Skeleton key={index} />
            ))
          ) : filteredNotes.length === 0 ? (
            <p className="text-gray-300 text-center justify-center items-center pt-12 text-2xl col-span-3">
              No Notes found
            </p>
          ) : (
            filteredNotes.map((note) => (
              <div key={note.id} className='bg-gray-800 h-72 rounded-md p-4'>
                <div className='flex  flex-row items-center justify-between border-b pb-1 border-gray-500'>
                  <h3 className="text-xl font-semibold text-gray-200">{note.title}</h3>
                  <div className="flex flex-row">
                    <button
                      className="text-gray-400 hover:text-gray-200 mr-2"
                      onClick={() => {
                        setSelectedNote(note);
                        setShowEditModal(true);
                      }}
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      className="text-red-400 hover:text-red-600"
                      onClick={() => deleteNote(note.id)}
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
                <p className='text-gray-20 pt-2'>{note.content}</p>
              
              </div>
            ))
          )}
        </div>
      </div>
      {showEditModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-200 mb-4">Edit Note</h2>
            <input
              type="text"
              value={selectedNote.title}
              onChange={(e) => setSelectedNote({...selectedNote, title: e.target.value})}
              placeholder="Title"
              className="w-full mb-4 px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
            />
            <textarea
              value={selectedNote.content}
              onChange={(e) => setSelectedNote({...selectedNote, content: e.target.value})}
              placeholder="Type your note..."
              className="w-full h-24 px-4 py-2 mb-4 bg-gray-700 text-gray-200 rounded-lg resize-none focus:outline-none"
            />
            <div className="flex justify-end">
              <button 
                className="px-4 py-2 bg-purple-500 rounded-lg text-gray-100 mr-2"
                onClick={editNote}
              >
                Save
              </button>
              <button 
                className="px-4 py-2 bg-gray-600 rounded-lg text-gray-100"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
