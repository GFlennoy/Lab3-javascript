let name = "Grant Flennoy";
let age = 34;
let birthday = "April 27";
let detroitGC = true;
lifeEvents = [
  "I'm originally from Novi but now live in Ferndale",
  "I like tacos de Pastor",
  "I went to Michigan State University",
  "I drive a Jeep"
];
if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} and my birthday is on ${birthday}.`
  );
}
for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5 === 5 it took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
