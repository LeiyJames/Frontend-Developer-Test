# Workout Renderer

A clean, responsive React component that visualizes structured running workout sessions.

## Approach & Design Decisions

- **Component Structure**: Created a modular design with a main `WorkoutRenderer` component and a recursive `RenderBlock` component to handle nested workout structures
- **Visual Hierarchy**: Implemented clear visual distinction between segments and blocks using spacing, borders, and color
- **Intensity Indicators**: Added color-coding system to immediately communicate workout intensity (hard = red, easy = green, fartlek = yellow, recovery = blue)
- **Responsive Design**: Used Tailwind's responsive utilities to ensure proper display on all device sizes
- **Minimalist UI**: Focused on readability and information hierarchy without unnecessary visual elements
- **Accessibility**: Maintained proper heading structure and visual contrast

## Features

- Displays workout title, description, and total duration
- Shows segments with nested blocks
- Handles different block types: duration intervals, rest periods, and sets
- Mobile-responsive design with Tailwind CSS
- Clean, intuitive UI for workout visualization

## Tech Stack

- React (functional components)
- Tailwind CSS
- ES6+ JavaScript