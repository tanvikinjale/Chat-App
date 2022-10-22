import React from "react";
import deletee from '../assets/delete.png' ;
// import { useEffect } from "react";
// import IdeaPost from "./IdeaPost";

function IdeaForm() {
  // const [input, setInput] = useState("");
  // const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   db.collection("ideaPost").onSnapshot((snapshot) =>(
  //     //  setPosts(
  //     //   snapshot.docs.map((doc) =>({
  //     //     id: doc.id,
  //     //     data: doc.data(),

  //     //   }))
  //      )
  //   )
  // },[]);

  // const sendPost = (e) => {
  //   e.preventDefault();

    // db.collection('ideaPosts').add({
    //   name: "tanvi",
    //   title: "idea",
    //   decsription: input,
    //   imgUrl: '',
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),

    // });
  // };

  // {
  //   posts.map(({ id, data: { name, title, description, gmail, imgUrl } }) => (
  //     <IdeaPost
  //       key={id}
  //       name={name}
  //       gmail={gmail}
  //       title={title}
  //       description={description}
  //       imgUrl={imgUrl}
  //     />
  //   ));
  // }

  return (
    <div className="bg-cover w-screen h-full bg-[url('https://i.ibb.co/Smq2X7B/background.png')] pb-5 ">
      <div classNameName="flex items-center justify-center p-12 ">
        <div className="p-8">
          <h1 className="text-2xl text-center font-semibold text-blue">
            It's not too late to write your own ideas{" "}
          </h1>
          <h1 className="text-2xl text-center font-bold text-redish">
            UPLOAD YOUR IDEAS NOW
          </h1>
        </div>
        <div className="mx-auto w-full max-w-[550px] p-4  border-[#D9D9D9] border-2 rounded-2xl">
          <form action="" method="POST">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Full Name"
                    className="w-full  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium text-[#7587A4] outline-none focus:border-blue focus:drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Idea Title"
                    className="w-full  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium text-[#7587A4] outline-none focus:border-blue focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 ">
                <div className="mb-5">
                  <input
                    
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Short Description"
                    className="w-full  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium text-[#7587A4] outline-none focus:border-blue focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div class="max-w-2xl mx-auto flex justify-center">
              <input
                class=" py-1 px-5
               block w-1/2 text-sm text-white border rounded-2xl cursor-pointer bg-[#CCD7F0] focus:outline-none  dark:bg-blue dark:placeholder-white"
                id="file_input"
                type="file"
              ></input>
            </div>
            <div className="mt-2 mb-4 flex justify-center">
              <div className="rounded-3xl bg-[#CCD7F0] flex flex-row space-x-4 py-1 px-5 text-center text-base font-semibold text-black outline-none hover:shadow-form ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-5 hover:stroke-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-5 hover:stroke-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg> */}
                <img
                           className="w-6 h-6 hover:stroke-2"
                           src={deletee}
                            alt="delete"
                        />
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-5 hover:stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Google Drive</title>
                  <path d="M12.01 1.485c-2.082 0-3.754.02-3.743.047.01.02 1.708 3.001 3.774 6.62l3.76 6.574h3.76c2.081 0 3.753-.02 3.742-.047-.005-.02-1.708-3.001-3.775-6.62l-3.76-6.574zm-4.76 1.73a789.828 789.861 0 0 0-3.63 6.319L0 15.868l1.89 3.298 1.885 3.297 3.62-6.335 3.618-6.33-1.88-3.287C8.1 4.704 7.255 3.22 7.25 3.214zm2.259 12.653-.203.348c-.114.198-.96 1.672-1.88 3.287a423.93 423.948 0 0 1-1.698 2.97c-.01.026 3.24.042 7.222.042h7.244l1.796-3.157c.992-1.734 1.85-3.23 1.906-3.323l.104-.167h-7.249z" />
                </svg>
              </div>
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="how"
                id="how"
                placeholder="How did the idea came in your mind?"
                className="w-full appearance-none  border-b-[0.2rem] rounded-md border-[#7587A4] bg-white py-3 px-6 text-base font-medium text-[#7587A4] outline-none focus:border-blue focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#7587A4]">
                What do you require to complete the idea?
              </label>
              <div className="flex items-center space-x-6 ">
                <div className="flex flex-wrap items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton1"
                    className="h-5 w-5"
                  />
                  <label
                    for="checkboxButton1"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    Guidance
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton2"
                    className="h-5 w-5"
                  />
                  <label
                    for="checkboxButton2"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    Support
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton1"
                    className="h-5 w-5"
                  />
                  <label
                    for="checkboxButton1"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    Tools
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox1"
                    id="checkboxButton1"
                    className="h-5 w-5"
                  />
                  <label
                    for="checkboxButton1"
                    className="pl-3 text-base font-medium text-[#7587A4]"
                  >
                    People
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex justify-center">
              <button
              
                className="rounded-3xl bg-blue py-3 px-10 text-center text-base font-semibold text-white outline-none hover:bg-[#00008b] hover:shadow-lg focus:bg-[#00008b] focus: shadow-md "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      
      </div>
    </div>
  );
}

export default IdeaForm;
