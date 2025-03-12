

export default function AboutUs (){
    return <div className="w-full text-center rounded-lg overflow-hidden">
            <div className="text-4xl my-10 text-center">About Us</div>
            <div className="relative backdrop-blur-lg rounded-lg  w-full overflow-hidden">
                <div className="absolute w-full h-full rounded-lg  bg-black opacity-20" />
                <div className="w-full h-full p-5 md:p-10">
                    <div className="text-justify text-xl">
                        <span className="text-4xl">W</span>e are dedicated to hands-on learning focuses on engaging students through interactive activities rather than passive memorization. 
                        We believe that the best way to understand any concepts is by performing experiments, solving real-world problems, and applying knowledge in practical scenarios. 
                        Instead of just reading about Newton’s laws, students build and test their own simple experiments. <br/>
                        We also emphasize project-based learning, where students are encouraged in designing and executing their solutions to real life problems.
                        By making learning an active process, the academy nurtures curiosity and problem-solving skills, preparing students not just for careers in science and technology but in life as well. With expert mentors we ensures that students not only grasp scientific theories but also develop useful skills.
                    </div>
                </div>
            </div>
        </div>
}