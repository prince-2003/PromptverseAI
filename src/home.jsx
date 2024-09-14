import Infinitescroll from "./components/infintescroll";

function Home() {
    return (
        <>
        <div className="flex flex-col gap-4">
        <Infinitescroll delay={0} />
        <Infinitescroll delay={400} />
        <Infinitescroll delay={0} />
        </div>
        </>
      );
}

export default Home; 