const xhr = new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType = "json";
xhr.onload=function displayResult(){
    const countries = xhr.response;
    console.log("no of countries: ",countries.length);
    for(i=0;i<countries.length;i++){
        console.log(`country name:${countries[i].name.common},region:${countries[i].region},sub region:${countries[i].subregion} and population:${countries[i].population}`);
    }
};