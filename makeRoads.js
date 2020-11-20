
//adauga nodurile care vrei sa le deblochezi
var items = ["Edinburgh", "Juneau", "Oaxaca", "Brisbane", "Pietermaritzburg", "Krasnoyarsk", "Punta Arenas", "Kaohsiung", "Kano"];

//modifica la ambele unde vrei sa pornesti
var order = "Rome";
var startPoint = "Rome";

console.log("De la " + order + " prin " + items.join(" -> "))

makeRoads("Brasilia", "Salvador", 4);
makeRoads("Paris", "London", 4, "Berlin", 2, "Santiago de Compostela", 1, "Rome", 2);
makeRoads("Berlin", "Paris", 2, "Riga", 4, "Antalya", 4);
makeRoads("Rome", "Paris", 2, "Cairo", 4);
makeRoads("Ottawa", "Iqaluit", 2, "Saint Paul", 2);
makeRoads("Edmonton", "Yellowknife", 4, "Juneau", 2, "Cheyenne", 8);
makeRoads("Whitehorse", "Yellowknife", 4);
makeRoads("Manaus", "Salvador", 4, "Tallahassee", 4, "Cali", 4);
makeRoads("Cagliari", "Cairo", 4, "Lisbon", 2);
makeRoads("London", "Paris", 2, "Edinburgh", 1);
makeRoads("Edinburgh", "London", 4);
makeRoads("Sacramento", "Mexicali", 4, "Victoria", 1);
makeRoads("Cheyenne", "Edmonton", 2, "Saint Paul", 2, "Mexicali", 4);
makeRoads("Saint Paul", "Cheyenne", 8, "Ottawa", 4, "Tallahassee", 4);
makeRoads("Tallahassee", "Saint Paul", 2, "Havana", 12, "Culiacan", 4, "Ponta Delgada", 8);
makeRoads("Juneau", "Yellowknife", 4, "Edmonton", 2);
makeRoads("Yellowknife", "Whitehorse", 1, "Iqaluit", 2, "Edmonton", 2, "Juneau", 2);
makeRoads("Victoria", "Sacramento", 4);
makeRoads("Moscow", "Umea", 8, "Riga", 4, "Volgograd", 4);
makeRoads("Tokyo", "Cheongju", 4);
makeRoads("Mendoza", "Neuquen", 4);
makeRoads("Neuquen", "Mendoza", 12, "Santiago", 12, "Porto Alegre", 1, "Punta Arenas", 1);
makeRoads("Iqaluit", "Ottawa", 4, "Yellowknife", 4);
makeRoads("Mexicali", "Sacramento", 4, "Culiacan", 4, "Cheyenne", 8);
makeRoads("Culiacan", "Mexicali", 4, "Tallahassee", 4, "Oaxaca", 1);
makeRoads("Oaxaca", "Cali", 4, "Culiacan", 4);
makeRoads("Salvador", "Brasilia", 12, "Manaus", 8, "Porto Alegre", 1, "Las Palmas de Gran Canaria", 1);
makeRoads("Lisbon", "Ponta Delgada", 8, "Las Palmas de Gran Canaria", 1, "Cagliari", 4);
makeRoads("Ponta Delgada", "Lisbon", 2, "Tallahassee", 4, "Santiago de Compostela", 1, "Las Palmas de Gran Canaria", 1);
makeRoads("Santiago de Compostela", "Ponta Delgada", 8, "Paris", 2);
makeRoads("Las Palmas de Gran Canaria", "Ponta Delgada", 8, "Lisbon", 2, "Lagos", 8, "Salvador", 4);
makeRoads("Rovaniemi", "Umea", 8);
makeRoads("Tromso", "Umea", 8);
makeRoads("Umea", "Tromso", 2, "Rovaniemi", 1, "Moscow", 1);
makeRoads("Brisbane", "Melbourne", 4, "Wellington", 12);
makeRoads("Melbourne", "Brisbane", 1, "Perth", 2, "Darwin", 2);
makeRoads("Perth", "Polokwane", 4, "Darwin", 2, "Melbourne", 4);
makeRoads("Darwin", "Kuching", 8, "Melbourne", 4, "Perth", 2);
makeRoads("Changchun", "Sapporo", 1, "Khabarovsk", 8, "Hohhot", 1, "Pyongyang", 12);
makeRoads("Xining", "Urumqi", 8, "Hohhot", 1, "Chengdu", 4);
makeRoads("Jinan", "Cheongju", 4, "Chengdu", 4);
makeRoads("Chengdu", "Jinan", 1, "Xining", 4, "Kunming", 2);
makeRoads("Kunming", "Chengdu", 4, "Bangkok", 4);
makeRoads("Hohhot", "Xining", 4, "Changchun", 4, "Khabarovsk", 8);
makeRoads("Urumqi", "Novosibirsk", 8, "Patna", 1, "Xining", 4, "Tehran", 1);
makeRoads("Shanghai", "Kaohsiung", 1, "Kuching", 8, "Bangkok", 4);
makeRoads("Mumbai", "Patna", 1, "Thiruvananthapuram", 12, "Dammam", 4);
makeRoads("Thiruvananthapuram", "Mumbai", 2);
makeRoads("Patna", "Mumbai", 2, "Islamabad", 12, "Urumqi", 8);
makeRoads("Tehran", "Urumqi", 8, "Antalya", 4);
makeRoads("Sapporo", "Changchun", 4);
makeRoads("Islamabad", "Patna", 1);
makeRoads("Bhisho", "Polokwane", 4);
makeRoads("Pietermaritzburg", "Polokwane", 4);
makeRoads("Polokwane", "Cape Town", 1, "Bhisho", 1, "Pietermaritzburg", 2, "Perth", 2, "Lagos", 8, "Jizan", 4);
makeRoads("Cape Town", "Polokwane", 4);
makeRoads("Bangkok", "Jizan", 4, "Kunming", 2, "Shanghai", 4, "Kuching", 8);
makeRoads("Antalya", "Berlin", 2, "Moscow", 1, "Tehran", 1, "Dammam", 4, "Cairo", 4);
makeRoads("Cheongju", "Tokyo", 1, "Jinan", 1);
makeRoads("Krasnoyarsk", "Khabarovsk", 8, "Novosibirsk", 8, "Arhangelsk", 1);
makeRoads("Khabarovsk", "Krasnoyarsk", 2, "Hohhot", 1, "Changchun", 4);
makeRoads("Arhangelsk", "Krasnoyarsk", 2);
makeRoads("Volgograd", "Moscow", 1, "Yekaterinburg", 1, "Novosibirsk", 8);
makeRoads("Yekaterinburg", "Volgograd", 4, "Novosibirsk", 8);
makeRoads("Novosibirsk", "Krasnoyarsk", 2, "Urumqi", 8, "Yekaterinburg", 1, "Volgograd", 4);
makeRoads("Antofagasta", "Iquitos", 1, "Porto Alegre", 1);
makeRoads("Santiago", "Neuquen", 4);
makeRoads("Punta Arenas", "Neuquen", 4);
makeRoads("Kuching", "Darwin", 2, "Bangkok", 4, "Shanghai", 4);
makeRoads("Porto Alegre", "Neuquen", 4, "Antofagasta", 4, "Salvador", 4);
makeRoads("Riga", "Berlin", 2, "Moscow", 1);
makeRoads("Pyongyang", "Changchun", 4);
makeRoads("Pozo Colorado", "Iquitos", 1);
makeRoads("Iquitos", "Cali", 4, "Antofagasta", 4, "Pozo Colorado", 12);
makeRoads("Cali", "Iquitos", 1, "Oaxaca", 1, "Manaus", 8);
makeRoads("Kaohsiung", "Shanghai", 4);
makeRoads("Wellington", "Brisbane", 1);
makeRoads("Siwa", "Cairo", 4, "Las Palmas de Gran Canaria", 1);
makeRoads("Cairo", "Siwa", 4, "Rome", 2, "Cagliari", 4, "Antalya", 4, "Dammam", 4);
makeRoads("Dammam", "Mumbai", 2, "Cairo", 4, "Antalya", 4);
makeRoads("Jizan", "Bangkok", 4, "Polokwane", 4);
makeRoads("Kano", "Maiduguri", 2, "Lagos", 8);
makeRoads("Lagos", "Kano", 1, "Polokwane", 4, "Las Palmas de Gran Canaria", 1);
makeRoads("Maiduguri", "Kano", 1);
makeRoads("Havana", "Tallahassee", 4);

while ( items.length > 0){

	var minDist = 100;
	var ClosestItem;
	
	for(i=0 ; i<items.length ; i++){
		if(Dijkstra(roads, startPoint, items[i]) < minDist){
			minDist = Dijkstra(roads, startPoint, items[i]);
			ClosestItem = items[i];
		}
	}

	startPoint = ClosestItem;
	order += " --> " + startPoint;

	var index = items.indexOf(ClosestItem);
	if (index > -1) {
   		items.splice(index, 1);
	}

}
console.log(order);