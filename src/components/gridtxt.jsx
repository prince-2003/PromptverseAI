function Text({ head, para }) {
    return (
      <div className=" card 2 hover:bg-[#0E0E0E] rounded-lg p-6 text-white text-start font-[500]">
        {head} <br />
        <span className="mt-4 font-light text-gray-400">{para}</span>
      </div>
    );
  }

  export default Text;