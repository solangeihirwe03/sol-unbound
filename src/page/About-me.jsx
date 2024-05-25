import React from 'react'

const Aboutme = () => {
  return (
    <div className="bg-[#101801] w-full flex justify-center items-center flex-col relative">
      <div className="relative">
        <h1 className="font-bold text-7xl text-[#353535]">ABOUT ME</h1>
        <h3 className="left-16 absolute top-6 text-4xl">Know Me More</h3>
      </div>
      <div className="flex justify-between py-12 pl-40 gap-4 w-[70vw] text-lg">
        <div>
          <h2 className=" text-4xl font-semibold">
            I'm &nbsp;
            <span className="text-[#7D8C3B]">
              Solange DUHIMBAZE Ihirwe,&nbsp;
            </span>
            a front end developer
          </h2>
          <p>
            I'm passionate about using interactive user interfaces to create
            engaging and strengthen a company's brand image.
          </p>
          <p>
            I'm always eager to collaborate on projects that challenge me to
            create new and engaging user experiences. Do you have an interactive
            idea in mind?
          </p>
        </div>
        <div>
          <div>
            <label htmlFor="name">Name: </label>
            <p>Solange DUHIMBAZE Ihirwe</p>
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <p>solangeduhimbazeihirwe@gmail.com</p>
          </div>
          <div>
            <label htmlFor="from">From: </label>
            <p>Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme
