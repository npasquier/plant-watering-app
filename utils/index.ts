
export async function fetchPlants({plantCommonName, maxCards}: { plantCommonName: string, maxCards : string }): Promise<any>{
  const APIKeyPlant = process.env.API_KEY_PLANT;

  const response = await fetch(
    `https://perenual.com/api/species-list?page=1&key=${APIKeyPlant}&q=${plantCommonName}`
  );

  const result = await response.json();

  //I Have sliced the response !!!!Because I want to test the website fitst */

  return result.data.slice(0, Number(maxCards));
}

export async function fetchYesterdayWeather({ city }: { city: string }): Promise<any> {
  const APIkeyWeather = process.env.API_KEY_WEATHERAPI;

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const todayISO = today.toISOString().split("T")[0];
  const yesterdayISO = yesterday.toISOString().split("T")[0];

  const response = await fetch(
    `http://api.weatherapi.com/v1/history.json?key=${APIkeyWeather}&q=${city}&dt=${yesterdayISO}`,
    {cache: "no-cache"}
  );

  const result = await response.json();

  return result;
}


export function mapWatering(word : string) {
  if(word==="Frequent") {
    return {text :"twice per week", number : 2}
  }
  if(word==="Average") {
    return {text : "once a week", number : 1}
  }
  if(word==="Frequent") {
    return {text : "once every 1.5-2 weeks", number : 0 }
  }
  else {
    return {text : "unknown", number : -1 }
  }
}


export function getWeekNumber(d : any) {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil(( ( (d - Number(yearStart)) / 86400000) + 1)/7) ;
  // Return array of year and week number
  return weekNo;
}

// ex: getWeekNumber(new Date())

