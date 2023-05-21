const CastInfo = ({ casts }) => {
  return (
    <ul>
      {casts.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : 'https://via.placeholder.com/120x180'
            }
            alt={name}
            width="120px"
            height="auto"
          />
          {name}
        </li>
      ))}
    </ul>
  );
};
export default CastInfo;
