# React Garage

![Screenshot 2024-08-11 113441](https://github.com/user-attachments/assets/92b650b8-a99b-49f2-8609-0ab94e4daa7f)

Welcome to my React application, where car enthusiasts can explore brief descriptions of various cars and listen to their unique rev notes. This interactive platform allows users to:

- **View Car Descriptions**: Discover brief information about different cars.
- **Listen to Rev Notes**: Enjoy the authentic sounds of car engines.
- **Customize the app**: You can add your own cars and delete the ones you don't need, to create a your own customized version.

## Getting Started

### Prerequisites
Make sure you have the following installed on your local system:
- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn
- Git

### Installation

  Go to your terminal and run these commands
1. **Clone the repository:**
    ```bash
    git clone https://github.com/Pyoneer01/React-Garage.git
    cd React-Garage
    ```

3. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1. **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see your application running.

## Customizing the cars list

To add a new car, follow these steps:

1. **Edit the `cars.js` File**: 
   - Open the `cars.js` file in the `src` directory.
   - Add a new entry for the car in the array of car objects, specifying the name, description, image path, and audio path.

2. **Include the Car Image**: Place the car’s image in the `images` folder.
   - Save the car image file in the `public/images` directory.
   - Ensure the image file name matches the path specified in the `cars.js` file.

3. **Include the Rev Note**: Place the car’s rev note audio file in the `sounds` folder.
   - Save the audio file in the `public/sounds` directory.
   - Ensure the audio file name matches the path specified in the `cars.js` file.

To remove a car from the list:

1. **Edit the `cars.js` File**:
   - Open the `cars.js` file in the `src` directory.
   - Remove the specific car object to be removed from the array of car objects.


