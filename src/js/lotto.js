const NUMBER_OF_LOTTO_NUMBERS = 6;
const MIN_LOTTO_NUMBER = 1;
const MAX_LOTTO_NUMBER = 45;

const ALL_LOTTO_NUMBERS = Array.from(
  {
    length: MAX_LOTTO_NUMBER - MIN_LOTTO_NUMBER + 1,
  },
  (v, i) => i + MIN_LOTTO_NUMBER
);
Object.freeze(ALL_LOTTO_NUMBERS);

export const generateRandomLottoNumbers = () => {
  const selectableLottoNumbers = [...ALL_LOTTO_NUMBERS];
  const randomLottoNumbers = [];

  Array.from({ length: NUMBER_OF_LOTTO_NUMBERS }).forEach(() => {
    const randomIndex = getRandomIntInclusive(
      0,
      selectableLottoNumbers.length - 1
    );
    randomLottoNumbers.push(selectableLottoNumbers[randomIndex]);
    selectableLottoNumbers.splice(randomIndex, 1);
  });
  randomLottoNumbers.sort();
  return randomLottoNumbers;
};

// Copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};