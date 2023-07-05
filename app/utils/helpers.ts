export const socialMedia: { [key: string]: string } = {
	instagram: "/images/icon-instagram.svg",
	facebook: "/images/icon-facebook.svg",
	twitter: "/images/icon-twitter.svg",
	youtube: "/images/icon-youtube.svg",
};

export const socialMediaColors: { [key: string]: string } = {
	instagram: "border-t-[#DF4996]",
	facebook: "border-t-[#4AA6F7]",
	twitter: "border-t-[#1CA0F2]",
	youtube: "border-t-[#C4032A]",
};

export function formatNumber(number: number) {
	if (number >= 1000 && number < 1000000 && number % 10 === 0) {
		return number / 1000 + "k";
	} else if (number >= 1000000 && number % 1000000 === 0) {
		return number / 1000000 + "m";
	} else {
		return number.toString();
	}
}
