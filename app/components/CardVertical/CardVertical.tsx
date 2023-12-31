import { formatNumber, socialMedia, socialMediaColors } from "@/app/utils/helpers";
import Image from "next/image";
import React from "react";

interface ICardVertical {
	type: string
	total:string
	label: string
	userName: string;
	newUsers: number
}

function CardVertical(props: ICardVertical) {
	const isUpOrDown =
		props.newUsers > 0
			? { color: "text-[#1db489]", image: "/images/icon-up.svg" }
			: { color: "text-[#a0595e]", image: "/images/icon-down.svg" };

	return (
		<button
			className={`flex flex-col justify-between items-center bg-card bg-card hover:bg-[#d8dbec] hover:dark:bg-[#535769] cursor-pointer px-12 py-8 gap-4 rounded border-t-4 ${socialMediaColors[props.type]}`}>
			<div className="flex gap-2">
				<span className="flex items-center gap-1 text-xs font-normal text-textBlue">
					<Image
						src={socialMedia[props.type]}
						alt={props.type}
						width={16}
						height={16}
					/>
					{props.userName}
				</span>
			</div>
			<div className="text-center">
				<h2 className="lg:text-[42px] font-bold leading-none">
					{formatNumber(Number(props.total))}
				</h2>
				<span className="lg:text-sm font-normal tracking-wider uppercase text-textBlue leading-none	">
					{props.label.toUpperCase()}
				</span>
			</div>
			<span
				className={`flex items-center gap-1 text-xs ${isUpOrDown.color} font-bold`}>
				<Image src={isUpOrDown.image} alt={""} width={8} height={8} />
				{Math.abs(props.newUsers)} Today
			</span>
		</button>
	);
}

export default CardVertical;
