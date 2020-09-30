const statOptions = [
  {
    type: "értékelt elemek",
    evaluatorFn: (items) => `${ratedItems(items).length}/${items.length}`,
  },
  {
    type: "top értékelés",
    evaluatorFn: (items) => {
      const topItem = maxRating(items);
      return `${topItem.name}\n${topItem.rating}/${topItem.max}`;
    },
  },
  {
    type: "átlagos elégedettség",
    evaluatorFn: (items) => `${averageSatisfactionPercentage(items)}%`,
  },
];
const ratedItems = (items) => items.filter((item) => item.rating);
const maxRating = (items) => ratedItems(items).reduce((prev, cur) => (prev.rating > cur.rating ? prev : cur));
const sumOfRatings = (items) =>
  ratedItems(items)
    .map((item) => item.rating)
    .reduce((sum, cur) => sum + cur);
const sumOfRatingMax = (items) =>
  ratedItems(items)
    .map((item) => item.max)
    .reduce((sum, cur) => sum + cur);
const averageSatisfactionPercentage = (items) => ((100 * sumOfRatings(items)) / sumOfRatingMax(items)).toFixed(2);

export default statOptions;
