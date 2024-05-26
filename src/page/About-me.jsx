
const PDF_FILE = 'http://localhost:5173/my_Cv.pdf';

const Aboutme = () => {

    const downloadFile = (url) => {
        const filename = url.split("/").pop();
        const atag = document.createElement("a");
        atag.href = url;
        atag.setAttribute("download", filename);
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
    };


  return (
    <div className="bg-[#212529] w-full flex items-center flex-col relative font-poppins">
      <div className="relative mb-5 py-7">
        <h1 className="font-bold text-7xl text-[#353535]">ABOUT ME</h1>
        <h3 className="left-16 absolute top-12 text-4xl">Know Me More</h3>
      </div>
      <div className="flex justify-between py-12 pl-40 gap-7 w-[80vw]  ">
        <div className="w-[50vw] flex gap-5 flex-col text-[18px]">
          <h2 className=" text-4xl font-semibold">
            I'm&nbsp;
            <span className="text-[#7D8C3B]">Solange~D~Ihirwe,&nbsp;</span>a
            front end developer
          </h2>
          <p className="text-gray-400">
            I'm passionate about using interactive user interfaces to create
            engaging and strengthen a company's brand image.
          </p>
          <p className="text-gray-400">
            I'm always eager to collaborate on projects that challenge me to
            create new and engaging user experiences. Do you have an interactive
            idea in mind?
          </p>
        </div>
        <div className="w-[20vw] flex gap-4 flex-col text-md text-gray-200 items-start">
          <div className="flex py-2 border-b border-gray-500">
            <label htmlFor="name">Name: </label>
            <p>&nbsp;&nbsp;Solange DUHIMBAZE Ihirwe</p>
          </div>
          <div className="flex py-2 border-b border-gray-500">
            <label htmlFor="email">Email: </label>
            <p className="text-[#7D8C3B] font-medium">
              &nbsp;&nbsp;solangeduhimbazeihirwe@gmail.com
            </p>
          </div>
          <div className="flex py-2 border-b border-gray-500">
            <label htmlFor="from">From: </label>
            <p>&nbsp;&nbsp;Kigali, Rwanda</p>
          </div>
          <button
            onClick={downloadFile(PDF_FILE)}
            className="px-6 py-3 bg-[#7D8C3B] text-xl font-[500] rounded-3xl mt-4"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutme
