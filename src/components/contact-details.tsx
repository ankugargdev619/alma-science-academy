interface ContactContainerProps {
    title : string,
    notice : string,
    contact : string
}

export const ContactDetails = () => {
    return <div className="w-1/2 text-left px-10">
            <ContactContainer title="Call Us" notice="Call our team Mon-Fro 8am to 5 pm" contact="+91 9876543210" />
            <ContactContainer title="Call Us" notice="Call our team Mon-Fro 8am to 5 pm" contact="+91 9876543210" />
            <div className="my-4">
                <div className="text-xl my-[1px]">Email Us</div>
                <div>Email our team and we will respond to you withnin 24 hours</div>
                <div>test@gmail.com</div>
            </div>
            <div className="my-4">
                <div className="text-xl my-[1px]">Visit Us</div>
                <div>Visit us from Mon to Fri between 8am to 5pm</div>
                <div>Test Address</div>
            </div>
        </div>
}

const ContactContainer = ({title,notice,contact} : ContactContainerProps) => {
    return <div className="my-4">
        <div className="text-xl my-[1px]">{title}</div>
        <div>{notice}</div>
        <div>{contact}</div>
    </div>
}