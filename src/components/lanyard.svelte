<script lang="ts">
    import { onMount } from 'svelte';
    import { useLanyard } from 'svelte-lanyard';
    import type { LanyardData } from '../types/lanyard';
    import { statusColors } from '../scripts/lanyard';

    let data: LanyardData | undefined;
    let onlineBorderClass: string | null = null;
    let onlineBgClass: string | null = null;

    onMount(() => {
        const unsubscribe = useLanyard('639720838635061248').subscribe((value) => {
            data = value;
        });
        return () => unsubscribe();
    });

    $: if (data) {
        onlineBorderClass = statusColors(data.discord_status, false, true);
        onlineBgClass = statusColors(data.discord_status, true, false);
    }
</script>

{#if data}
    <div class={`flex items-center justify-center border ${onlineBgClass} ${onlineBorderClass} w-[250px] bg-opacity-5 border-opacity-30 rounded-full`}>
        <img src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.webp?size=1024`} alt="Avatar" class="w-[15%] aspect-auto rounded-full" />
		<p>{data.discord_user.username} is {data.discord_status}</p>
    </div>
{/if}