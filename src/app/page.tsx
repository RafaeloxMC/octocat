import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 sm:items-start text-amber-800">
				<div>
					<h1 className="text-6xl font-rubik text-start w-full -rotate-12 -translate-x-12 -translate-y-20">
						Octocats!
					</h1>
					<p className="text-xl font-averia">
						Don&apos;t we all love plushies? But wait... This
						plushie kind of looks familiar! During{" "}
						<Link href="https://overglade.hackclub.com/">
							Overglade
						</Link>
						, I noticed, that the GitHub Octocat Plushie has weird
						similarities with the{" "}
						<Link href="https://overglade.hackclub.com/">
							Overglade
						</Link>{" "}
						staff member RenRan! Since then, we kind of made fun
						about that - but what if we could give the real RenRan a
						bunch of little RenRans? What if you want one for
						yourself? This is your chance! The promise is:
					</p>

					<h2 className="mt-4 text-3xl font-averia font-bold">
						Ship 15h, get an Octocat for RenRan and yourself!
					</h2>
					<h2 className="text-xl font-averia">
						or: ship 10h, get RenRan an Octocat!
					</h2>

					<div className="grid grid-cols-2 bg-orange-100 rounded-4xl drop-shadow-xl -rotate-6 mt-12 p-4">
						<Image
							src={"/octocat_nobg.png"}
							width={850}
							height={750}
							alt={
								"A picture of GitHub's Octocat plushie called Octoplush"
							}
						/>
						<p className="text-xl font-averia">
							Meet GitHub&apos;s iconic Octocat plushie — the
							adorable eight-legged mascot that&apos;s captured
							the hearts of developers everywhere! With its
							signature grin, big eyes, and charming octopus
							design, this plushie is the perfect companion for
							any tech enthusiast. Whether you&apos;re showing off
							your love for GitHub or just want an irresistibly
							cute desk buddy, the Octocat brings a touch of fun
							and personality to any space. Soft, huggable, and
							instantly recognizable, this plushie is a must-have
							collectible for open-source lovers and code
							enthusiasts alike!
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
