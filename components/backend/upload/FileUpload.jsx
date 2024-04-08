import axios from 'axios';

const FileUpload = ({ successAlertVisible, errorAlertVisible }) => {

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      successAlertVisible(true);
      setTimeout(() => {
        successAlertVisible(false);
      }, 2000); 
    } catch (error) {
      console.error('Error uploading file:', error);
      errorAlertVisible(true);
      setTimeout(() => {
        errorAlertVisible(false);
      }, 2000); 
    }
  };

  return (
    <div className='flex flex-col justify-center'>
      <label htmlFor="file-upload" className={`px-4 py-2 rounded-md shadow-lg cursor-pointer bg-[#428DFF] hover:bg-[#0040BC] duration-300 mt-4 mx-5 text-center text-white`}>+ Add File</label>
      <input 
          id="file-upload"
          type="file" 
          className="hidden"
          onChange={handleFileUpload} 
          accept=".docx,.pdf,.xlsx"
      />
      {/*<button className='mt-2 py-2 px-4 mx-5 border-2 border-gray-300 rounded-md'> + New folder</button>*/}
    </div>
  );
};

export default FileUpload;