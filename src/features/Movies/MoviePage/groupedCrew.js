export const groupCrew = (crew) => {
  const groupedCrew = crew.reduce((groupedCrew, crewMember) => {
    const { name, job, profile_path } = crewMember;

    if (groupedCrew[name]) {
      groupedCrew[name].jobs.push(job);
    } else {
      groupedCrew[name] = {
        name,
        profile_path,
        jobs: [job],
      };
    }
    return groupedCrew;
  }, {});
  return Object.values(groupedCrew);
};
