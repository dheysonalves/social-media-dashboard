"use client"; // This is a client component 👈🏽

import React, { useState } from "react";

function ToggleButton() {
	const [value, setValue] = useState(false);

	return (
		<label className="relative inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				name="theme"
				checked={value}
				className="sr-only peer"
				onChange={(e) => setValue(e.target.checked)}
			/>
			<div
				className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:bg-toogle
			ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-toogle"></div>
		</label>
	);
}

export default ToggleButton;
