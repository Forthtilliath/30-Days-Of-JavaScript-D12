import {
  cleanText,
  exo1_part1,
  exo1_part2,
  exo1_part3,
  mostFrequentWords,
  setupMostFrequentWords,
} from './src';

// https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/12_Day_Regular_expressions/12_day_regular_expressions.md#exercises-level-1
console.clear();

display_exo1();
display_exo2();
display_exo3();

function display_exo1() {
  console.log('===== Exercice 1 =====');

  console.log(
    exo1_part1(
      'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
    )
  );
  console.log(
    exo1_part2(
      'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
    )
  );
  console.log(exo1_part3('first_name'));
  console.log(exo1_part3('first-name'));
  console.log(exo1_part3('1first_name'));
  console.log(exo1_part3('firstname'));
}

function display_exo2() {
  console.log('===== Exercice 2 =====');
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  console.log(mostFrequentWords(paragraph));

  const tenMostFrequentWords = setupMostFrequentWords(10);
  console.log(tenMostFrequentWords(paragraph));
}

function display_exo3() {
  console.log('===== Exercice 3 =====');

  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
  const cleanedText = cleanText(sentence);
  console.log(cleanedText);

  const threeMostFrequentWords = setupMostFrequentWords(3);
  console.log(threeMostFrequentWords(cleanedText));
}
