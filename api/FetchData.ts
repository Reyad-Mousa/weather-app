// export const fetchData=(url,callback)=>{

// const getWeather = async () => {
//   const api_key = "c365698461fe4ad884c191834242003";
//   const api_url =
//     "https://api.weatherapi.com/v1/current.json?key=" +
//     api_key +
//     "&q=" +
//     location;

//   if (location) {
//     try {
//       const res = await fetch(api_url);
//       const data = await res.json();
//       if (data) {
//         setLocation(data.location);
//         console.log(data);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };