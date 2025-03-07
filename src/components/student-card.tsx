interface StudentCardProps {
    imgUrl : string,
    name : string,
    grade : string,
    achievement : string
}

export const StudentCard = ({imgUrl,name,grade,achievement} : StudentCardProps) => {
    return <div className="relative rounded-lg overflow-clip h-fit w-[300px]">
        <div className="absolute -z-10 w-full h-full bg-black opacity-20" />
        <div className={`h-fit`} >
            <img className="h-64 w-full object-top object-cover" src={imgUrl} alt="" />
            <div className="text-xl w-full text-center mt-2">{name}</div>
            <div className="text-sm text-center text-gray-300">Class : {grade}</div>
            <div className="py-2 text-sm px-4 text-justify text-gray-300">{achievement}</div>
        </div>
    </div>
}