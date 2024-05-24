import { Link } from "react-router-dom"
const LandingPage = () => {
  return (
    <div className="bg-[url('./background.jpg')] bg-cover w-full h-[100vh] flex flex-col gap-5 text-xl items-center justify-center font-bold">
      <h2 className="text-4xl">Welcome</h2>
      <p className="text-5xl">I am a Freelancer</p>
      <p className="text-2xl text-gray-400">based in Kigali, Rwanda</p>
      <Link className="py-2.5 px-5 border-[#7D8C3B] border-[2px] font-semibold text-[#7D8C3B] rounded-3xl">
        Hire me
      </Link>
    </div>
  );
}

export default LandingPage
