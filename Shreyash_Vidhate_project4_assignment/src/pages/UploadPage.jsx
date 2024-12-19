
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebase-config";
import { validateVideoUploadForm } from "../utils/formValidation";
import "../styles/UploadPage.css";

function UploadPage() {
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (validateVideoUploadForm(videoFile)) {
      const storageRef = ref(storage, `videos/${videoFile.name}`);
      await uploadBytes(storageRef, videoFile);
      const videoURL = await getDownloadURL(storageRef);
      console.log("Uploaded video:", videoURL);
    } else {
      setError("Invalid file or form.");
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload Video</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideoFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadPage;
