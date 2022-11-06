export const formatDuration = (value) => {
  const minute = Math.floor(value / 60);
  const secondsLeft = value - minute * 60;
  return `${minute}:${secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}`;
}