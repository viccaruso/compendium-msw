export async function fetchFoods() {
  const res = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${process.env.DATAGOV_API_KEY}`
  );
  const json = await res.json();
  return json;
}
