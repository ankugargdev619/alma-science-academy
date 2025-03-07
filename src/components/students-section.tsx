import { StudentCard } from "./student-card"

export const StudentsSection = () => {
    return <div className="my-10">
        <div className="text-4xl my-10 text-center" >Success Stories</div>
        <div className="my-5 mg:my-10 flex flex-wrap justify-center gap-10">
            <StudentCard name="Mayank Kumar" grade="X" achievement="Scored outstanding 95.67% in exams, showcasing dedication and hard work. This remarkable performance reflects strong academic excellence and a bright future ahead."  imgUrl="./topper-one.jpeg" />
            <StudentCard name="Amrita Sharma" grade="XII" achievement="Scored outstanding 95.67% in exams, showcasing dedication and hard work. This remarkable performance reflects strong academic excellence and a bright future ahead." imgUrl="./topper-two.jpeg" />
            <StudentCard name="Ishan Singh" grade="XII" achievement="Scored outstanding 95.67% in exams, showcasing dedication and hard work. This remarkable performance reflects strong academic excellence and a bright future ahead." imgUrl="./topper-three.jpeg" />
        </div>
    </div>
}