// const baseUrl = "https://v1.motorapi.dk/vehicles"




// Vue.createApp({
//     data() {
//         return {
//             Car: null,
//             LicensePlate: null
//         }
//     },
    
//     methods: {
//         async getCarByPlate(LicensePlate) {
//             const url = baseUrl + "/" + LicensePlate
//             console.log(url)
//             try {
//                 const response = await axios.get(url, {headers: {
//                     "X-AUTH-TOKEN" : "ssft8h1cjzu398779rtcubbcoz5q6yiw"
//                   }
//                 })
//                 this.Car = await response.data
//             } catch (ex) {
//                 alert(ex.message)
//             }
//         }
//     }
// }).mount("#app")