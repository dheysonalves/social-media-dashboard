import { socialMedia } from "@/app/utils/socialmedia";
import Image from "next/image";
import React from "react";

interface ICardHorizontal {
	type: string
	label: string
	total: string
	percentage: number
}

function CardHorizontal(props: ICardHorizontal) {
	const isUpOrDown =
		props.percentage > 0
			? { color: "text-[#1db489]", image: "/images/icon-up.svg" }
			: { color: "text-[#a0595e]", image: "/images/icon-down.svg" };

	return (
		<button className="flex flex-col justify-between bg-card hover:bg-[#d8dbec] hover:dark:bg-[#535769] cursor-pointer p-6 gap-8 rounded border-none">
			<div className="flex w-full justify-between items-center">
				<span className="text-xs text-mono leading-none text-textBlue">
					{props.label}
				</span>
				<Image
					src={socialMedia[props.type]}
					alt={props.type}
					width={16}
					height={16}
				/>
			</div>
			<div className="flex w-full justify-between items-center">
				<h1 className="lg:text-2xl sm:text-xl leading-none flex lg:static font-bold text-textPattern">
					{props.total}
				</h1>
				<span
					className={`text-sm leading-none ${isUpOrDown.color} flex items-center gap-1
					`}>
					<Image src={isUpOrDown.image} alt="" width={8} height={8} />
					{Math.abs(props.percentage)}%
				</span>
			</div>
		</button>
	);
}

export default CardHorizontal;
