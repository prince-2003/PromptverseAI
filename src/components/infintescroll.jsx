import Textbox
 from "./textbox";
function Infinitescroll({ delay }) {
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="flex gap-2 animate-scroll-x"
          style={{ animationDelay: `${delay}ms` }}
        >
          <Textbox
            className={`relative transition-transform duration-300 transform group-hover:translate-y-0`}
            prompt="Promptverse AI is a powerful tool that can generate text based on your prompts"
            url="www.google.com"
          />
          <Textbox
            className={`relative transition-transform duration-300 transform group-hover:translate-y-0`}
            prompt="Promptverse AI is a powerful tool that can generate text based on your prompts"
            url="www.google.com"
          />
          <Textbox
            className={`relative transition-transform duration-300 transform group-hover:translate-y-0`}
            prompt="Promptverse AI is a powerful tool that can generate text based on your prompts"
            url="www.google.com"
          />
          <Textbox
            className={`relative transition-transform duration-300 transform group-hover:translate-y-0`}
            prompt="Promptverse AI is a powerful tool that can generate text based on your prompts"
            url="www.google.com"
          />
        </div>
      </div>
    );
  }
   export default Infinitescroll;