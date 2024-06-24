

function Button({text } : {text: string}) {
  return (
    <button className="neno-button shadow-xl hover:shadow-cyan-800/50 border-2  hover:text-white hover:bg-[#ff19f3] border-[#ff19f3] rounded-lg py-4 px-8 uppercase relative overflow-hidden text-white mb-4">
    {text}
  </button>
  )
}

export default Button