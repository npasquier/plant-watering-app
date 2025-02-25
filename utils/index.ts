export async function fetchPlants({
  plantCommonName,
  maxPage,
}: {
  plantCommonName: string;
  maxPage: string;
}): Promise<any> {
  const APIKeyPlant = process.env.API_KEY_PLANT;

  const urls = [];

  for (let i = 1; i <= Number(maxPage); i++) {
    urls.push(
      `https://perenual.com/api/species-list?page=${i}&key=${APIKeyPlant}&q=${plantCommonName}`
    );
  }

  const result2 = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      const dataFrame = await response.json();
      return dataFrame.data;
    })
  );

  const dataFrame = await Promise.resolve(result2).then(() => {
    return result2.flat();
  });

  return dataFrame.slice(0, 28 + 28 * (Number(maxPage) - 1));
}

export async function fetchDetails(plantId: number): Promise<any> {
  const APIKeyPlant = process.env.API_KEY_PLANT;

  const response = await fetch(
    `https://perenual.com/api/species-care-guide-list?species_id=${plantId}&key=${APIKeyPlant}`
  );

  const result = await response.json();

  //I Have sliced the response !!!!Because I want to test the website fitst */

  return result.data[0];
}

export async function fetchYesterdayWeather({
  city,
}: {
  city: string;
}): Promise<any> {
  const APIkeyWeather = process.env.API_KEY_WEATHERAPI;

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const todayISO = today.toISOString().split("T")[0];
  const yesterdayISO = yesterday.toISOString().split("T")[0];

  const response = await fetch(
    `http://api.weatherapi.com/v1/history.json?key=${APIkeyWeather}&q=${city}&dt=${yesterdayISO}`,
    { cache: "no-cache" }
  );

  const result = await response.json();

  return result;
}

export function mapWatering(word: string) {
  if (word === "Frequent") {
    return { text: "2x/week", number: 2 };
  }
  if (word === "Average") {
    return { text: "1x/week", number: 1 };
  }
  if (word === "Minimum") {
    return { text: "once every 1.5-2 weeks", number: 0 };
  }
  if (word === "None") {
    return { text: "No need", number: 0 };
  } else {
    return { text: "unknown", number: -1 };
  }
}

export function getWeekNumber(d: any) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(((d - Number(yearStart)) / 86400000 + 1) / 7);
  // Return array of year and week number
  return weekNo;
}

export async function getGeocode(city: string) {
  const APIGeocode = `${process.env.API_NINJAS_KEY}`;
  const response = await fetch(
    `https://api.api-ninjas.com/v1/geocoding?city=${city}`,
    {
      method: "GET",
      headers: {
        "X-Api-Key": APIGeocode,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

// ex: getWeekNumber(new Date())
