var mapLocation = new google.maps.LatLng(-37.816248, 144.965981); //change coordinates here
var marker;
var map;
function initialize() {
    var mapOptions = {
        zoom: 14, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#f6954d"}]},
            {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#e3e2e2"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#a4c4c8"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
     
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<div class="brand" href="#"><img alt="" src="images/logo.png"><div class="brand-info"><div class="brand-name">sayiç</div><div class="brand-text">mimarlık</div></div></div></div>' 
    + '<div class="map-address-row">'
    + '  <span class="text"><strong class="text-dark">Kadıköy - İstanbul ,Türkiye</strong><br>'
    + '  Kozyatağı mah.Oral sokak Bahar apt. 8-10/9 Kadıköy/Kozyatağı</span>'
    + '</div>'
    + '<div>'
    + '   <span class="text"><strong class="text-dark">Phone:</strong> +90 (535) 799 43 33</span>'
    + '</div>'
    + '<div class="map-address-row">'
    + '   <span class="map-email">'
    + '      <span class="text"><strong class="text-dark">Email:</strong> info@sayicmimarlik.com</span>'
    + '   </span>'
    + '</div>' 
    + '<p class="gmap-open"><a href="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.651853812397!2d29.085643351219417!3d40.96720502979811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac716ce0dc8a7%3A0xc6693e0f9e76f1a3!2zU0FZxLDDhyBNxLBNQVJMSUs!5e0!3m2!1str!2str!4v1641379931250!5m2!1str!2str" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    // Uncomment down to show Marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Bauhaus', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });



    // Uncomment down to show info window on marker
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

