function Textbox({prompt, url}){
    return (
        <div className=" inline-flex bg-[#0E0E0E] flex-col items-start gap-1 px-2 py-2 md:px-4 md:py-4">
        <div className="text-white  text-[.7rem] md:text-[1rem] font-[400] flex gap-1 leading-2">{prompt} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18" fill="none">
  <path d="M3.17966 16.7504L1.35297 14.9237L12.3131 3.96359L2.26631 3.96359L2.26631 1.36969H16.7337V15.8371L14.1398 15.8371L14.1398 5.79028L3.17966 16.7504Z" fill="white" stroke="#0E0E0E" strokeWidth="1.2"/>
</svg> </div>
        <a href="#" className="text-blue-600 text-[.7rem] lg:text-[1rem] font-[500] hover:text-gray-300">{url}</a>
        </div>
    )
}

export default Textbox;