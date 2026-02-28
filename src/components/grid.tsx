import { cn } from "@/lib/utils";

export function GridSmallBackground() {
	return (
		<div className="flex h-full w-full items-center justify-center bg-amber-100">
			<div
				className={cn(
					"fixed inset-0",
					"bg-size-[20px_20px]",
					"bg-[linear-gradient(to_right,#fee685_1px,transparent_1px),linear-gradient(to_bottom,#fee685_1px,transparent_1px)]",
				)}
			/>
		</div>
	);
}
