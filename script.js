// Récupération des données.
let url = 'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_capteurs-ondes-electomagnetiques-nantes-metropole&q=&rows=69&sort=extractjson_date&facet=name&facet=address'
let result = fetch(url)
    .then(response => response.json())
    .then(data => {   
        //let array = []
        //for (let i = 2; i < data.length; i++) {
            //return data[i]
       // }
    
    //console.log(data)
        let address = data.records[0].fields.address;
        let latestValue =  data.records[0].fields.latest_value;
        let modif = document.getElementById("date1");
                    modif.innerHTML = address + " <br>" + latestValue + " V/m";
    });