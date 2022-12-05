import DAY_3_INPUT from './input.txt?raw';

type Rucksack = [[string], [string]];

const RUCKSACKS = DAY_3_INPUT.split('\n').map((line) => {
	const allItems: string[] = line.split('');
	const middleIndex = Math.ceil(allItems.length / 2);
	const firstCompartment = allItems.splice(0, middleIndex);
	const secondCompartment = allItems.splice(-middleIndex);
	return [firstCompartment, secondCompartment];
}) as Rucksack[];

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

const sortedRucksacks = RUCKSACKS.map((rucksack) => {
	return [rucksack[0].sort(), rucksack[1].sort()];
});

const dedupedSortedRucksacks = sortedRucksacks.map((rucksack) => {
	return [Array.from(new Set(rucksack[0])), Array.from(new Set(rucksack[1]))];
});

const sharedItemsInEachRucksack = dedupedSortedRucksacks.map((rucksack) => {
	let shared: string[] = [];
	rucksack[0].forEach((item) => {
		if (rucksack[1].includes(item)) shared.push(item);
	});
	return shared;
});

const partOne = () => {
	let prioritySum = 0;
	sharedItemsInEachRucksack.forEach((sharedItems) => {
		sharedItems.forEach((sharedItem) => {
			prioritySum += PRIORITIES[sharedItem as keyof typeof PRIORITIES];
		});
	});
	console.log(prioritySum);
};

export default () => {
	partOne();
};
