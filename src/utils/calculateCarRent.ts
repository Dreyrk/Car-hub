export default function calculateCarRent(
  city_mpg: number,
  year: number
): number {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  //Calculate additional rate based on mileage
  const mileageRate = city_mpg * mileageFactor;
  //Calculate additional rate based on age
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  //Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return Math.round(rentalRatePerDay);
}
