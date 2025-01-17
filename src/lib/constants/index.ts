import type { Semester } from '$lib/types/semester';
import type { Module } from '$lib/types/module';

export const modules: Record<string, Module> = {
	//Semester #1
	R101: { name: 'R1.01 - Initiation Dev' },
	R102: { name: 'R1.02 - Dev. Interface Web' },
	R103: { name: 'R1.03 - Intro Architecture ordinateurs' },
	R104: { name: "R1.04 - Introduction Systèmes d'expl." },
	R105: { name: 'R1.05 - Introduction BD+SQL' },
	R106: { name: 'R1.06 - Maths discrètes' },
	R107: { name: 'R1.07 - Outils mathématiques fondamentaux' },
	R108: { name: 'R1.08 - GPO' },
	R109: { name: 'R1.09 - Economie dura. numé.' },
	R110: { name: 'R1.10 - Anglais Tech' },
	R111: { name: 'R1.11 - Bases Communication' },
	R112: { name: 'R1.12 - PPP' },

	S101: { name: 'S1.01 - Implémentation besoin client' },
	S102: { name: 'S1.02 - Comparaison - algorithmes' },
	S103: { name: 'S1.03 - Installation poste dévelopmt.' },
	S104: { name: 'S1.04 - Création de BD' },
	S105: { name: 'S1.05 - Recueil de besoins' },
	S106: { name: 'S1.06 - Découvertes Env écono. & écolo.' },

	//Semester #2
	R201: { name: 'R2.01 - DevObj' },
	R202: { name: 'R2.02 - Appli-IHM' },
	R203: { name: 'R2.03 - Qualité' },
	R204: { name: 'R2.04 - Comm. bas niveau' },
	R205: { name: 'R2.05 - Services réseaux' },
	R206: { name: 'R2.06 - Exploitation BD' },
	R207: { name: 'R2.07 - Graphes' },
	R208: { name: 'R2.08 - Statistiques' },
	R209: { name: 'R2.09 - Méthodes numériques' },
	R210: { name: 'R2.10 - Gestion de projet' },
	R211: { name: 'R2.11 - Droit' },
	R212: { name: 'R2.12 - Anglais d’entreprise' },
	R213: { name: 'R2.13 - Communication' },
	R214: { name: 'R2.14 - Projet professionnel et personnel' },

	P201: { name: 'P2.01 - Portfolio' },
	S201: { name: 'S2.01 - Développement d’une application' },
	S202: { name: 'S2.02 - Exploration algorithmique' },
	S203: { name: 'S2.03 - Installation de services réseau' },
	S204: { name: 'S2.04 - Exploitation BD' },
	S205: { name: "S2.05 - Gestion d'un projet" },
	S206: { name: 'S2.06 - Organisation d’un travail d’équipe' },

	//Semester #3
	R301: { name: 'R3.01 - Développement web' },
	R302: { name: 'R3.02 - Développement efficace' },
	R303: { name: 'R3.03 - Analyse' },
	R304: { name: 'R3.04 - Qualité de développement' },
	R305: { name: 'R3.05 - Programmation système' },
	R306: { name: 'R3.06 - Architecture des réseaux' },
	R307: { name: 'R3.07 - SQL et programmation' },
	R308: { name: 'R3.08 - Probabilités' },
	R309: { name: 'R3.09 - Cryptographie et sécurité' },
	R310: { name: 'R3.10 - Management des systèmes d’information' },
	R311: { name: 'R3.11 - Droit des contrats et du numérique' },
	R312: { name: 'R3.12 - Anglais' },
	R313: { name: 'R3.13 - Communication professionnelle' },
	R314: { name: 'R3.14 - PPP' },

	P301: { name: 'P3.01 - Portfolio' },
	S301: { name: 'S3.01 - Développement d’une application' },
	S302: { name: 'S3.02 - Développement d’une application' },
	S303: { name: 'S3.03 - Développement d’une application' },
	S304: { name: 'S3.04 - Développement d’une application' },
	S305: { name: 'S3.05 - Développement d’une application' },
	S306: { name: 'S3.06 - Développement d’une application' },


	//Semester #4
	R401: { name: 'R4.01 - Architecture logicielle' },
	R402: { name: 'R4.02 - Qualité de développement' },
	R403: { name: 'R4.03 - Qualité et au-delà du relationnel' },
	R404: { name: 'R4.04 - Méthodes d’optimisation' },
	R405: { name: 'R4.05 - Anglais' },
	R406: { name: 'R4.06 - Communication interne' },
	R407: { name: 'R4.07 - Projet personnel et professionnel' },
	R408: { name: 'R4.A.08 - Virtualisation' },
	R409: { name: 'R4.A.09 - Management av. des systèmes d’information' },
	R410: { name: 'R4.A.10 - Complément web' },
	R411: { name: 'R4.A.11 - Développement app. mobiles' },
	R412: { name: 'R4.Real.12 - Automates et Langages' },

	P401: { name: 'P4 PORTFOLIO - Portfolio' },
	S401: { name: 'SAÉ 4.Real.01 - Développement d’une application complexe' },
	S402: { name: 'SAE 4.STAGE - Stage' },
	S403: { name: 'SAÉ 4.Real.02 - Développement d’une application complexe' },
	S404: { name: 'SAÉ 4.Real.03 - Développement d’une application complexe' },
	S405: { name: 'SAÉ 4.Real.04 - Développement d’une application complexe' },
	S406: { name: 'SAÉ 4.Real.05 - Développement d’une application complexe' },
	S407: { name: 'SAÉ 4.Real.06 - Développement d’une application complexe' },


	//Semester #5
	R501: { name: 'R5.01 - Init. Gestion Projet Informatique' },
	R502: { name: 'R5.02 - Projet Perso et Pro (PPP)' },
	R503: { name: 'R5.03 - Communication' },
	R504: { name: 'R5.Real.04 - Qualité algorithmique' },
	R505: { name: 'R5.Real.05 - Programmation avancée' },
	R506: { name: 'R5.Real.06 - Programmation multimédia' },
	R507: { name: 'R5.Real.07 - Automatisation Chaine Production' },
	R508: { name: 'R5.Real.08 - Qualité de développement' },
	R509: { name: 'R5.Real.09 - Virtualisation avancée' },
	R510: { name: 'R5.Real.10 - Nouveaux paradigmes de BDD' },
	R511: { name: 'R5.Real.11 - Méthodes d’optimisation pour l’aide à la décision' },
	R512: { name: 'R5.Real.12 - Modélisations mathématiques' },
	R513: { name: 'R5.Real.13 - Économie durable et numérique' },
	R514: { name: 'R5.Real.14 - Anglais' },

	S501: { name: 'SAÉ 5.Real.01 - Développement avancé' },
};

