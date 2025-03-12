"use client"
import { Button } from "@/ui/button"
import { FormEvent, useRef, useState } from "react"

export const ContactForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const [formData,setFormData] = useState({
        name : "",
        phone : "",
        question : "",
        message : ""
    })

    async function handleFormSubmit (e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormData({...formData,message : ""})
        // Check that name is not blank
        if(formData.name == ""){
            setFormData({...formData,message : "Please enter your name"})
            nameRef.current?.focus();
            return
        }
        const phoneRegEx = /^\d{10}$/;
        console.log(phoneRegEx.test(formData.phone));
        if(!phoneRegEx.test(formData.phone)){
            setFormData({...formData, message : "Set a valid contact number containing 10 digits"})
            phoneRef.current?.focus()
            return
        }

        const payload = {
            name : formData.name,
            phone : formData.phone,
            question : formData.question
        }

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_SHEET_API as string,{
                redirect : "follow",
                method : "POST",
                headers: {
                    "Content-Type" : "text/plain;charset=utf-8"
                },
                body : JSON.stringify(payload)
            })

            const result = await response.json();
            if(result.status === "Success") {
                setFormData({...formData,message : `The form has been submitted successfully!` , name : "" , phone : "" , question : ""});
            } else {
                setFormData({...formData,message : `There was an error submitting the form, please try again in some time`});    
            }

        } catch(error) {
            console.log(error);
            setFormData({...formData,message : `There was an error submitting the form, please try again in some time`});
        }

        return
    }
    return <div className="relative z-20 w-full md:w-1/2 text-left border-b-2 md:border-b-0 md:border-r-2 border-gray-400 p-2 md:p-10">
        <div className="text-xl my-4">
            Submit your details, we will reach out to you in 24 hours
            <div className="text-sm">* indicates required fields</div>
        </div>
        
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="name">Your Name*</label> 
                <input
                    value={formData.name}
                    ref={nameRef}
                    onChange={(e)=>{
                        setFormData({...formData, name : e.target.value})
                    }}
                    id="name" type="text" className="my-2 w-full bg-transparent border-gray-400 border-2 rounded-lg p-2" placeholder="Full Name" />
            </div>
            <div>
                <label htmlFor="number" >Your Phone Number*</label>
                <input
                    value={formData.phone}
                    ref={phoneRef}
                    onChange={(e) => {
                        setFormData({...formData, phone : e.target.value})
                    }}
                    id="number" type="text" className="my-2 w-full bg-transparent border-gray-400 border-2 rounded-lg p-2" placeholder="Phone Number" />
            </div>
            <div>
                <label htmlFor="question">Inquiry Details</label>
                <textarea 
                    value={formData.question}
                    onChange={(e)=>{
                        setFormData({...formData, question : e.target.value})
                    }}
                    id="question" className="my-2 w-full rounded-lg p-2 border-gray-400 bg-transparent border-2" placeholder="Provide details you want to inquire about" />
            </div>
            <div className="my-2">{formData.message}</div>
            <Button type="submit" label="Submit" />
        </form>
    </div>
}