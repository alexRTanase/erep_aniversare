
function Dijkstra(roads, source, dest) {
  var inf = Number.POSITIVE_INFINITY;
  var distance = {};
  var done = {};
  var pred = {};
  for (var i in roads) {
    distance[i] = inf;
    pred[i] = 0;
    done[i] = false;
  }

  distance[source] = 0;
     
  for (i in roads) {
    var minDist = inf, closest;
    for (var j in roads) {
      if (!done[j]) {
        if (distance[j] <= minDist) {
          minDist = distance[j];
          closest = j;
        }
      }
    }
    done[closest] = true;
    if (closest === dest) {
      break;
    }
        
    var neighbors = roadsFrom(closest);
    for (var nb in neighbors) {
      var w = neighbors[nb];
      if (!done[nb]) { 
        if (distance[closest] + w < distance[nb]) {
          distance[nb] = distance[closest] + w;
          pred[nb] = closest;
        }// if
      }// if
    }//for 
  }// for(i in roads) 

  i = dest;
  if (distance[i] < inf) {
    var thePath = i;
    var place = i;
    while (place !== source) {
      place = pred[place];
      if (place !== source) {
        thePath = place + '->' + thePath;
      }
    }
    thePath = place + '->' + thePath;
    console.log("Durata pentru " + dest + " plecand din " + source + " : " + distance[i] + ' (' + thePath + ')');
    return distance[i];
  } else {
    console.log("no path");
  }
}

var roads = {};
function makeRoad(from, to, length) {
  function addRoad(from, to) {
    if (!(from in roads)) {
      roads[from] = {};
    }
    roads[from][to] = length;
  }
  addRoad(from, to);
  addRoad(to, from);
}

function makeRoads(start) {
  for (var i = 1; i < arguments.length; i += 2) {
    makeRoad(start, arguments[i], arguments[i + 1]);
  }
}

function roadsFrom(place) {
  var found = roads[place];
  if (found === undefined) {
    console.log("No place named '" + place + "' found.");
  } else {
    return found;
  }
}

