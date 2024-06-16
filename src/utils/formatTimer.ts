import { DateTime, Duration } from "luxon";

export const formatDuration = (time: number) => {
  return Duration.fromMillis(time)
    .shiftTo("minutes", "seconds")
    .toFormat("mm:ss");
};

export const formatTime = (time: number) => {
  return DateTime.fromMillis(time).toFormat("h:mm:ss a");
};
