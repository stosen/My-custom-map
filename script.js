// Initialize and add the map
const initMap = () => {
  // The location of Big Island
  const bigIsland = { lat: 19.568694, lng: -155.654428 }
  // The location of Maui
  const maui = { lat: 20.814321729941362, lng: -156.32978193167554 }
  // The location of Kauai
  const kauai = { lat: 22.107831454996642, lng: -159.52709513605495 }
  // The location of Oahu
  const oahu = { lat: 21.454301796912564, lng: -157.99957028630436 }

  // The map, centered in Maui, HI
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7.5,
    center: maui,
    mapId: '38a03f24376fff1d'
  })
}

window.initMap = initMap
