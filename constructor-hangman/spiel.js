//Zodiac signs 
//Console log this TO DISPLAY //maybe//
// Capricorn: Jan. 20 – Feb. 16 
// Aquarius: Feb. 16 – March 11 
// Pisces: March 11 – April 18 
// Aries: April 18 – May 13 
// Taurus: May 13 – June 21 
// Gemini: June 21 – July 20 
// Cancer: July 20 – Aug. 10 
// Leo: Aug. 10 – Sept. 16 
// Virgo: Sept. 16 – Oct. 30 
// Libra: Oct. 30 – Nov. 23 
// Scorpio: Nov. 23 – Nov. 29 
// Ophiuchus: Nov. 29 – Dec. 17 
// Sagittarius: Dec. 17 – Jan. 20
var wordsToGuess = ["capricorn", "aquarius", "pisces", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "ophiucus", "sagittarius"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;
