

const WeatherDetails = ({ weather }) => {
  return (
    <div>
      Details:
      <p>{JSON.stringify(weather)}</p>
    </div>
  );
};

export default WeatherDetails;