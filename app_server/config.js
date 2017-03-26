/**
 * Created by Carmen-Uni on 21/03/2017.
 */
var config = {};

//Heroku assigns the value through the PORT environment variable. You cannot choose
config.port = process.env.HTTP_PORT || process.env.PORT || 3000;

config.videoUrl = 'https://156-35-98-18.d6b6c198ddfc47509c7c7ab5c6b8a0ea.plex.direct:32400/library/parts/2/1490382404/file.webm?X-Plex-Session-Identifier=wly6kmb8nocpacgruqvy4u06&X-Plex-Product=Plex%20Web&X-Plex-Version=3.1.1&X-Plex-Client-Identifier=78b2ee41-e775-4899-ae1b-d3b8f27d378f&X-Plex-Platform=Chrome&X-Plex-Platform-Version=57.0&X-Plex-Device=Windows&X-Plex-Device-Name=Plex%20Web%20%28Chrome%29&X-Plex-Device-Screen-Resolution=1920x950%2C1920x1080&X-Plex-Token=Xd9VZQ5rfYqizdys7Azy&Accept-Language=es';
config.audioUrl = 'http://156.35.98.18:8001/;'; //shoutcast (in .pls file)
config.presentationUrl = 'reveal-js/index.html';


module.exports = config;
