import React,{useState} from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import {  useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function TeacherEditProfile() {

    const {id} = useParams("");

    const [username,setUserName] = useState("");
    const [fullname,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [location,setLocation] = useState("");
    const [description,setDescription] = useState("");
    const [experience,setExperience] = useState("");
    const [achievements,setAchievements] = useState("");
    const [file,setFile] = useState("");

    const addTeacherData = async(e) => {
        e.preventDeafult();

        // const bodyData = {
        //     username:username,
        //     fullname:fullname,
        //     email:email,
        //     location:location,
        //     description:description,
        //     experience:experience,
        //     achievements:achievements,
        //     file:file
        // }

        const formData = new FormData();
        formData.append("photo",file);
        formData.append("username",username);
        formData.append("fullname",fullname);
        formData.append("email",email);
        formData.append("location",location);
        formData.append("description",description);
        formData.append("experience",experience);
        formData.append("achievements",achievements);

        // const config = {
        //     headers:{
        //         "Content-Type":"multipart/form-data" 
        //     }
        // }

        try{
            
            const res = await fetch(`/teachereditprofile/${id}`,{
                method: "PATCH",
                headers:{
                    // "Content-Type": "application/json"
                    "Content-Type":"multipart/form-data"
                },
                body: formData,
            })

            const data = await res.json();
            if(res.status === 422 || !data){
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            }else{
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });
            }



        }catch(error){
            console.log("Error from frontend side" + error.message);
        }

    }


  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    type="text"
                    value = {username}
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    onChange = {(e)=>setUserName(e.target.value)}
                  />
                </div>
              </div>



              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                FullName
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Enter Your Name/</span>
                  <input
                    type="text"
                    value = {fullname}
                    name="fullname"
                    id="fullname"
                    autoComplete="fullname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Mohit"
                    onChange = {(e)=>setFullName(e.target.value)}
                  />
                </div>
              </div>



              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Email/</span>
                  <input
                    type="email"
                    value = {email}
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="mohit2001@gmail.com"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
              </div>


              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">Location/</span>
                  <input
                    type="text"
                    value={location}
                    name="location"
                    id="location"
                    autoComplete="location"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="California, USA"
                    onChange={(e)=>setLocation(e.target.value)}
                  />
                </div>
              </div>


            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  value={description}
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={(e)=>setDescription(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


            
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Experience
              </label>
              <div className="mt-2">
                <textarea
                  id="experience"
                  value={experience}
                  name="experience"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={(e)=>setExperience(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Achievements
              </label>
              <div className="mt-2">
                <textarea
                  id="achievements"
                  value={achievements}
                  name="achievements"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={(e)=>setAchievements(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>


            {/* <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Profile Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e)=>setFile(e.target.files[0])} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900  ">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={addTeacherData}
        >
          Save
        </button>
      </div>
    </form>
  )
}