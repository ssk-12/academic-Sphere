"use client"
import React, { FormEvent, useState } from 'react';
import { createClass } from '../lib/actions/createClass';

function CreateClass() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [response, setResponse] = useState("")

    
    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();  
        const res = await createClass({name:name,subject:subject})
        if(res){
            setResponse("success")
        }
        
    };

    return (
        <div className='flex flex-col justify-center items-center gap-2'>
            <form onSubmit={handleSubmit} className='bg-[#d6dff1] rounded-2xl p-12 flex flex-col gap-3'>
                <div>
                    <label htmlFor="classname"><b>Class Name</b> <br />
                        <input 
                            id="classname" 
                            className="p-2 mt-1 rounded-xl" 
                            type="text" 
                            placeholder="Enter class name" 
                            name="classname" 
                            value={name}  
                            onChange={(e) => setName(e.target.value)}  
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor="subjectname"> <b>Subject Name</b> <br />
                        <input 
                            className='p-2 mt-1 rounded-xl' 
                            type="text" 
                            placeholder='Enter subject name' 
                            name='subjectname' 
                            id='subjectname' 
                            value={subject}  
                            onChange={(e) => setSubject(e.target.value)}  
                        />
                    </label>
                </div>

                <button type="submit" className="mt-3 p-2 bg-blue-500 text-white rounded-xl">Submit</button>
            </form>
            {(response && <div>
                {response}
            </div> )}
        </div>
    );
}

export default CreateClass;
