export const convertWindSpeed = (speed) => Math.round((speed * 3600) / 1000);

export const convertDegreesToDirection = (deg) => {
  const directions = [
    'N',
    'NE',
    'E',
    'SE',
    'S',
    'SW',
    'W',
    'NW',
  ];

  deg *= directions.length / 360;
  deg = Math.round(deg, 0);
  deg = (deg + directions.length) % directions.length;

  return directions[deg];
};

export const getLocaleTime = (UTCTime, Timezone) => {
  const time = new Date((UTCTime + Timezone) * 1000);

  return [
    time.getUTCHours() < 10 
      ? '0' + time.getUTCHours()
      : time.getUTCHours(),
        
        time.getUTCMinutes() < 10 
      ? '0' + time.getUTCMinutes()
      : time.getUTCMinutes()
  ].join(':');
};