export const formatDate = (date) => {
    if (date) {
      const [year, month, day] = date.split("-");
      return `${day}.${month}.${year}`;
    }
    return "N/A";
  };