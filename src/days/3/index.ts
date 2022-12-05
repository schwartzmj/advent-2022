import DAY_3_INPUT from './input.txt?raw';

type Rucksack = [[string], [string]];

type ElfRucksackGroup = [Rucksack, Rucksack, Rucksack];

let currentGroup: Rucksack[] = [];
let ELF_RUCKSACK_GROUPS: ElfRucksackGroup[] = [];

const isRucksackGroupOf3 = (rucksackGroup: Rucksack[]): rucksackGroup is ElfRucksackGroup => {
	return rucksackGroup.length === 3;
};

DAY_3_INPUT.split('\n').forEach((line) => {
	if (isRucksackGroupOf3(currentGroup)) {
		ELF_RUCKSACK_GROUPS.push(currentGroup);
		currentGroup = [];
	}
	const allItems: string[] = line.split('');
	const middleIndex = Math.ceil(allItems.length / 2);
	const rucksack = [allItems.splice(0, middleIndex), allItems.splice(-middleIndex)] as Rucksack;
	currentGroup.push(rucksack);
});

const PRIORITIES = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
	A: 27,
	B: 28,
	C: 29,
	D: 30,
	E: 31,
	F: 32,
	G: 33,
	H: 34,
	I: 35,
	J: 36,
	K: 37,
	L: 38,
	M: 39,
	N: 40,
	O: 41,
	P: 42,
	Q: 43,
	R: 44,
	S: 45,
	T: 46,
	U: 47,
	V: 48,
	W: 49,
	X: 50,
	Y: 51,
	Z: 52
};

const getBadgeTypeFromGroup = (group: ElfRucksackGroup): string => {
	let badgeType;
	const nonCompartmentalizedRucksacks = [
		[...group[0][0], ...group[0][1]],
		[...group[1][0], ...group[1][1]],
		[...group[2][0], ...group[2][1]]
	];
	for (const item of nonCompartmentalizedRucksacks[0]) {
		if (
			nonCompartmentalizedRucksacks[1].includes(item) &&
			nonCompartmentalizedRucksacks[2].includes(item)
		) {
			badgeType = item;
			break;
		}
	}
	if (badgeType === undefined)
		throw new Error(`Could not get badge type from group: ${JSON.stringify(group)}`);
	return badgeType;
};

const partTwo = () => {
	const badges = ELF_RUCKSACK_GROUPS.map((group) => {
		return getBadgeTypeFromGroup(group);
	});
	let priority = 0;
	badges.forEach((badge) => {
		priority += PRIORITIES[badge as keyof typeof PRIORITIES];
	});
	console.log('Priority sum: ', priority);
};

export default () => {
	partTwo();
};
