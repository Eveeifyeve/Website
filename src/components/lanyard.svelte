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

<div class="flex flex-row items-center justify-center pt-8 pb-5">
{#if $data && statusColors}
    <div class={`pl-2 flex flex-col items-center border ${statusColors($data.discord_status, true)} ${statusColors($data.discord_status, false)} w-[250px] bg-opacity-5 border-opacity-30 rounded-full`}>
        <div class="flex flex-row w-full h-[10%] pb-0">
            <img src={`https://cdn.discordapp.com/avatars/${$data.discord_user.id}/${$data.discord_user.avatar}.webp?size=1024`} alt="Avatar" class="w-[15%] aspect-auto rounded-full" />
            <p>{$data.discord_user.username} is on {$data.discord_status}</p> 
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
