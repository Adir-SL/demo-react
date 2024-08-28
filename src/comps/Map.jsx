import React from 'react';
import "./Map.css";

const Map = (props) => {
    return (
        <iframe className="map-frame" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3369.549578242515!2d34.89961452348927!3d32.37762657383308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1siw!2sil!4v1724864581942!5m2!1siw!2sil" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    )
};

export default Map;