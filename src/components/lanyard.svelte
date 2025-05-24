<script lang="ts">
	import { useLanyard } from "svelte-lanyard";
	const data = useLanyard("639720838635061248");

	function statusColors(status: string, bg: boolean): string {
		switch (status) {
			case "online":
				return bg ? "bg-green-500" : "border-green-500";
			case "idle":
				return bg ? "bg-yellow-500" : "border-yellow-500";
			case "dnd":
				return bg ? "bg-red-500" : "border-red-500";
			case "offline":
			default:
				return bg ? "bg-gray-500" : "border-gray-500";
		}
	}
</script>

<div class="absolute top-0 left-0 p-4">
	{#if $data && statusColors}
		<div
			class={`flex items-center border ${statusColors($data.discord_status, true)} ${statusColors($data.discord_status, false)} bg-opacity-5 border-opacity-30 rounded-full p-2 max-w-md w-full`}
		>
			<!-- Avatar -->
			{#if $data.discord_user.avatar}
				<img
					src={`https://cdn.discordapp.com/avatars/${$data.discord_user.id}/${$data.discord_user.avatar}.webp?size=1024`}
					alt="Avatar"
					class="w-10 h-10 mx-auto rounded-full"
				/>
			{/if}

			<!-- Details pop out on the right -->
			{#if $data.activities[0] && $data.activities[0].details}
				<div class="ml-4 pl-6 pr-3 border-l border-white border-opacity-20 max-w-xs">
					<p class="text-[10px] sm:text-sm text-neutral-200 truncate">
						{$data.activities[0].details}
					</p>
				</div>
			{/if}
		</div>
	{/if}
</div>

