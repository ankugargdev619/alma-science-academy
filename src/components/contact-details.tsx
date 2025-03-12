
interface ContactContainerProps {
    title : string,
    notice : string,
    contact : string
}

export const ContactDetails = () => {
    return <div className="z-20 w-full md:w-1/2 text-left p-2 md:p-10">
            <div className="text-xl my-4">Your can reach out to us for any queries</div>
            <ContactContainer title="Call Us" notice="Call our team Mon-Fro 8am to 5 pm" contact="+91 9876543210" />
            <ContactContainer title="Email Us" notice="Email our team and we will respond to you withnin 24 hours" contact="test@gmail.com" />
            <ContactContainer title="Visit Us" notice="Visit us from Mon to Fri between 8am to 5pm" contact="Test Address" />
        </div>
}

const ContactContainer = ({title,notice,contact} : ContactContainerProps) => {
    return <div className="my-4">
        <div className="text-lg my-[1px]">{title}</div>
        <div>{notice}</div>
        <div>{contact}</div>
    </div>
}