<template>
  <div id="app">
  <div class="jumbotron-fluid">
    <div class="container-fluid">
      <h1 class="display-4" id="dis4">Hello Tempo 2.0</h1>
      <h3 id="sub">Bienvenue à notre 1er App VueJS</h3><br><br>
      <div class="container">
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search..."  v-model="city"  @keyup.enter="getWeather(city)" id="Search">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">OK</button>
          </div>
          <div class="container-fluid">
            <div class="grid-container">
                <div class="grid-item">
                  <table>
                    <tr>
                      <th>
                        <h1 id="currTempo">{{city}}</h1>
                        <h4><img :src="icon" width="50">{{overcast}}</h4>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <h1 class="display-4">{{currentTemp}}</h1> 
                      </td>
                    </tr>
                    <tr>
                      <td>{{minTemp}}</td>
                    </tr>
                    <tr>
                      <td>{{maxTemp}}</td>
                    </tr>
                    <tr>
                      <td>{{humidity}}</td>
                    </tr>
                  </table>
                </div>
                <div class="grid-item">
                <table>
                    <tr>
                      <th>
                        <h1 id="currTempo">{{ day2 | moment("dddd") }}</h1>
                        <h4><img :src="icon2" width="50">{{overcast2}}</h4>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <h1 class="display-4">{{currentTemp2}}</h1> 
                      </td>
                    </tr>
                    <tr>
                      <td>{{minTemp2}}</td>
                    </tr>
                    <tr>
                      <td>{{maxTemp2}}</td>
                    </tr>
                    <tr>
                      <td>{{humidity2}}</td>
                    </tr>
                  </table>
                </div>
                <div class="grid-item">
                  <table>
                    <tr>
                      <th>
                        <h1 id="currTempo">{{ day3 | moment("dddd") }}</h1>
                        <h4><img :src="icon3" width="50">{{overcast3}}</h4>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <h1 class="display-4">{{currentTemp3}}</h1> 
                      </td>
                    </tr>
                    <tr>
                      <td>{{minTemp3}}</td>
                    </tr>
                    <tr>
                      <td>{{maxTemp3}}</td>
                    </tr>
                    <tr>
                      <td>{{humidity3}}</td>
                    </tr>
                  </table>
                </div>  
                <div class="grid-item">
                  <table>
                    <tr>
                      <th>
                        <h1 id="currTempo">{{ day4 | moment("dddd") }}</h1>
                        <h4><img :src="icon4" width="50">{{overcast4}}</h4>
                      </th>
                    </tr>
                    <tr>
                      <td>
                        <h1 class="display-4">{{currentTemp4}}</h1> 
                      </td>
                    </tr>
                    <tr>
                      <td>{{minTemp4}}</td>
                    </tr>
                    <tr>
                      <td>{{maxTemp4}}</td>
                    </tr>
                    <tr>
                      <td>{{humidity4}}</td>
                    </tr>
                  </table>
                </div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
     
   </div>
  </div>
</template>

<script>

