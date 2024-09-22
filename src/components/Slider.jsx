import React from 'react';
import ReactSlider from 'react-slider';

const Slider = () => {
  // Array of languages with their proficiency levels and track colors
  const languages = [
    { name: 'HTML, CSS, Bootstrap, JAVASCRIPT', level: 98, color: 'bg-red-500' },
    { name: 'Node JS, Express, MongoDB', level: 95, color: 'bg-blue-500' },

    { name: 'React JS, Tailwind', level: 98, color: 'bg-yellow-500' },
   

    // Add more languages as needed
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Programming Skills</h1>
      {languages.map((lang, index) => (
        <div key={index} className="my-4">
          <h3 className="text-lg font-semibold mb-2">{lang.name}</h3>
          <ReactSlider
            className="h-2 bg-gray-300 rounded-full"
            thumbClassName="w-4 h-4 bg-white rounded-full shadow-md" // White thumb with shadow
            trackClassName="bg-transparent" // Make the base track transparent
            renderTrack={(props, state) => {
              // Apply color only to the filled track
              return (
                <div
                  {...props}
                  className={`${state.index === 0 ? lang.color : 'bg-gray-300'} h-full rounded-full`}
                />
              );
            }}
            value={lang.level}
            max={100}
            disabled
          />
          <div className="text-sm mt-2 text-gray-500">{lang.level}%</div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
