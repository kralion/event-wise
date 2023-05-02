import React from "react";
import AIICon from "../assets/ai-icon.png";
import microphoneIcon from "../assets/microphone.png";

function AIInput() {
	return (
		<div className="flex gap-5  ml-3 mb-7 mt-1">
			<div className="flex items-center justify-between  rounded-lg border-gray-500   border-[1px] border-dashed ">
				<input
					type="text"
					className="w-[410px] rounded-lg py-2 px-4"
					placeholder="Create a TODO in 5 seconds ..."
				/>
				<button className=" active:scale-110">
					<img src={microphoneIcon} className="w-5 h-5 mx-3 " alt="AI Icon" />
				</button>
			</div>
			<button className="flex gap-1 items-center  pl-3 font-Inter text-slate-900 hover:bg-cyan-100 hover:drop-shadow-xl hover:shadow-cyan-300 w-36 h-10 rounded-xl active:bg-cyan-200 active:scale-110 border-cyan-500 border-2 duration-500">
				<img src={AIICon} className="w-6 h-6 mr-2" alt="AI Icon" />
				Generate
			</button>
		</div>
	);
}

export default AIInput;