export default {
  name: 'app',

  data() {
  return{
    input:'',
    currentTemp: '',
    minTemp: '',
    maxTemp:'',
    sunrise: '',
    sunset: '',
    pressure: '',
    humidity: '',
    wind: '',
    overcast: '',
    city:''
}
  },

  methods: {
    getWeather(city) {

  var url = 'http://api.openweathermap.org/data/2.5/forecast?q='+city+'&lang=fr&units=metric&APPID=80f4e97b45d5fb07fd202e4e16e0df47';
  this.axios.get(url).then((response) => {console.log(response.data)})
 axios
    .get(url)
    .then(response => {

      // aujourd'hui
        this.day=response.data.list[0].dt_txt;
        this.icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
       this.currentTemp = response.data.list[0].main.temp+"°C";
       this.overcast = response.data.list[0].weather[0].description;
       this.icon = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";
       this.minTemp ="Min: " + response.data.list[0].main.temp_min+"°C" ;
       this.maxTemp ="Max: " + response.data.list[0].main.temp_max+"°C";
       this.pressure = response.data.list[0].main.pressure;
       this.humidity ="Humidity: "+ response.data.list[0].main.humidity + '%';
      // Jour 2
      this.day2=response.data.list[8].dt_txt;
      this.icon2 = "http://openweathermap.org/img/w/" + response.data.list[8].weather[0].icon + ".png";
     this.currentTemp2 = response.data.list[8].main.temp+"°C";
     this.overcast2 = response.data.list[8].weather[0].description;
     this.minTemp2 = "Min: " + response.data.list[8].main.temp_min+"°C" ;
     this.maxTemp2 = "Max: " +response.data.list[8].main.temp_max+"°C";
     this.pressure2 = response.data.list[8].main.pressure;
     this.humidity2 = "Humidity: " +response.data.list[8].main.humidity + '%';
     // Jour 3
     this.day3=response.data.list[16].dt_txt;
     this.icon3 = "http://openweathermap.org/img/w/" + response.data.list[16].weather[0].icon + ".png";
    this.currentTemp3 = response.data.list[16].main.temp +"°C";
    this.overcast3 = response.data.list[16].weather[0].description;
    this.minTemp3 = "Min: " + response.data.list[16].main.temp_min+"°C" ;
    this.maxTemp3 = "Max: " +response.data.list[16].main.temp_max+"°C";
    this.pressure3 = response.data.list[16].main.pressure;
    this.humidity3 ="Humidity: " + response.data.list[16].main.humidity + '%';
    // jour 4
    this.day4=response.data.list[24].dt_txt;
    this.icon4 = "http://openweathermap.org/img/w/" + response.data.list[24].weather[0].icon + ".png";
   this.currentTemp4 = response.data.list[24].main.temp +"°C";
   this.overcast4 = response.data.list[24].weather[0].description;
   this.minTemp4 ="Min: " + response.data.list[24].main.temp_min+"°C" ;
   this.maxTemp4 ="Max: " + response.data.list[24].main.temp_max+"°C";
   this.pressure4 = response.data.list[24].main.pressure;
   this.humidity4 ="Humidity: " + response.data.list[24].main.humidity + '%';
   //jour 5
   this.day5=response.data.list[32].dt_txt;
   this.icon5 = "http://openweathermap.org/img/w/" + response.data.list[32].weather[0].icon + ".png";
  this.currentTemp5 = response.data.list[32].main.temp_kf+"°C";
  this.overcast5 = response.data.list[32].weather[0].description;
  this.minTemp5 ="Min: " +response.data.list[32].main.temp_min+"°C" ;
  this.maxTemp5 = response.data.list[32].main.temp_max+"°C";
  this.pressure5 = response.data.list[32].main.pressure;
  this.humidity5= response.data.list[32].main.humidity + '%';
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
  beforeMount() {
    this.getWeather();
  },

}
</script>

<style lang="scss">
#app{
  height: 100%;
}
body{
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.button-addon2{
  background-color: #000!important;
  color: #fff;
}
.navbar{
  background-color: #1c2d3e!important;
}
table {
    border: 0,5px solid #fff;
    width: 100%;
    line-height: 15px;
    text-align: left;
    margin: auto auto;
    font-family: 'Roboto', sans-serif;  
    }
    th {
      text-transform: uppercase;
      text-align: left;
      background-color: none;
      color: white;
    }
    th, td {
      font-weight: bold;
      text-align: left;
      padding: 8px;
    }
    tr:nth-child(even) {
      background-color: none;
    }
footer{
  background-color: #1c2d3e!important;
}
.grid-container {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    display: grid;
    padding: 10px;
}
.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.cityTemp{
  font-size: 50px;
  font-weight: bold;
}

.jumbotron-fluid{
  background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://bit.ly/2uKYpUJ');
  background-size: cover;
  height: 1200px;
  color: white;
  font-family: 'Roboto', sans-serif;
}
#dis4{
  margin-left: 80px;
  padding-top: 40px;
}
#currTemp{
  font-size: 80px;
}
#currTempo{
  font-size: 40px;
}


#subRight{
  text-align: right;
  padding-right: 40px; 
  margin-top: -80px;
}
#subTemp{
  line-height: 30px;
  text-align: center;
  margin-left: 40px;
}

#sub{
  margin-left: 80px;
}
#search {
  font-family: 'Arial', sans-serif;
  border: 2px solid black;
  border-radius : 10px;
  height:55px;
  width:400px!important;
  font-size:30px;
  padding-left: 20px;
}
#logo {
  margin-left:80px;
  margin-top:100px;
  position:relative;
}
#meteo {
  font-size:25px;
  color:white;
}


</style>
