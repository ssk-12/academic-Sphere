"use client"
import { enrollClass } from '@/app/lib/actions/enrollClasss';
import React, { useState } from 'react';

function Page(): JSX.Element {
    const [classCode, setClassCode] = useState<string>("");
    const [response, setResponse] = useState("")

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        const res = await enrollClass({class_id:classCode})
        if(res){
            setResponse("success")
        }
        
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setClassCode(event.target.value); 
    };

    return (
        <div className='flex flex-col justify-center items-center p-24 gap-4'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-1'>
                <label htmlFor="classCode"><b>Class Code</b> <br />
                    <input
                        className='p-3 rounded-2xl mt-2'
                        type="text"
                        id="classCode"
                        name="classCode"
                        placeholder='Enter class code'
                        value={classCode}
                        onChange={handleChange}
                    />
                </label><br />
                <button type="submit" className="mt-4">Submit</button>
            </form>
            {(response && <div>
                {response}
            </div> )}
        </div>
    );
}

export default Page;
