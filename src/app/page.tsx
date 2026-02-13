import Image from "next/image";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center">
			<main className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 sm:items-start text-amber-800">
				<div>
					<h1 className="text-6xl font-rubik text-start w-full -rotate-12 -translate-x-12 -translate-y-20">
						Octocats!
					</h1>
					<p className="text-xl font-averia">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Magnam ratione temporibus, voluptatum totam facere cum,
						ipsum voluptatem enim fugit dicta impedit? Eius,
						doloremque. Neque repellendus delectus veniam omnis
						doloremque magni, ullam, soluta optio distinctio eaque
						excepturi voluptas vitae similique nobis impedit
						accusamus quaerat iusto corporis voluptates. Cumque
						error id blanditiis! Non facilis cumque similique
						pariatur labore, doloribus tenetur, a est fugit odio
						fugiat excepturi veniam iusto at reiciendis, repudiandae
						accusamus necessitatibus explicabo distinctio sapiente
						repellendus magni commodi ipsum quidem. Libero, eius
						facilis optio delectus quas nisi assumenda molestiae
						sapiente temporibus? Accusamus illo fugiat quidem odio
						unde dolorem rem aperiam ex.
					</p>

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
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Molestias eaque consequatur beatae hic
							voluptas eos iure illo, eveniet sapiente ut.
						</p>
					</div>
				</div>
			</main>
		</div>
	);
}
