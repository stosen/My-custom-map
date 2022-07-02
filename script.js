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
  // overlay box

  const contentStringBigIsland =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Big Island, HI</h1>' +
    '<div id="bodyContent">' +
    '<p><b>The Hawaii Island</b>, also known as “The Big Island,” is the largest of the island chain. As self-explanatory as it is stunning, the Big Island boasts some of Hawaii’s most varying landscape. Unique in its encompassing 12 separate climate zones, visitors here will marvel at the dramatically different temperatures and scenic beauty that span across each distinct area, ranging from the warmth found amid balmy coastal jungles in Puna to the snowcapped peaks dotting the slopes of <b>Mauna Kea</b>. Beach goers get their fill of sunshine and sand at any of the five star resorts located along the Big Island’s <b>Kona</b> coast and within the resort area of <b>Waikoloa</b>, while those seeking a more quiet, casual experience will adore <b>Hilo</b>, a sleepy little bayside town speckled with small mom-and-pop shops. The must-do on Hawaii Island is a visit to the <b>Hawaii Volcanoes National Park</b>.</p>' +
    '<p>Source: Big Island, <a href="https://www.hawaii.com/big-island/">https://www.hawaii.com/big-island/ </a>' +
    '(last visited July 1, 2022).</p>' +
    '</div>' +
    '</div>'

  const infowindowBI = new google.maps.InfoWindow({
    content: contentStringBigIsland
  })

  const contentStringOahu =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Oahu, HI</h1>' +
    '<div id="bodyContent">' +
    '<p>Sometimes called “The Gathering Place,” <b>Oahu</b> certainly lives up to its name. The third largest Hawaiian island is home to the majority of Hawaii’s diverse population, a fusion of East and West cultures rooted in the values and traditions of the Native Hawaiian people. It’s this fundamental contrast between the ancient and the modern that makes discovering Oahu — from bustling city life to laidback surf towns — so enjoyable. you’ll find plenty of different options for exploring Oahu’s different regions, the island’s many activities, its eclectic restaurants and accommodations. </p>' +
    '<p>Source: Big Island, <a href="https://www.hawaii.com/big-island/">https://www.hawaii.com/big-island/ </a>' +
    '(last visited July 1, 2022).</p>' +
    '</div>' +
    '</div>'

  const infowindowOahu = new google.maps.InfoWindow({
    content: contentStringOahu
  })

  const contentStringMaui =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Maui, HI</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Maui</b>, known also as “The Valley Isle,” is the second largest Hawaiian island. The island beloved for its world-famous beaches, the sacred <b>Iao Valley</b>, views of migrating humpback whales (during winter months), farm-to-table cuisine and the magnificent sunrise and sunset from <b>Haleakala</b>.</p>' +
    '<p>Source: Go Hawaii, <a href="https://www.gohawaii.com/islands/maui">https://www.gohawaii.com/islands/maui </a> </p>' +
    '</div>' +
    '</div>'

  const infowindowMaui = new google.maps.InfoWindow({
    content: contentStringMaui
  })

  const contentStringKauai =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">Kauai, HI</h1>' +
    '<div id="bodyContent">' +
    '<p><b>Kauai</b> is the fourth largest island of Hawaii and is sometimes called the "Garden Island," which is an entirely accurate description. The oldest and northernmost island in the Hawaiian chain is draped in emerald valleys, sharp mountain spires and jagged cliffs aged by time and the elements. Centuries of growth have formed tropical rainforests, forking rivers and cascading waterfalls! Some parts of Kauai are only accessible by sea or air, revealing views beyond your imagination. More than just dramatic beauty, the island is home to a variety of outdoor activities. You can kayak the <b>Wailua River</b>, snorkel on <b>Poipu Beach</b>, hike the trails of <b>Kokee State Park</b>, or go ziplining above the lush valleys of Kauai. But, it is the island’s laid-back atmosphere and rich culture found in its small towns that make it truly timeless.</p>' +
    '<p>Source: Go Hawaii, <a href="https://www.gohawaii.com/islands/kauai">https://www.gohawaii.com/islands/kauai </a> </p>' +
    '</div>' +
    '</div>'

  const infowindowKauai = new google.maps.InfoWindow({
    content: contentStringKauai
  })
}

window.initMap = initMap
