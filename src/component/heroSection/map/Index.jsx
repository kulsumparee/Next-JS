import React from 'react'

const MapContent = () => {
    // Ensure the URL is correct and points to the intended location
   
    return (
        <div>
            <div style={{ backgroundColor:"#0D6E63"}}  className=' h-16 text-2xl font-bold text-white  '>
                Clinic Name
            </div>
            
            <iframe className='w-[100%]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106277.44568957966!2d72.97715206797137!3d33.65275214128753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716812925859!5m2!1sen!2s" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default MapContent
