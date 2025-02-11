export const groupCrewPeople = (crew) =>
  Object.values(
    crew.reduce((acc, { id, name, job, profile_path }) => {
      acc[name] ??= { id, name, profile_path, jobs: [] };
      acc[name].jobs.push(job);
      return acc;
    }, {})
  );

export const groupCrewMovies = (crew) =>
  Object.values(
    crew.reduce((acc, { id, job, ...movie }) => {
      acc[id] ??= { ...movie, jobs: [] };
      acc[id].jobs.push(job);
      return acc;
    }, {})
  );