export const semesters: Semester[] = [
	{
		name: 'Semestre 1',
		ues: [
			{
				name: 'UE1.1 - Réaliser un développement d’application',
				modules: [
					{ module: modules.R102, coefficient: 12 },
					{ module: modules.R110, coefficient: 6 },
					{ module: modules.R101, coefficient: 42 },
					{ module: modules.S101, coefficient: 40 }
				]
			},
			{
				name: 'UE1.2 - Optimiser des applications informatiques',
				modules: [
					{ module: modules.R103, coefficient: 6 },
					{ module: modules.R106, coefficient: 15 },
					{ module: modules.R107, coefficient: 15 },
					{ module: modules.R101, coefficient: 24 },
					{ module: modules.S102, coefficient: 40 }
				]
			},
			{
				name: 'UE1.3 - Administrer des systèmes informatiques communicants complexes',
				modules: [
					{ module: modules.R103, coefficient: 21 },
					{ module: modules.R104, coefficient: 21 },
					{ module: modules.R110, coefficient: 12 },
					{ module: modules.R111, coefficient: 6 },
					{ module: modules.S103, coefficient: 40 }
				]
			},
			{
				name: 'UE1.4 - Gérer des données de l’information',
				modules: [
					{ module: modules.R105, coefficient: 36 },
					{ module: modules.R106, coefficient: 18 },
					{ module: modules.R109, coefficient: 6 },
					{ module: modules.S104, coefficient: 40 }
				]
			},

			{
				name: 'UE1.5 - Conduire un projet',
				modules: [
					{ module: modules.R102, coefficient: 18 },
					{ module: modules.R108, coefficient: 27 },
					{ module: modules.R111, coefficient: 15 },
					{ module: modules.S105, coefficient: 40 }
				]
			},

			{
				name: 'UE1.6 - Travailler dans une équipe informatique',
				modules: [
					{ module: modules.R102, coefficient: 5 },
					{ module: modules.R108, coefficient: 11 },
					{ module: modules.R109, coefficient: 11 },
					{ module: modules.R110, coefficient: 11 },
					{ module: modules.R111, coefficient: 11 },
					{ module: modules.R112, coefficient: 11 },
					{ module: modules.S106, coefficient: 40 }
				]
			}
		]
	},
	{
		name: 'Semestre 2',
		ues: [
			{
				name: 'UE2.1 - Réaliser un développement d’application',
				modules: [
					{ module: modules.R201, coefficient: 21 },
					{ module: modules.R202, coefficient: 21 },
					{ module: modules.R203, coefficient: 12 },
					{ module: modules.R213, coefficient: 6 },
					{ module: modules.P201, coefficient: 2 },
					{ module: modules.S201, coefficient: 38 }
				]
			},
			{
				name: 'UE2.2 - Optimiser des applications informatiques',
				modules: [
					{ module: modules.R201, coefficient: 15 },
					{ module: modules.R204, coefficient: 12 },
					{ module: modules.R207, coefficient: 21 },
					{ module: modules.R209, coefficient: 12 },
					{ module: modules.P201, coefficient: 2 },
					{ module: modules.S202, coefficient: 38 }
				]
			},
			{
				name: 'UE2.3 - Administrer des systèmes informatiques communicants complexes',
				modules: [
					{ module: modules.R204, coefficient: 36 },
					{ module: modules.R205, coefficient: 15 },
					{ module: modules.R212, coefficient: 6 },
					{ module: modules.R213, coefficient: 3 },
					{ module: modules.P201, coefficient: 2 },
					{ module: modules.S203, coefficient: 38 }
				]
			},
			{
				name: 'UE2.4 - Gérer des données de l’information',
				modules: [
					{ module: modules.R206, coefficient: 30 },
					{ module: modules.R208, coefficient: 12 },
					{ module: modules.R210, coefficient: 12 },
					{ module: modules.R212, coefficient: 6 },
					{ module: modules.P201, coefficient: 2 },
					{ module: modules.S204, coefficient: 38 }
				]
			},
			{
				name: 'UE2.5 - Conduire un projet',
				modules: [
					{ module: modules.R202, coefficient: 3 },
					{ module: modules.R203, coefficient: 6 },
					{ module: modules.R207, coefficient: 6 },
					{ module: modules.R210, coefficient: 30 },
					{ module: modules.R212, coefficient: 6 },
					{ module: modules.R213, coefficient: 9 },
					{ module: modules.P201, coefficient: 2 },
					{ module: modules.S205, coefficient: 38 }
				]
			},
			{
				name: 'UE2.6 - Travailler dans une équipe informatique',
				modules: [
					{ module: modules.R202, coefficient: 4 },
					{ module: modules.R211, coefficient: 17 },
					{ module: modules.R212, coefficient: 17 },
					{ module: modules.R213, coefficient: 11 },
					{ module: modules.R214, coefficient: 11 },
					{ module: modules.P201, coefficient: 2 },
					{ module: modules.S206, coefficient: 38 }
				]
			}
		]
	},
	{
		name: 'Semestre 3',
		ues: [
			{
				name: 'UE3.1 - Réaliser un développement d’application',
				modules: [
					{ module: modules.R301, coefficient: 15 },
					{ module: modules.R302, coefficient: 10 },
					{ module: modules.R303, coefficient: 12 },
					{ module: modules.R304, coefficient: 15 },
					{ module: modules.R311, coefficient: 8 },
					{ module: modules.S301, coefficient: 40 }
				]
			},
			{
				name: 'UE3.2 - Optimiser des applications informatiques',
				modules: [
					{ module: modules.R301, coefficient: 5 },
					{ module: modules.R302, coefficient: 13 },
					{ module: modules.R303, coefficient: 5 },
					{ module: modules.R306, coefficient: 5 },
					{ module: modules.R308, coefficient: 17 },
					{ module: modules.R309, coefficient: 10 },
					{ module: modules.R312, coefficient: 5 },
					{ module: modules.S302, coefficient: 40 }
				]
			},
			{
				name: 'UE3.3 - Administrer des systèmes informatiques communicants complexes',
				modules: [
					{ module: modules.R301, coefficient: 5 },
					{ module: modules.R305, coefficient: 22 },
					{ module: modules.R306, coefficient: 18 },
					{ module: modules.R309, coefficient: 10 },
					{ module: modules.R312, coefficient: 5 },
					{ module: modules.S303, coefficient: 40 }
				]
			},
			{
				name: 'UE3.4 - Gérer des données de l’information',
				modules: [
					{ module: modules.R301, coefficient: 10 },
					{ module: modules.R307, coefficient: 25 },
					{ module: modules.R308, coefficient: 5 },
					{ module: modules.R309, coefficient: 5 },
					{ module: modules.R310, coefficient: 10 },
					{ module: modules.R311, coefficient: 5 },
					{ module: modules.S304, coefficient: 40 }
				]
			},
			{
				name: 'UE3.5 - Conduire un projet',
				modules: [
					{ module: modules.R303, coefficient: 10 },
					{ module: modules.R304, coefficient: 8 },
					{ module: modules.R310, coefficient: 18 },
					{ module: modules.R311, coefficient: 10 },
					{ module: modules.R312, coefficient: 7 },
					{ module: modules.R313, coefficient: 7 },
					{ module: modules.S305, coefficient: 40 }
				]
			},
			{
				name: 'UE3.6 - Travailler dans une équipe informatique',
				modules: [
					{ module: modules.R304, coefficient: 5 },
					{ module: modules.R310, coefficient: 16 },
					{ module: modules.R312, coefficient: 8 },
					{ module: modules.R313, coefficient: 16 },
					{ module: modules.R314, coefficient: 15 },
					{ module: modules.S306, coefficient: 40 }
				]
			},
		]
	},
	{
		name: 'Semestre 4',
		ues: [
			{
				name: 'UE4.1 - Réaliser un développement d’application',
				modules: [
					{ module: modules.R401, coefficient: 16 },
					{ module: modules.R402, coefficient: 8 },
					{ module: modules.R410, coefficient: 8 },
					{ module: modules.R411, coefficient: 8 },
					{ module: modules.S401, coefficient: 15 },
					{ module: modules.S402, coefficient: 40 },
					{ module: modules.P401, coefficient: 5 }
				]
			},
			{
				name: 'UE4.2 - Optimiser des applications informatiques',
				modules: [
					{ module: modules.R404, coefficient: 12 },
					{ module: modules.R405, coefficient: 4 },
					{ module: modules.R409, coefficient: 4 },
					{ module: modules.R410, coefficient: 4 },
					{ module: modules.R411, coefficient: 4 },
					{ module: modules.R412, coefficient: 12 },
					{ module: modules.S403, coefficient: 15 },
					{ module: modules.S402, coefficient: 40 },
					{ module: modules.P401, coefficient: 5 }
				]
			},
			{
				name: 'UE4.3 - Administrer des systèmes informatiques communicants complexes',
				modules: [
					{ module: modules.R401, coefficient: 12 },
					{ module: modules.R408, coefficient: 28 },
					{ module: modules.S404, coefficient: 15 },
					{ module: modules.S402, coefficient: 40 },
					{ module: modules.P401, coefficient: 5 }
				]
			},
			{
				name: 'UE4.4 - Gérer des données de l’information',
				modules: [
					{ module: modules.R403, coefficient: 18 },
					{ module: modules.R406, coefficient: 6 },
					{ module: modules.R410, coefficient: 8 },
					{ module: modules.R411, coefficient: 8 },
					{ module: modules.S405, coefficient: 15 },
					{ module: modules.S402, coefficient: 40 },
					{ module: modules.P401, coefficient: 5 }
				]
			},
			{
				name: 'UE4.5 - Conduire un projet',
				modules: [
					{ module: modules.R402, coefficient: 10 },
					{ module: modules.R409, coefficient: 22 },
					{ module: modules.R410, coefficient: 4 },
					{ module: modules.R411, coefficient: 4 },
					{ module: modules.S406, coefficient: 15 },
					{ module: modules.S402, coefficient: 40 },
					{ module: modules.P401, coefficient: 5 }
				]
			},
			{
				name: 'UE4.6 - Travailler dans une équipe informatique',
				modules: [
					{ module: modules.R401, coefficient: 4 },
					{ module: modules.R405, coefficient: 13 },
					{ module: modules.R406, coefficient: 13 },
					{ module: modules.R407, coefficient: 10 },
					{ module: modules.S407, coefficient: 15 },
					{ module: modules.S402, coefficient: 40 },
					{ module: modules.P401, coefficient: 5 }
				]
			},
		]
	},
	{
		name: 'Semestre 5',
		ues: [
			{
				name: 'UE5.1 - Réaliser un développement d’application',
				modules: [
					{ module: modules.R504, coefficient: 3 },
					{ module: modules.R505, coefficient: 10 },
					{ module: modules.R506, coefficient: 3 },
					{ module: modules.R507, coefficient: 7 },
					{ module: modules.R508, coefficient: 8 },
					{ module: modules.R509, coefficient: 8 },
					{ module: modules.R510, coefficient: 14 },
					{ module: modules.R513, coefficient: 3 },
					{ module: modules.R514, coefficient: 4 },
					{ module: modules.S501, coefficient: 40 },
				]
			},
			{
				name: 'UE5.2 - Optimiser des applications informatiques',
				modules: [
					{ module: modules.R504, coefficient: 7 },
					{ module: modules.R505, coefficient: 8 },
					{ module: modules.R506, coefficient: 3 },
					{ module: modules.R508, coefficient: 6 },
					{ module: modules.R509, coefficient: 3 },
					{ module: modules.R510, coefficient: 5 },
					{ module: modules.R511, coefficient: 8 },
					{ module: modules.R512, coefficient: 15 },
					{ module: modules.R514, coefficient: 5 },
					{ module: modules.S501, coefficient: 40 },
				]
			},
			{
				name: 'UE5.3 - Collaborer et gérer une équipe informatique',
				modules: [
					{ module: modules.R501, coefficient: 11 },
					{ module: modules.R502, coefficient: 7 },
					{ module: modules.R503, coefficient: 15 },
					{ module: modules.R506, coefficient: 3 },
					{ module: modules.R507, coefficient: 3 },
					{ module: modules.R513, coefficient: 6 },
					{ module: modules.R514, coefficient: 15 },
					{ module: modules.S501, coefficient: 40 },
				]
			},
		]
	}
];
