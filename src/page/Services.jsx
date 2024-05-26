import { FaDesktop } from "react-icons/fa6";
import { FaPencilRuler } from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";

const Services = () => {
  return (
    <div className="relative bg-[#343a40] flex items-center flex-col w-full">
      <div className="relative mb-5 py-7">
        <h1 className="font-bold text-7xl text-[#4a4a4a]">SEVICES</h1>
        <h3 className="left-16 absolute top-12 text-4xl">What I Do</h3>
      </div>
      <div>
        <div className="flex gap-12 w-[80vw] pl-28 py-7 text-[15px]">
          <BoxWrapper>
            <FaDesktop fontSize={32} className="text-[#7D8C3B]" />
            <h2>Web Design</h2>
            <p className="text-gray-400">
              I craft user centered web experiences that are intuitive,
              engaging, and visually appealing. My focus is on creating
              attracting user interface.
            </p>
          </BoxWrapper>

          <BoxWrapper>
            <FaPencilRuler fontSize={32} className="text-[#7D8C3B]" />
            <h2>UI/UX Design</h2>
            <p className="text-gray-400">
              I leverage my expertise in UI/UX design to craft intuitive
              interfaces. I prioritize user research and usability testing to
              ensure a seamless user experience across all devices. pen_spark
            </p>
          </BoxWrapper>

          <BoxWrapper>
            <GrShieldSecurity fontSize={32} className="text-[#7D8C3B]" />
            <h2>Cyber Security</h2>
            <p className="text-gray-400">
              "I'm your trusted cyber security shield, protecting your valuable
              data With my expertise, I safeguard your digital assets and
              empower your organization to navigate the complex world of cyber
              security
            </p>
          </BoxWrapper>
        </div>
      </div>
    </div>
  );
};

export default Services;

const BoxWrapper = ({ children }) => {
  return (
    <div className="flex gap-3 flex-col items-center w-1/3 justify-center border p-7 rounded-3xl">
      {children}
    </div>
  );
};
