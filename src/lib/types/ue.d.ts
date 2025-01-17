import type { Module } from '$lib/types/module';

export type UE = {
	name: string;
	modules: { module: Module; coefficient: number }[];
};
