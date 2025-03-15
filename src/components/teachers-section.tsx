import { TeacherCard } from "./teachers-card" 

export const StudentsSection = () => {
    return <div className="my-10">
        <div className="text-4xl my-10 text-center" >Success Stories</div>
        <div className="my-5 mg:my-10 flex flex-wrap justify-center gap-10">
            <TeacherCard name="Mayank Kumar" subject="X" qualification="Scored outstanding 95.67% in exams, showcasing dedication and hard work. This remarkable performance reflects strong academic excellence and a bright future ahead."  imgUrl="./topper-one.jpeg" />
            <TeacherCard name="Amrita Sharma" subject="XII" qualification="Scored outstanding 95.67% in exams, showcasing dedication and hard work. This remarkable performance reflects strong academic excellence and a bright future ahead." imgUrl="./topper-two.jpeg" />
            <TeacherCard name="Ishan Singh" subject="XII" qualification="Scored outstanding 95.67% in exams, showcasing dedication and hard work. This remarkable performance reflects strong academic excellence and a bright future ahead." imgUrl="./topper-three.jpeg" />
        </div>
    </div>
}