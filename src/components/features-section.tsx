import { FeatureCard } from "./feature-card"

export const Features = ()=>{
    return <div className="text-center my-5 md:my-10">
        <div className="text-4xl my-10" >Maximize your potential</div>
        <div className="flex flex-col gap-10">
            <FeatureCard 
                title="Learn by doing activities and remember concepts" 
                description="Engage in interactive activities designed to make learning fun and effective. Solve challenges, complete hands-on exercises, and apply concepts in real-world scenarios. This feature encourages active participation, helping learners retain knowledge better while developing practical skills in an immersive and engaging way." 
                imgAlign="right" imageUrl="./science-activities.png" />
            <FeatureCard title="Experienced Teachers, Exceptional Learning" description="Through interactive activities, real-world examples, and innovative teaching strategies, professional educators make learning more interesting and relatable. With years of expertise, they not only teach but mentor, guiding students toward confidence, critical thinking, and a lifelong love for learning." imgAlign="left" imageUrl="./professional-teacher.png" />
        </div>
    </div>
}