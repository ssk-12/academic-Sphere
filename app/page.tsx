import DefButton from "./components/DefButton";

export default function Home() {
  return (
    <div className="bg-[#030712]  flex flex-col justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center h-full">
        <div className=" text-white">LOC-BASED ATTENDANCE </div>
        <div className="m-4">
          <img src="https://media4.giphy.com/media/xUNd9IzpMK1BpfoyDS/200w.gif?cid=6c09b952h14fc3h24d02nlo5pfi6paa9dzwobv4v8oiszvo9&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
        </div>
        <div>
          <DefButton href="/home" text={"Explore now ↗️"}/>
        </div>
      </div>
    </div>
  );
}
