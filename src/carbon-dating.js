const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let time = 0;
  if(!(typeof sampleActivity == 'string') || !parseFloat(sampleActivity) || (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)) return false;
  time = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(time);
};
