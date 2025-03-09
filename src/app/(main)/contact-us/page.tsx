import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/ContactForm";


export default function ContactUs (){
    return <div className="w-full text-center rounded-lg overflow-hidden">
        <div className="text-4xl my-10 text-center">Contact Us</div>
        <div className="relative backdrop-blur-lg rounded-lg  w-full overflow-hidden">
            <div className="absolute w-full h-full rounded-lg  bg-black opacity-20" />
            <div className="w-full h-full flex justify-center p-10">
                <ContactForm />
                <ContactDetails />
            </div>
        </div>
    </div>
}