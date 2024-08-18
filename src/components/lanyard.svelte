<script lang="ts">
    import { useLanyard } from 'svelte-lanyard';
    const data = useLanyard('639720838635061248');

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

    return bg ? "bg-gray-500" : "border-gray-500";
}


</script>

<div class="flex flex-row items-center justify-center pt-8 pb-5">
{#if $data && statusColors}
    <div class={`pl-2 flex items-center border ${statusColors($data.discord_status, true)} ${statusColors($data.discord_status, false)} w-[250px] bg-opacity-5 border-opacity-30 rounded-full`}>
        <img src={`https://cdn.discordapp.com/avatars/${$data.discord_user.id}/${$data.discord_user.avatar}.webp?size=1024`} alt="Avatar" class="w-[15%] aspect-auto rounded-full" />
		<p>{$data.discord_user.username} is {$data.discord_status}</p>
    </div>
{/if}
</div>