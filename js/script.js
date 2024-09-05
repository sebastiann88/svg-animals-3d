let path = document.querySelector("#animals-path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
	//What % down is it?
	const scrollPercentage =
		(document.documentElement.scrollTop + document.body.scrollTop) /
		(document.documentElement.scrollHeight -
			document.documentElement.clientHeight);

	// Length to offset the dashes
	const drawLength = pathLength * scrollPercentage;

	// Draw in reverse
	path.style.strokeDashoffset = pathLength - drawLength;
});