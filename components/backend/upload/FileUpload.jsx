import { ref, uploadBytes } from "firebase/storage";
import { storage } from '../../../src/app/firebaseConfig';

const FileUpload = ({ successAlertVisible, errorAlertVisible }) => {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, file.name);

    try {
      await uploadBytes(storageRef, file);
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
      <label htmlFor="file-upload" className={`px-4 py-2 rounded-md shadow-lg cursor-pointer bg-purple-500 text-[#fffddd] hover:bg-purple-700 duration-300 mx-5 text-center `}>+ Add File</label>
      <input 
          id="file-upload"
          type="file" 
          className="hidden"
          onChange={handleFileUpload} 
          accept=".docx,.pdf,.xlsx"
      />
    </div>
  );
};

export default FileUpload;
