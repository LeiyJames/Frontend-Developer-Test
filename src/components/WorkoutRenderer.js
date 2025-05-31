import React from 'react';

const WorkoutRenderer = ({ workout }) => {
  if (!workout) return null;

  const { name, description, duration, segments } = workout;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6 text-white">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="mt-2 text-indigo-100">{description}</p>
        <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-indigo-800">
          Total Duration: {duration.value} {duration.unit}
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {segments.map((segment, segmentIndex) => (
          <div key={segmentIndex} className="p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4 flex items-center">
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              {segment.title}
            </h2>
            
            <div className="space-y-4 pl-4">
              {segment.blocks.map((block, blockIndex) => (
                <RenderBlock 
                  key={block.id || blockIndex} 
                  block={block} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getIntensityStyles = (intensity) => {
  switch (intensity?.toLowerCase()) {
    case 'hard':
      return 'border-red-300 bg-red-50';
    case 'easy':
      return 'border-green-300 bg-green-50';
    case 'fartlek':
      return 'border-yellow-300 bg-yellow-50';
    case 'recovery':
      return 'border-blue-300 bg-blue-50';
    default:
      return 'border-gray-200';
  }
};

const RenderBlock = ({ block }) => {
  const intensityStyles = getIntensityStyles(block.intensity);
  
  switch (block.type) {
    case 'duration_interval':
      return (
        <div className={`pl-4 border-l-4 py-2 ${intensityStyles}`}>
          <div className="font-medium text-gray-800">{block.render}</div>
          {block.note && (
            <div className="mt-1 text-sm italic text-gray-600">{block.note}</div>
          )}
        </div>
      );
    
    case 'rest':
      return (
        <div className={`pl-4 border-l-4 py-2 ${intensityStyles}`}>
          <div className="font-medium text-gray-600">{block.render}</div>
          {block.note && (
            <div className="mt-1 text-sm italic text-gray-500">{block.note}</div>
          )}
        </div>
      );
      
    case 'set':
      return (
        <div className="space-y-3">
          <div className="font-medium text-gray-800 bg-indigo-50 inline-block px-3 py-1 rounded border border-indigo-100">
            {block.render}
          </div>
          
          <div className="pl-6 space-y-2 ml-2">
            {block.blocks?.map((subBlock, index) => (
              <RenderBlock 
                key={subBlock.id || index} 
                block={subBlock} 
              />
            ))}
          </div>
        </div>
      );
      
    default:
      return null;
  }
};

export default WorkoutRenderer; 