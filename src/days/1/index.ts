import DAY_1_INPUT from './input.txt?raw';

// Parse input into a JS data structure. In this case an array of number arrays (each elf's set of calories)
const ELF_CALORIES: number[][] = [];
let currentElf: number[] = [];
DAY_1_INPUT.split('\n').forEach((line) => {
	if (line === '') {
		ELF_CALORIES.push(currentElf);
		currentElf = [];
		return;
	}
	currentElf.push(parseInt(line));
});

export default () => {
	console.group('Day 1');
	console.time('Day 1 Part 2 Timing');

	const eachElfTotalCalories = ELF_CALORIES.map((elf) => {
		return elf.reduce((acc, curr) => acc + curr, 0);
	});

	const eachElfTotalCalories_desc = eachElfTotalCalories.sort((a, b) => b - a);

	const ANSWER_1 = eachElfTotalCalories_desc[0];

	const ANSWER_2 =
		eachElfTotalCalories_desc[0] + eachElfTotalCalories_desc[1] + eachElfTotalCalories_desc[2];
	console.log('Answer 1: ', ANSWER_1);
	console.log('Answer 2: ', ANSWER_2);
	console.timeEnd('Day 1 Part 2 Timing');
	console.groupEnd();
};
