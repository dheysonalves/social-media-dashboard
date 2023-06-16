import Image from "next/image";
import ToggleButton from "./components/Toogle/ToggleButton";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-16">
			<div className="grid lg:grid-cols-3 gap-4 z-10 w-full max-w-5xl items-center">
				<div className="z-10 w-full max-w-5xl items-start justify-between lg:flex flex-col lg:col-span-2">
					<h1 className="lg:text-2xl sm:text-xl leading-none flex w-full lg:pb-2 sm:pb-1 lg:static lg:w-auto font-bold text-textPattern">
						Social Media Dashboard
					</h1>
					<span className="text-xs text-mono leading-none text-textBlue">
						Total Followers: 23,0004
					</span>
				</div>
				<ToggleButton />
			</div>
		</main>
	);
}
