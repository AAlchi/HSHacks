import React from 'react';

export default function Map() {
    return (
        <div className='lg:pr-10 w-full'>
            <div className='rounded-xl bg-white'>
            <iframe width="425" height="500" className="w-full rounded-xl mb-5" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.0910024587724!2d-87.96163142443878!3d42.10382735125208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbbad9a8cbbcd%3A0xbc3eb41efde43b5f!2sJohn%20Hersey%20High%20School!5e1!3m2!1sen!2sus!4v1726425469392!5m2!1sen!2sus"></iframe>
            </div>
            <small>Northwest Suburbs, 1900 E Thomas St, Arlington Heights, IL 60004</small>
        </div>
    );
}