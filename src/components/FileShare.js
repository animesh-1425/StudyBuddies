import { useState, useEffect, useRef } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from './firebasestorage';
import { v4 } from "uuid";
import '../assets/css/class.css';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './LogoutButton';

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [fileInfo, setFileInfo] = useState([]);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true); // New loading state
  const { user, isAuthenticated, isLoading } = useAuth0();
  const filesListRef = ref(storage, "files/");
  const fileInputRef = useRef(null); // Add a reference to the file input

  const uploadFile = () => {
    if (fileUpload == null) return;
    setUrl("Getting file link..");
    const fileRef = ref(storage, `files/${fileUpload.name}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUrl(url);
        const newFileInfo = { name: fileUpload.name, url };
        const updatedFileInfo = [...fileInfo, newFileInfo];
        setFileInfo(updatedFileInfo);

        // Store the updated file info in local storage
        localStorage.setItem("fileInfo", JSON.stringify(updatedFileInfo));

        // Clear the file input field
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        // Clear the file upload state
        setFileUpload(null);
      });
    });
  };

  useEffect(() => {
    setLoading(true);

    listAll(filesListRef)
      .then(async (response) => {
        const newFiles = [];

        for (const item of response.items) {
          const url = await getDownloadURL(item);
          newFiles.push({ name: item.name, url });
        }

        setFileInfo(newFiles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Load file info from local storage on initial mount
    const storedFileInfo = JSON.parse(localStorage.getItem("fileInfo"));
    if (storedFileInfo) {
      setFileInfo(storedFileInfo);
    }
  }, []);

  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-lg">
        <div className="container d-flex flex-row">
          <a className="navbar-brand" href="http://localhost:3000/">StudyBuddies</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav m-auto my-2 my-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" href="/classes">StudyRoom</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/todos">Study Goals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/whiteboard" >
                  Whiteboard
                </a>
               
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ide">Code Editor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/files">Files </a>
              </li>
              {isAuthenticated?<LogoutButton/>:null}
            </ul>
           
          </div>
        </div>
      </nav>
    
    <div className="container-fluid d-flex flex-column align-items-center" 
    style={{background:'linear-gradient( 83.2deg,  rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3% )',height:'100vh'}}>
      <h1 style={{color:'white',marginTop:'7%'}}>Your Attachment Area</h1>
      <br></br>
      <input
        type="file"
        ref={fileInputRef} // Attach the reference to the input field
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
        className="styled-file-input"
      />
      <br></br>
      <button id="upload" onClick={uploadFile} >Upload File</button>
      <br />
      <p>
        <a href={url} style={{color:'white',textDecoration:'none'}}>{url==="Getting file link.." ? (
          <>
            <div className="wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
            </div>
          </>
        ) : null}</a>
      </p>
      <ol style={{textAlign:'center'}}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          fileInfo.map((file, index) => (
            <li key={index}>
              {file.name.endsWith(".jpg") || file.name.endsWith(".jpeg") || file.name.endsWith(".png") ||
               file.name.endsWith(".docx") || file.name.endsWith(".ai") ? (
                <a href={file.url} target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
                 {file.name}
                </a>
              ) : (
                <a href={file.url} target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
                  {file.name}
                </a>
              )}
            </li>
          ))
        )}
      </ol>
    </div>
    </div>
  );
}

export default App;
