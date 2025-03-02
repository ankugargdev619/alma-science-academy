
export const Hero = () =>{
    return  <div className="flex flex-col md:flex-row md:h-[100vh] lg:h-[60vh] md:max-h-[450px] items-start md:items-end text-foreground">
        <div className="flex flex-col gap-6 items-start justify-end md:w-[50%]">
            <div className="text-5xl md:text-6xl font-bold">
                Explore, Question and Discover!
            </div>
            <div className="text-balance font-semibold text-xl">
                Every discovery begins with a spark of wonder and imagination
                Empowering curious minds to question, explore, and innovate
                There are no limits to possibilities
            </div>
            <button className="bg-background py-2 px-6 rounded-xl">Join Now</button>
        </div>
        <div className="h-full -z-10">
            <img src="./space-rocket.png" />
        </div>
    </div>
}