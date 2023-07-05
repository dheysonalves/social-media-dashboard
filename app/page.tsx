import ToggleButton from "./components/Toogle/ToggleButton";
import CardVertical from "./components/CardVertical/CardVertical";
import CardHorizontal from "./components/CardHorizontal/CardHorizontal";
import { overview, overviewToday } from "./mocks/dashboard";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center lg:px-16 p-8 gap-8">
			<div className="flex gap-4 z-10 w-full max-w-5xl items-center flex-col lg:flex-row">
				<div className="z-10 w-full lg:flex flex-col lg:col-span-2 items-start justify-between">
					<h1 className="lg:text-2xl sm:text-xl leading-none flex lg:pb-2 sm:pb-1 lg:static lg:w-auto font-bold text-textPattern">
						Social Media Dashboard
					</h1>
					<span className="text-xs text-mono leading-none text-textPattern">
						Total Followers: 23,0004
					</span>
				</div>
				<div className="flex items-center justify-between gap-1 w-full lg:w-auto">
					<span className="text-xs text-mono leading-none text-textPattern">
						Dark Mode
					</span>
					<ToggleButton />
				</div>
			</div>
			<div className="grid lg:grid-cols-4 gap-6 w-full max-w-5xl">
				{overview.map((item, index) => {
					return (
						<CardVertical
							userName={item.username}
							label={item.label}
							total={item.total}
							newUsers={item.newUsers}
							type={item.type}
							key={`overview-${index}
						`}
						/>
					);
				})}
			</div>
			<div className="flex flex-col w-full max-w-5xl gap-4">
				<div className="z-10 lg:flex flex-col lg:col-span-2">
					<h1 className="lg:text-2xl sm:text-2xl leading-none flex lg:pb-2 sm:pb-1 lg:static lg:w-auto font-bold text-textBlue">
						Overview - Today
					</h1>
				</div>
				<div className="grid lg:grid-cols-4 gap-6 w-full max-w-5xl">
					{overviewToday.map((item, key) => {
						return (
							<CardHorizontal
								label={item.label}
								type={item.type}
								total={item.total}
								percentage={item.percentage}
								key={key}
							/>
						);
					})}
				</div>
			</div>
		</main>
	);
}
