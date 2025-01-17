import { derived, writable } from 'svelte/store';
import { semesters } from '$lib/constants';
import type { Semester } from '$lib/types/semester';

export const selectedSemester = writable<Semester>(semesters[0]);

export const scores = writable<Record<string, number>>({});

selectedSemester.subscribe(($selectedSemester) => {
	const initialScores: Record<string, number> = {};

	$selectedSemester.ues.forEach((ue) => {
		ue.modules.forEach(({ module }) => {
			initialScores[module.name] = 0;
		});
	});

	scores.set(initialScores);
});

export const ueAverages = derived([scores, selectedSemester], ([$scores, $selectedSemester]) => {
	return $selectedSemester.ues.map((ue) => {
		let totalScore = 0;
		let totalCoef = 0;
		ue.modules.forEach(({ module, coefficient }) => {
			totalScore += ($scores[module.name] || 0) * coefficient;
			totalCoef += coefficient;
		});
		const average = totalCoef > 0 ? totalScore / totalCoef : 0;
		return { ueName: ue.name, average };
	});
});
