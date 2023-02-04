import GithubLink from "./GithubLink";

export default function () {
	return (
		<header className="max-w-6xl p-4 mx-auto font-bold text-xl flex items-center">
			<div>Your Next Technology 🔥</div>
			<div className="ml-auto">
				<GithubLink />
			</div>
		</header>
	);
}
