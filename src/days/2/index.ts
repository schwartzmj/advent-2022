import DAY_2_INPUT from './input.txt?raw';

const STRATEGY_GUIDE: Strategy[] = DAY_2_INPUT.split('\n')
	.map((line) => {
		const strategyTuple = line.split(' ');
		if (strategyTuple.length !== 2) return null;
		return strategyTuple;
	})
	.filter(Boolean) as Strategy[];

type Strategy = ['A' | 'B' | 'C', 'X' | 'Y' | 'Z'];

interface IChoices {
	ROCK: number;
	PAPER: number;
	SCISSORS: number;
}

interface IOutcomes {
	LOSE: number;
	DRAW: number;
	WIN: number;
}

interface ILetterCodes {
	A: keyof IChoices;
	B: keyof IChoices;
	C: keyof IChoices;
	X: keyof IOutcomes;
	Y: keyof IOutcomes;
	Z: keyof IOutcomes;
}

const CHOICES: IChoices = {
	ROCK: 1,
	PAPER: 2,
	SCISSORS: 3
};

const OUTCOMES: IOutcomes = {
	LOSE: 0,
	DRAW: 3,
	WIN: 6
};

const LETTER_CODES: ILetterCodes = {
	A: 'ROCK',
	B: 'PAPER',
	C: 'SCISSORS',
	X: 'LOSE',
	Y: 'DRAW',
	Z: 'WIN'
};

const getChoice = (
	opponentChoice: keyof IChoices,
	desiredResult: keyof IOutcomes
): keyof IChoices => {
	//   if (opponentChoice === yourChoice) return OUTCOMES.DRAW

	if (opponentChoice === 'ROCK') {
		if (desiredResult === 'DRAW') return 'ROCK';
		if (desiredResult === 'WIN') return 'PAPER';
		if (desiredResult === 'LOSE') return 'SCISSORS';
	}

	if (opponentChoice === 'PAPER') {
		if (desiredResult === 'LOSE') return 'ROCK';
		if (desiredResult === 'DRAW') return 'PAPER';
		if (desiredResult === 'WIN') return 'SCISSORS';
	}

	if (opponentChoice === 'SCISSORS') {
		if (desiredResult === 'WIN') return 'ROCK';
		if (desiredResult === 'LOSE') return 'PAPER';
		if (desiredResult === 'DRAW') return 'SCISSORS';
	}

	throw new Error(`Did not provide proper choices. Given: ${opponentChoice}, ${desiredResult}`);
};

const getScoreFromStrategy = (strategy: Strategy) => {
	const opponentChoice = LETTER_CODES[strategy[0]];
	const desiredResult = LETTER_CODES[strategy[1]];
	const yourChoice = getChoice(opponentChoice, desiredResult);
	return OUTCOMES[desiredResult] + CHOICES[yourChoice];
};

export default () => {
	console.group('Day 2 Part 2');
	console.time('Part 2 Timing');
	let SCORE = 0;
	STRATEGY_GUIDE.forEach((strategy) => {
		SCORE += getScoreFromStrategy(strategy);
	});
	console.log('Part 2 Score: ', SCORE);
	console.timeEnd('Part 2 Timing');
	console.groupEnd();
};
