export const renderDateRange = (startYear: number, endYear?: number): string => {
  if (startYear === endYear) {
    return startYear.toString();
  } else if (!endYear) {
    return `${startYear} - Present`
  } else {
    return `${startYear} - ${endYear}`;
  }
}
