// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var service;
var infowindow;

function initMap(bird) {
  var hampton = new google.maps.LatLng();

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: hampton, zoom: 11});

  var request = {
    query: 'operation smiles',
    fields: ['name', 'geometry', 'rating', 'place_id'],
  };
	
	request.query = bird;

  service = new google.maps.places.PlacesService(map);
  


  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function defaultMap() {
  var hampton = new google.maps.LatLng(36.8033612,-76.3337124);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: hampton, zoom: 10});

  var request = {
    query: 'operation smiles',
    fields: ['name', 'geometry', 'rating', 'place_id'],
  };
	
	request.query = bird;

  service = new google.maps.places.PlacesService(map);
  


  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}


function info(_ngo) {
  switch (_ngo) {
    case 'Operation Smiles':
      document.getElementById('label_one').innerText = 'Operations Smiles';
      document.getElementById('label_two').innerHTML = '<a href="https://operationsmile.org">operationsmile.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>Operation Smile is a nonprofit medical service organization founded in 1982 by Dr. William P. Magee, Jr. and his wife Kathy Magee. It is headquartered in Virginia Beach, Virginia. </br> </br>In addition to providing cleft lip and palate repair surgeries to children worldwide, Operation Smile works as a non-governmental organization to reduce the occurrence of cleft lips and palates worldwide; develops ambassadorships to raise awareness of cleft issues; sponsors a world care program for international cases requiring special care; organizes foundations worldwide to assist countries in reaching self-sufficiency with cleft surgeries; hosts a U.S. care network to assist families in the U.S. with cleft issues and develops and administers worldwide education programs related to cleft issues; and organizes student leadership programs.</span>';
      break;
    case 'Samaritan House':
      document.getElementById('label_one').innerText = 'Samaritan House';
      document.getElementById('label_two').innerHTML = '<a href="https://samaritanhouseva.org">samaritanhouseva.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>The increased diversity in Hampton Roads has added cultural, social and economic benefits to our community. Samaritan House is sensitive to the fact that oppressed groups often encounter marginalization and face barriers to receiving support services. We seek to increase access and inclusivity, especially for those who are marginalized, disadvantaged or oppressed. </br> </br> Samaritan House strives to promote equal access to all individuals in need of support services. Samaritan House offers housing, case management, counseling, victim advocacy, transportation, medical assistance, food assistance, group therapy, job training and more to individuals and families experiencing domestic violence, sexual assault, human trafficking or homelessness. We offer these services free from discrimination based on ethnicity, language, race, age, ability, sex, gender identity, sexual orientation, family status, income, immigrant or refugee status, nationality, place of birth, political or religious affiliation.</span>';
      break;
    case 'Make A Wish Foundation':
      document.getElementById('label_one').innerText = 'Make A Wish Foundation';
      document.getElementById('label_two').innerHTML = '<a href="https://wish.org">wish.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>Tens of thousands of volunteers, donors and supporters advance the Make-A-Wish® vision to grant the wish of every child diagnosed with a critical illness. In the United States and its territories, on average, a wish is granted every 34 minutes. We believe a wish experience can be a game-changer. This one belief guides us and inspires us to grant wishes that change the lives of the kids we serve.</span>';
      break;
    case 'Operation Blessing':
      document.getElementById('label_one').innerText = 'Operation Blessing';
      document.getElementById('label_two').innerHTML = '<a href="https://ob.org">ob.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>Operation Blessing Relief and Development Corporation (OB) is a 501(c)(3) nonprofit, humanitarian organization headquartered in the United States. Operation Blessing provides strategic relief in 39 countries around the world on an ongoing basis. Through core programs of disaster relief, medical aid, hunger relief, vulnerable children and orphan care, clean water and community development, OBI is dedicated to demonstrating God’s love by alleviating human need and suffering in the United States and around the world.</span>';
      break;
    case 'Alzheimer\'s Association':
      document.getElementById('label_one').innerText = 'Alzheimer\'s Association';
      document.getElementById('label_two').innerHTML = '<a href="https://alz.org">alz.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>The Alzheimer\'s Association is the leading voluntary health organization in Alzheimer\'s care, support and research. Our mission is to eliminate Alzheimer\'s disease through the advancement of research; to provide and enhance care and support for all affected; and to reduce the risk of dementia through the promotion of brain health.</span>';
      break;
    case 'American Diabetes Association':
      document.getElementById('label_one').innerText = 'American Diabetes Association';
      document.getElementById('label_two').innerHTML = '<a href="https://diabetes.org/">diabetes.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>The American Diabetes Association (ADA) is a United States-based nonprofit that seeks to educate the public about diabetes and to help those affected by it by funding research to manage, cure and prevent diabetes (including type 1 diabetes, type 2 diabetes, gestational diabetes, and pre-diabetes). The organization has engaged telemarketers at very large costs in the past. In one instance, the ADA entered into contract with InfoCision, a telemarketing firm that works closely with nonprofits, whereby only 15% of the expected funds raised would be given to the ADA with the other 85% being kept by the telemarketing firm. Furthermore, the telemarketers were instructed to lie to prospective donors regarding how much of their donation will go to the ADA.</span>';
      break;
    case 'VOLUNTEER Hampton Roads':
      document.getElementById('label_one').innerText = 'VOLUNTEER Hampton Roads';
      document.getElementById('label_two').innerHTML = '<a href="https://volunteerhr.org/">volunteerhr.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>VOLUNTEER Hampton Roads is the only comprehensive volunteer center in Hampton Roads, serving all cities in the Hampton Roads region. We work with our nonprofit members to build their capacity and achieve their missions by providing training, facilitating volunteerism, coordinating large-scale projects, or by complimenting their work through our programs and outreach. As a local leader in nonprofit excellence, we have learned the importance of staying consistent, mission-focused and deepening programs and service deliveries, rather than continually creating new programs and activities. VOLUNTEER Hampton Roads is a member of the Points of Light Global Network, a robust network of innovative, volunteer mobilizing organizations covering 250 cities in the United States and across 37 countries.</span>';
      break;
    case 'USO JEB Little Creek':
      document.getElementById('label_one').innerText = 'USO JEB Little Creek';
      document.getElementById('label_two').innerHTML = '<a href="https://hrcv.uso.org/">hrcv.uso.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>The USO of Hampton Roads and Central Virginia (USOHRCV) is the premier service organization of the United States military and their families in the region serving the largest concentration of military personnel in the country. We are a non-governmental, non-profit 501c (3) organization that receives no direct government funding but relies solely on the generosity of the American People. 100% of Americans enjoy freedom, but only 1% are willing to defend it. We need them. They need us. We need you. It’s your community and your USO, and we matter to those who need us most.</span>';
      break;
    case 'Rotary Club of Norfolk':
      document.getElementById('label_one').innerText = 'Rotary Club of Norfolk';
      document.getElementById('label_two').innerHTML = '<a href="https://rotaryclubofnorfolk.org/">rotaryclubofnorfolk.org</a>';
      document.getElementById('label_tree').innerHTML = '<span><h4>What we do</h4><p>Rotary members believe that we have a shared responsibility to take action on our world’s most persistent issues. Our 35,000+ clubs work together to:</p><ul><li>Promote peace</li><li>Fight disease</li><li>Provide clean water, sanitation, and hygiene</li><li>Save mothers and children</li><li>Support education</li><li>Grow local economies</li></ul><h4>Our mission</h4><p>We provide service to others, promote integrity, and advance world understanding, goodwill, and peace through our fellowship of business, professional, and community leaders.</p></span>';
      break;
    case 'Habitat for Humanity of South Hampton Roads':
      document.getElementById('label_one').innerText = 'Habitat for Humanity of South Hampton Roads';
      document.getElementById('label_two').innerHTML = '<a href="https://shrhabitat.org/">shrhabitat.org</a>';
      document.getElementById('label_tree').innerHTML = '<span>Habitat for Humanity of South Hampton Roads’ mission is to build affordable homes that strengthen families and communities in South Hampton Roads.   We serve all seven geographical entities that comprise South Hampton Roads: Chesapeake, Isle of Wight, Norfolk, Portsmouth, Smithfield, Suffolk, and Virginia Beach.Our Values; Help families realize the dream of homeownership, Advocate for safe and affordable housing, Build communities and partnerships, Inspire faith, love, compassion, and dignity, Teach financial responsibility, Assist growth through focused action, Trust through transparency.</span>';
      break;
    case 'Orphan\'s Promise':
      document.getElementById('label_one').innerText = 'Orphan\'s Promise';
      document.getElementById('label_two').innerHTML = '<a href="https://orphanspromise.org/">orphanspromise.org</a>';
      document.getElementById('label_tree').innerHTML = '<span><p>We love and serve orphaned and at-risk children. We help keep families together. We create opportunities for strong, sustainable communities.</p><p>We work with the lost, the lonely, the abandoned and the abused. We seek out those who are unloved and uncared for. Our organization was founded on the promise of taking children from dangerous, at-risk situations, and helping them thrive so that they can live full of hope and realize their God-given potential.</p><p>We go wherever there is an opportunity to impact children in need with a life-changing message of love and hope. We are currently operating in 61 countries, and always watching to see where God opens doors for love to enter a community and begin transforming children and families.</p></span>';
      break; 
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
