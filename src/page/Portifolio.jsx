import React from 'react'

const Portifolio = () => {
  return (
    <div className="relative bg-[#343a40] flex items-center flex-col w-full">
      <div className="relative mb-5 py-7">
        <h1 className="font-bold text-7xl text-[#4a4a4a]">PORTFOLIO</h1>
        <h3 className="left-24 absolute top-12 text-4xl">My Work</h3>
      </div>
      <div className="w-[80vw] pl-32 flex flex-wrap gap-7">
        <div className="w-[30%] mb-20 border rounded-b-3xl">
          <img
            src="myBrand.jpg"
            alt="my-brand portfolio"
            className="w-full h-[40vh] brightness-60"
          />
          <h2 className="p-4">Design</h2>
          <h3 className="px-4 pb-2">My brand Website</h3>
        </div>

        <div className="w-[30%] mb-20 border rounded-b-3xl">
          <img
            src="TailwindPort.jpg"
            alt="my-brand portfolio"
            className="w-full h-[40vh] brightness-60"
          />
          <h2 className="p-4">Design</h2>
          <h3 className="px-4 pb-2">Tailwind project</h3>
        </div>

        <div className="w-[30%] mb-20 border rounded-b-3xl">
          <img
            src="RockPaper.jpg"
            alt="my-brand portfolio"
            className="w-full h-[40vh] brightness-60"
          />
          <h2 className="p-4">Game</h2>
          <h3 className="px-4 pb-2">Rock, Paper, Scissor</h3>
        </div>

        <div className="w-[30%] mb-20 border rounded-b-3xl">
          <img
            src="RandomEmoji.jpg"
            alt="my-brand portfolio"
            className="w-full h-[40vh] brightness-60"
          />
          <h2 className="p-4">Game</h2>
          <h3 className="px-4 pb-2">Generate Random Emoji</h3>
        </div>

        <div className="w-[30%] mb-20 border rounded-b-3xl">
          <img
            src="diceRoller.jpg"
            alt="my-brand portfolio"
            className="w-full h-[40vh] brightness-60"
          />
          <h2 className="p-4">Game</h2>
          <h3 className="px-4 pb-2">Dice</h3>
        </div>

        <div className="w-[30%] mb-20 border rounded-b-3xl">
          <img
            src="ageCalculator.jpg"
            alt="my-brand portfolio"
            className="w-full h-[40vh] brightness-60"
          />
          <h2 className="p-4">Design</h2>
          <h3 className="px-4 pb-2">Age Calculator</h3>
        </div>
      </div>
    </div>
  );
}

export default Portifolio
