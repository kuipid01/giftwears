"use client";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useRef, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import { Router } from "lucide-react";
const Page = () => {
  const storage = getStorage();
  const router = useRouter();
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleAddPost = async (e) => {
    e.preventDefault();

    if (
      !projectName ||
      !projectDesc ||
      !projectLink ||
      !imageFile ||
      !inputTags
    ) {
      alert("Fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const imgUrl = await startImageUpload();
      const projectTags = inputTags.split(",");

      const response = await axios.post(
        "https://devkuipid.onrender.com/project/",
        {
          projectLink,
          projectTitle: projectName,
          projectDescription: projectDesc,
          projectImage: imgUrl,
          projectTags,
        }
      );

      console.log(response);

      if (response) {
        alert("Project added");
        router.push("/");
      }
    } catch (error) {
      console.error("Error adding project:", error);
    } finally {
      setLoading(false);
    }
  };

  const startImageUpload = () => {
    return new Promise(async (resolve, reject) => {
      if (!imageFile) {
        reject("No image file selected");
        return;
      }

      const timestamp = new Date().getTime();
      const storageRef = ref(
        storage,
        `images/${timestamp}_${imageFile.name.replace(/\s/g, "")}`
      );

      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Error uploading image:", error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error("Error getting download URL:", error);
            reject(error);
          }
        }
      );
    });
  };

  const LoadingState = () => (
    <div
      className="w-full h-fit bg-dark min-h-screen
   flex justify-center items-center "
    >
      <div className="w-[100px] h-[100px] border border-light rounded-full animate-pulse"></div>
    </div>
  );

  if (loading) return <LoadingState />;

  return (
    <div className="w-full text-white flex bg-[#1c0523] h-screen p-5 items-center flex-col justify-center">
      <h1>Enter Project Details</h1>
      <form
        onSubmit={(e) => handleAddPost(e)}
        className="w-[90%]  md:w-[60%] gap-2 flex flex-col"
      >
        <div className="w-full">
          <input
            onChange={(e) => setProjectName(e.target.value)}
            type="text"
            className="border-b w-full border-gray-400 p-2 outline-none bg-transparent"
            placeholder="Enter Project Name"
          />
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setInputTags(e.target.value)}
            type="text"
            className="border-b w-full border-gray-400 p-2 outline-none bg-transparent"
            placeholder="Enter Tags Seperate with Commas"
          />
        </div>
        <div className="w-full">
          <input
            onChange={(e) => setProjectLink(e.target.value)}
            type="text"
            className="border-b w-full border-gray-400 p-2 outline-none bg-transparent"
            placeholder="Enter Project Link"
          />
        </div>
        <div className="w-full">
          <textarea
            onChange={(e) => setProjectDesc(e.target.value)}
            name="desc"
            className="border-b w-full  outline-none border-gray-400 p-2 bg-transparent"
            placeholder="Enter project description"
          ></textarea>
        </div>
        <div className="w-full">
          {/* <button
            onClick={handleButtonClick}
            className="border-b w-full cursor-pointer outline-none border-gray-400 p-2 bg-transparent"
          >
            Choose Image
          </button> */}
          <input
            onChange={(e) => setImageFile(e.target.files[0])}
            // className="hidden"
            type="file"
            name="file"
            id="file"
          />
        </div>
        <button
          // disabled={uploading}
          type="submit"
          className="border  mt-3 rounded-xl hover:bg-white transition-all hover:text-[#1c0523] hover:outline-none w-full 
          
           outline-none border-gray-400 p-2 bg-transparent"
        >
          add post
        </button>
      </form>
    </div>
  );
};

export default Page;
