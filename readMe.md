# Projet12_SportSee

Welcome to the Projet12_SportSee repository! This repository contains the source code for a fitness tracking web application built with React.

## Description

The Projet12_SportSee application allows users to track their fitness activities and monitor their progress over time. The app provides various features such as viewing activity statistics, setting fitness goals, and analyzing performance metrics.

## Installation

To run the Projet12_SportSee application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/Peallyz/Projet12_SportSee.git
   ```

2. Navigate to the project directory:

   ```
   cd Projet12_SportSee
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

   This command will start the application on [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

## Usage

Once the application is running, you can access it in your web browser. The home page will present you with two user options: User 12 and User 18. You can choose either of them to explore the application's features.

The application uses the `useFetch` API to fetch data. The `useFetch` hook returns an object with three properties: `data`, `loading`, and `error`. This allows you to handle the fetched data and manage the loading and error states.

The application also utilizes `useUserData` hooks, which accepts two parameters: `id` and `isMocked`. The `id` parameter specifies the user ID, and the `isMocked` parameter determines whether the data should be fetched from a mock API or a real API.

## Back End

You can find NodeJS API here : [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
