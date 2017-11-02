$(document).ready(function(){

    $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=vz1DB63uClneCNu9CrL96HK3uJGzqlsggBxx6g4u', function(data){

        var asteroidArr = [];
        var velocity = $('#velocity');
        var maxDiameter = $('#maxDiameter');
        var distance = $('distance');

        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-18&end_date=2017-10-25&api_key=vz1DB63uClneCNu9CrL96HK3uJGzqlsggBxx6g4u');
        xhttp.onload = function(){

            for(var day in data.near_earth_objects){

                for(var j =0; j < data.near_earth_objects[day].length; j++){

                    if(data.near_earth_objects[day][j]['is_potentially_hazardous_asteroid'] === true){
                        asteroidArr.push(data.near_earth_objects[day][j]);
                    }
                }

            }

            for(var i =0; i < asteroidArr.length; i++){

                var name = asteroidArr[i].name;
                var velocity = (asteroidArr[i].close_approach_data[0]['relative_velocity'].miles_per_hour);
                var maxDiameter = (asteroidArr[i].estimated_diameter.feet.estimated_diameter_max);
                var distance = (asteroidArr[i].close_approach_data[0]['miss_distance'].miles);
                var asteroid = `<h1>Name: ${name}</h1><h3>Velocity: ${velocity}(MPH)</h3><h3>Max Diameter: ${maxDiameter}(ft)</h3><h3>Distance: ${distance}(miles)<h3>`;
                $('body').append(asteroid);
            };
            console.log(data);
            //console.log(asteroidArr[0].close_approach_data[0]['miss_distance'].astronomical);

        //console.log(asteroidArr[0].estimated_diameter);
        //console.log(data.near_earth_objects[`${data.near_earth_objects[2]}`]);

        //console.log(data.near_earth_objects[2]);
        //console.log(data.near_earth_objects);
        //console.log(data.near_earth_objects['2017-10-18']);
        };
          xhttp.send();
    });
});
