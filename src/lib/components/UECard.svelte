<script lang="ts">
	import type { UE } from '$lib/types/ue';
	import { scores, ueAverages } from '$lib/stores/store';
	import { formatDecimal } from '$lib/utils/numberUtils';

	export let ue: UE;
</script>

<div class="bg-primary p-5 rounded-lg my-2">
	<div class="flex flex-row justify-between text-lg text-white font-bold">
		<span>{ue.name}</span>
		<div class="flex flex-col">
			<span
				>Moyenne : {formatDecimal(
					$ueAverages.find((average) => average.ueName === ue.name)?.average
				)}</span
			>
		</div>
	</div>
</div>

{#each ue.modules as { module, coefficient }, index}
	<div
		class={`flex flex-row justify-between px-5 text-lg hover:bg-pink-300 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}
	>
		<span>{module.name}</span>
		<div class="flex flex-row gap-x-1 items-center">
			<input
				type="number"
				step="0.01"
				class="w-16 text-center bg-transparent"
				bind:value={$scores[module.name]}
				on:input={(e) => {
					if ($scores[module.name] < 0) {
						$scores[module.name] = 0;
					} else if ($scores[module.name] > 20) {
						$scores[module.name] = 20;
					}
				}}
				on:blur={(e) => {
					if ($scores[module.name] === null) {
						$scores[module.name] = 0;
					}
				}}
			/>
			<span class="italic text-gray-500 w-20">Coef. {coefficient}</span>
		</div>
	</div>
{/each}
