function ButtonPrimary({innerHtml}) {
  return <button className="bg-white text-black md:text-[.7rem] lg:text-[1rem] px-5 py-2 border rounded-[55px] hover:bg-transparent hover:border hover:text-white transition duration-300">
  {innerHtml}
</button>
}

export default ButtonPrimary;