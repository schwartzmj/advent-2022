import DAY_2_INPUT from './input.txt?raw';

const STRATEGY_GUIDE: Strategy[] = DAY_2_INPUT.split('\n')
	.map((line) => {
		const strategyTuple = line.split(' ');
		if (strategyTuple.length !== 2) return null;
		return strategyTuple;
	})
	.filter(Boolean) as Strategy[];

// console.log("STRATEGY_GUIDE: ", STRATEGY_GUIDE);

type Strategy = [keyof ILetterCodes, keyof ILetterCodes];

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
	X: keyof IChoices;
	Y: keyof IChoices;
	Z: keyof IChoices;
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
	X: 'ROCK',
	Y: 'PAPER',
	Z: 'SCISSORS'
};

const getOutcome = (
	opponentChoice: keyof IChoices,
	yourChoice: keyof IChoices
): keyof IOutcomes => {
	//   if (opponentChoice === yourChoice) return OUTCOMES.DRAW

	if (opponentChoice === 'ROCK') {
		if (yourChoice === 'ROCK') return 'DRAW';
		if (yourChoice === 'PAPER') return 'WIN';
		if (yourChoice === 'SCISSORS') return 'LOSE';
	}

	if (opponentChoice === 'PAPER') {
		if (yourChoice === 'ROCK') return 'LOSE';
		if (yourChoice === 'PAPER') return 'DRAW';
		if (yourChoice === 'SCISSORS') return 'WIN';
	}

	if (opponentChoice === 'SCISSORS') {
		if (yourChoice === 'ROCK') return 'WIN';
		if (yourChoice === 'PAPER') return 'LOSE';
		if (yourChoice === 'SCISSORS') return 'DRAW';
	}

	throw new Error(`Did not provide proper choices. Given: ${opponentChoice}, ${yourChoice}`);
};

const getScoreFromStrategy = (strategy: Strategy) => {
	const opponentChoice = LETTER_CODES[strategy[0]];
	const yourChoice = LETTER_CODES[strategy[1]];
	const outcome = getOutcome(opponentChoice, yourChoice);
	return OUTCOMES[outcome] + CHOICES[yourChoice];
};

export default () => {
	console.group('Day 2 Part 1');

	console.time('Part 1 Timing');
	let SCORE = 0;

	STRATEGY_GUIDE.forEach((strategy) => {
		SCORE += getScoreFromStrategy(strategy);
	});
	console.timeEnd('Part 1 Timing');

	console.log('Score: ', SCORE);
	console.log('Part 1 Score: ', SCORE);
	console.groupEnd();
};
