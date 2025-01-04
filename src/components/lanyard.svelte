<script lang="ts">
import { useLanyard } from "svelte-lanyard";
const data = useLanyard("639720838635061248");

function statusColors(status: string, bg: boolean): string {
	if (status === "online") {
		return bg ? "bg-green-500" : "border-green-500";
	}

	if (status === "idle") {
		return bg ? "bg-yellow-500" : "border-yellow-500";
	}

	if (status === "dnd") {
		return bg ? "bg-red-500" : "border-red-500";
	}

	if (status === "offline") {
		return bg ? "bg-gray-500" : "border-gray-500";
	}

	return bg ? "bg-gray-500" : "border-gray-500";
}

console.log(data);
</script>

<div class="absolute items-center top-0 left-3 mt-3">
{#if $data && statusColors}
    <div class={`pl-2 flex flex-col items-center border ${statusColors($data.discord_status, true)} ${statusColors($data.discord_status, false)} lg:w-2/4 w-full p-1 bg-opacity-5 border-opacity-30 rounded-lg`}>
        <div class="flex flex-row w-full lg:pr-0 pr-1">
          	<img src={`https://cdn.discordapp.com/avatars/${$data.discord_user.id}/${$data.discord_user.avatar}.webp?size=1024`} alt="Avatar" class="w-[15%] lg:block hidden aspect-auto rounded-full" />
            <p class="m-auto w-full">{$data.discord_status}</p> 
        </div>
        {#if $data.activities[0] && $data.activities[0].state !== ""}
        <div class="flex flex-col h-[10%] w-full justify-center items-center">
            <p>{$data.activities[0].state}</p>
            <p>{($data.activities[0].details || "No details")}</p>
        </div>
        {/if}
    </div>
{/if}
</div>
