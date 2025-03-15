interface TeacherCardProps {
    imgUrl : string,
    name : string,
    subject : string,
    qualification : string
}

export const TeacherCard = ({imgUrl,name,subject, qualification} : TeacherCardProps) => {
    return <div className="relative rounded-lg overflow-clip h-fit w-[300px]">
        <div className="absolute -z-10 w-full h-full bg-black opacity-20" />
        <div className={`h-fit`} >
            <img className="h-64 w-full object-top object-cover" src={imgUrl} alt="" />
            <div className="text-xl w-full text-center mt-2">{name}</div>
            <div className="text-sm text-center text-gray-300">{subject}</div>
            <div className="py-2 text-sm px-4 text-justify text-gray-300">{qualification}</div>
        </div>
    </div>
}