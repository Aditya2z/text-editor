# Simple Text Editor with Draft.js
This project is a simple text editor created using Create React App and integrated with Draft.js, a framework for building rich text editors in React.

## Getting Started
To run the project, follow these steps:

## Clone the repository:
git clone https://github.com/Aditya2z/text-editor.git

## Install dependencies:
npm install

## Start the development server:
npm start
This will run the app in development mode. Open http://localhost:3000 to view the text editor in your browser. The page will reload as you make changes, and lint errors can be seen in the console.

## Features

- Basic text formatting (bold, italic, underline).
- Lists (both ordered and unordered).
- Undo and redo functionality.
- Draft.js provides a flexible and extensible framework for building rich text editing experiences.

### Additional Features

- Typing `#` as the first string in a line & pressing space makes anything you type afterwards on the same line be in a “Heading” format. On pressing space, the aforementioned `#` disappears.
  - Example: Typing `# This is a heading` results in a heading format.

- Typing `*` as the first string in a line and pressing space corresponds to “bold” format.
  - Example: Typing `* This is bold text*` results in bold formatting.

- Typing `**` and space creates a red line.
  - Example: Typing `** This is a red line**` results in a red line.

- Typing `***` and space creates an underline.
  - Example: Typing `*** This is underlined***` results in underline formatting.

- Pressing `Save` button persists everything typed in the editor into `localStorage`. On refreshing the page, the saved info is refilled into the editor.


## Customization
Feel free to customize and extend the text editor according to your requirements. The Draft.js documentation (https://draftjs.org/docs/getting-started) can guide you in understanding how to work with Draft.js and its various features.

## Learn More
To learn more about Draft.js, check out the Draft.js documentation.

For more information on React, refer to the React documentation.

## Troubleshooting
If you encounter issues during the build process or face problems with minification, refer to the Create React App troubleshooting guide for assistance.

Feel free to explore and enhance the text editor to suit your specific needs!
