import React from 'react';
import "./Map.css";

const Map = (props) => {
    return (
        <iframe class="map-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26829.927158368308!2d35.123423045489524!3d32.7991288638577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db6a595965653%3A0x6c32c734af72d61f!2z16fXqNeZ16og15DXqteQ!5e0!3m2!1siw!2sil!4v1723101302077!5m2!1siw!2sil" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    )
};

export default Map;