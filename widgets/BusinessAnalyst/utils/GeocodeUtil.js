// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["esri/request","jimu/portalUtils"],function(c,d){return{reverseGeocode:function(b){return d.getPortal(portalUrl).loadSelfInfo().then(function(a){return c({url:(a&&a.isPortal&&a.helperServices&&a.helperServices.geocode&&0<a.helperServices.geocode.length?a.helperServices.geocode[0].url:"https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer")+"/reverseGeocode",content:{appID:"webappbuilder",f:"json",langCode:"en-us",location:JSON.stringify({x:b.x,y:b.y}),distance:250},handleAs:"json"})})}}});