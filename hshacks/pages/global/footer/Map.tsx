import React from 'react';

export default function Map() {
    return (
        <div className='lg:pr-10 w-full'>
            <iframe width="425" height="350" className="w-full rounded-xl" src="https://www.openstreetmap.org/export/embed.html?bbox=-87.9660487174988%2C42.098429390620076%2C-87.9480242729187%2C42.109557520624186&amp;layer=mapnik"></iframe>
            <br/>
            <small>The location for HSHacks. This is where the school address will go.</small>
        </div>
    );
}