function ButtonSecondary({ innerHtml }) {
    return (
      <button
        className="bg-white flex gap-2 items-center justify-between text-black md:text-[.7rem] lg:text-[1rem] px-5 py-2 border rounded-[55px] group transition-all duration-300 ease-in-out  overflow-hidden"
      >
        
        <span className="transition-all duration-300 ease-in-out">
          {innerHtml}
        </span>
  
       
        <svg
          className="absolute right-4 group-hover:right-0 opacity-0 group-hover:relative group-hover:opacity-100 group-hover:translate-x-0 translate-x-[10px] transition-all duration-700 ease-in-out"
          style={{ width: '0.9rem', height: '0.9rem' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    );
  }
  
  
  
  export default ButtonSecondary;