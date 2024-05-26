import React from 'react'

const Resume = () => {
  return (
    <div className="bg-[#212529] w-full flex items-center flex-col relative font-poppins">
      <div className="relative mb-5 py-7">
        <h1 className="font-bold text-7xl text-[#353535]">SUMMARY</h1>
        <h3 className="left-24 absolute top-12 text-4xl">Resume</h3>
      </div>
      <div className="w-[80vw] pl-28 py-7 flex flex-col">
        <h2 className="p-4 text-2xl font-medium">My Education</h2>
        <div className="flex flex-wrap gap-9 items-center">
          <ResumeBox>
            <p className="w-[6rem] bg-[#7D8C3B] text-center rounded-xl text-[14px]">
              2015-2021
            </p>
            <h2>High School</h2>
            <h3 className="text-[#7D8C3B] font-medium">
              GS.St Aloys Rwamagana
            </h3>
            <p className="text-gray-400">
              Recent graduate with a strong foundation in science and
              mathematics. Skilled in problem-solving, data analysis, and
              applying scientific principles.
            </p>
          </ResumeBox>

          <ResumeBox>
            <p className="w-[8rem] bg-[#7D8C3B] text-center rounded-xl text-[14px]">
              2022-present
            </p>
            <h2>Bachelor Degree</h2>
            <h3 className="text-[#7D8C3B] font-medium">University Of Rwanda</h3>
            <p className="text-gray-400">
              Bachelor of Science in Information Systems (Level 2) graduate with
              a strong understanding of IT infrastructure, networking, and
              database management.
            </p>
          </ResumeBox>

          <ResumeBox>
            <p className="w-[8rem] bg-[#7D8C3B] text-center rounded-xl text-[14px]">
              2024-present
            </p>
            <h2>Front End Development</h2>
            <h3 className="text-[#7D8C3B] font-medium">SheCanCode Bootcamp</h3>
            <p className="text-gray-400">
              Passionate about creating beautiful and functional web
              experiences. Currently at the SheCanCode Bootcamp, diving deep
              into front-end development.
            </p>
          </ResumeBox>

          <ResumeBox>
            <p className="w-[8rem] bg-[#7D8C3B] text-center rounded-xl text-[14px]">
              2024-present
            </p>
            <h2>Full Stack Development</h2>
            <h3 className="text-[#7D8C3B] font-medium">
              Andela technical Leadership Program
            </h3>
            <p className="text-gray-400">
              Accelerating my software development journey through Andela's
              Technical Leadership Program. Gearing up to become a world-class
              full-stack developer.
            </p>
          </ResumeBox>
        </div>
      </div>
      <div className="flex flex-col w-[80vw] pl-32">
        <h2 className="text-2xl font-medium">My Skills</h2>
        <div className="w-full flex flex-wrap gap-9 py-4">
          <div className="w-[47%]">
            <div className="flex justify-between py-3">
              <p>Web design</p>
              <p>60%</p>
            </div>
            <div className="w-full bg-black h-3 rounded-2xl">
              <div className="w-[60%] h-3 bg-[#7D8C3B] rounded-l-2xl"></div>
            </div>
          </div>

          <div className="w-[47%]">
            <div className="flex justify-between py-3">
              <p>JavaScript</p>
              <p>70%</p>
            </div>
            <div className="w-full bg-black h-3 rounded-2xl">
              <div className="w-[70%] h-3 bg-[#7D8C3B] rounded-l-2xl"></div>
            </div>
          </div>

          <div className="w-[47%]">
            <div className="flex justify-between py-3">
              <p>React Js</p>
              <p>65%</p>
            </div>
            <div className="w-full bg-black h-3 rounded-2xl">
              <div className="w-[65%] h-3 bg-[#7D8C3B] rounded-l-2xl"></div>
            </div>
          </div>

          <div className="w-[47%]">
            <div className="flex justify-between py-3">
              <p>HTML/CSS</p>
              <p>90%</p>
            </div>
            <div className="w-full bg-black h-3 rounded-2xl">
              <div className="w-[90%] h-3 bg-[#7D8C3B] rounded-l-2xl"></div>
            </div>
          </div>

          <div className="w-[47%]">
            <div className="flex justify-between py-3">
              <p>Tailwind CSS</p>
              <p>80%</p>
            </div>
            <div className="w-full bg-black h-3 rounded-2xl">
              <div className="w-[80%] h-3 bg-[#7D8C3B] rounded-l-2xl"></div>
            </div>
          </div>

          <div className="w-[47%]">
            <div className="flex justify-between py-3">
              <p>Node Js</p>
              <p>60%</p>
            </div>
            <div className="w-full bg-black h-3 rounded-2xl">
              <div className="w-[60%] h-3 bg-[#7D8C3B] rounded-l-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

const ResumeBox = ({children})=>{
  return <div className="w-[47%] flex flex-col justify-center p-7 gap-3 bg-black rounded-3xl">{children}</div>
}
