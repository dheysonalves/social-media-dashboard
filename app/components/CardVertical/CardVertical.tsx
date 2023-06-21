import React from "react";

interface ICardVertical {
	userName: string;
	currentTotalFollowers: string;
	latestTotalFollowers: string;
}

function CardVertical(props: ICardVertical) {
	const newUsers = Math.abs(
		Number(props.currentTotalFollowers) - Number(props.latestTotalFollowers)
	);
	const getTodayNewUsers = () => {
		if (newUsers > 0) {
			return `${newUsers} Today`;
		}

		if (newUsers < 0) {
			return `${newUsers} Today`;
		}

		return `${newUsers} Today`;
	};

	function formatNumber(number: number) {
		if (number >= 1000 && number < 1000000 && number % 1000 === 0) {
			return number / 1000 + "k";
		} else if (number >= 1000000 && number % 1000000 === 0) {
			return number / 1000000 + "m";
		} else {
			return number.toString();
		}
	}

	return (
		<div className="flex flex-col justify-between items-center bg-card px-16 py-4 gap-4 rounded border-t-4 border-t-[#198ff5] ">
			<div className="flex gap-2">
				<span className="text-xs font-normal text-textPattern">
					{props.userName}
				</span>
			</div>
			<div className="text-center">
				<h2 className="lg:text-[42px] font-bold leading-none">
					{formatNumber(Number(props.currentTotalFollowers))}
				</h2>
				<span className="lg:text-sm font-normal tracking-wider uppercase text-textBlue leading-none	">
					FOLLOWERS
				</span>
			</div>
			<span
				className={`text-xs text-[${
					newUsers > 0 ? "#1db489" : "#dc414c"
				}] font-bold`}>
				{getTodayNewUsers()}
			</span>
		</div>
	);
}

export default CardVertical;
