<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { semesters } from '$lib/constants';
	import type { Semester } from '$lib/types/semester';
	import UECard from '$lib/components/UECard.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { selectedSemester, ueAverages } from '$lib/stores/store';
	import { formatDecimal } from '$lib/utils/numberUtils';

	const selectSemester = (semester: Semester) => {
		selectedSemester.set(semester);
	};

	const totalAverage = () => {
		const totalScore = $ueAverages.reduce((acc, { average }) => acc + average, 0);
		const totalCount = $ueAverages.length;
		return totalCount > 0 ? totalScore / totalCount : 0;
	};
</script>

<div class="h-screen overflow-x-hidden">
	<Header />
	<div class="flex justify-center items-center w-full px-4">
		<div class="pt-20 w-full max-w-7xl">
			<div class="flex flex-wrap gap-4 justify-center items-center">
				{#each semesters as semester}
					<button
							class="font-medium text-2xl py-4 px-10 border border-gray-400 rounded-lg cursor-pointer
                        {$selectedSemester === semester
                            ? 'bg-green-500 text-white'
                            : 'text-primary'}
                        sm:text-xl md:text-2xl"
							on:click={() => selectSemester(semester)}
					>
						{semester.name}
					</button>
				{/each}
			</div>

			<div class="mt-10 border border-gray-500 rounded-xl flex flex-col items-center px-10 py-4 mx-auto text-lg">
				<span class="text-2xl font-bold underline">Moyenne : {formatDecimal(totalAverage())}</span>
				<span> Décision année : {totalAverage() >= 10 ? 'ADM - Admis 🎉' : 'Non admis'} </span>
			</div>

			<div class="my-10 border border-gray-500 rounded-xl flex flex-col px-10 py-4 mx-auto">
				<div class="flex flex-col text-left">
					<span class="text-2xl font-bold">Synthèse</span>
					<span class="text-lg font-normal italic">
                        La moyenne des ressources dans une UE dépend des poids donnés aux évaluations.
                    </span>
				</div>
				{#each $selectedSemester.ues as ue}
					<UECard {ue} />
				{/each}
			</div>
			<Footer />
		</div>
	</div>
</div>