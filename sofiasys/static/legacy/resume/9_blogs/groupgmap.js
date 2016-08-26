var map;
var locationLatLng=new GLatLng(42.280377,-83.746119);

function loadGMap()
{
	if(GBrowserIsCompatible())
	{
	    map=new GMap2(document.getElementById("map"));
	    map.setCenter(locationLatLng,10);
	}
	map.addControl(new GSmallMapControl());
	var marker=new GMarker(locationLatLng);
	GEvent.addListener(marker,'click',markerClick);
	map.addOverlay(marker);
	markerClick();
}

function markerClick()
{
    html="<h3>Next Meeting</h3><p>Thursday, January 13, 2011 19:00 at SRT Solutions, 206 S. Fifth Avenue, Suite 200, Ann Arbor, MI 48104</p>";
    map.openInfoWindowHtml(locationLatLng,html);
}