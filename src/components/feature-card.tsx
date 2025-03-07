interface FeatureCardProps {
    imgAlign : "left" | "right",
    imageUrl : string,
    title : string,
    description : string
}

export const FeatureCard = ({imgAlign,imageUrl, title , description} : FeatureCardProps)=>{
    return <div className="relative w-inherit rounded-2xl overflow-clip">
        <div className="absolute w-full h-full bg-black opacity-20" />
        <div className={`backdrop-blur-md block md:flex ${imgAlign=="right" ? "flex-row-reverse" : "" }`}>
            <img className="md:w-1/2 object-cover" src={imageUrl} />
            <div className="m-5 lg:m-10 lg:w-1/2">
                <div className="text-xl lg:text-3xl my-5 lg:my-10 text-left">{title}</div>
                <div className="text-lg text-left">{description}</div>
            </div>
        </div>
    </div>
}