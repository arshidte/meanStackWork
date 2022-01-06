var dataset=[
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:32},
    {district:"tvm",temparature:29},
]

var weather_data = {};

for(let data of dataset){
    var curTemp = data.temparature;
    var distName = data.district;
    if(distName in weather_data){
        var oldTemp = weather_data[distName];
        if(curTemp>oldTemp){
            weather_data[distName]=curTemp;
        }
    }else{
        weather_data[distName] = curTemp;
    }
}

console.log(weather_data);