# User Listing App

This ReactJS application fetches user data from the 'https://randomuser.me/api/' API and implements various features as per the provided requirements.

## Project Overview

The project includes the following functionalities:

1. **Listing Component with Pagination and Filters**
   - Created a modular listing component that displays user data fetched from the API.
   - Implemented pagination for better user experience.
   - Added gender filters that persist when navigating through pages.

2. **Search Functionality**
   - Implemented a search functionality allowing users to search for specific users in the listing page.
   - Added detailed instructions in the README.md file on how to use and understand the search feature.

3. **Public Profile Page**
   - Created a public profile page for each user in the listing.
   - Users can navigate to individual profiles, displaying detailed information about each user.
   - Integrated Google Maps link to view the user's location.
   - Displayed the nationality flag using the Rest Countries API.

## Project Structure

The project has the following structure:

- **src/components/UserList.js**: Main listing component that integrates other reusable components.
  - **src/components/GenderFilter.js**: Gender filter component.
  - **src/components/SearchInput.js**: Search input component.
  - **src/components/UserProfileCard.js**: User profile card component.
- **src/components/UserProfile.js**: Public profile page with user details and additional features.
- **src/App.js**: Main application component handling routing.
- **src/index.js**: Entry point of the application.

**Additional Considerations**

# Google Maps Integration: 
Added Google Maps link to easily view user locations.

# Nationality Flag Display:
Integrated Rest Countries API to display nationality flags.

**Usage**
1. The main page (/) displays a user listing with pagination, gender filters, and a search bar.
2. Click on a user's profile to view detailed information on the public profile page (/profile/:userId).
3. The public profile page includes a Google Maps link and displays the user's nationality flag.

**Reusable Components:**

The code is structured with reusable components for better maintainability.
Components such as GenderFilter, SearchInput, and UserProfileCard promote modularity and code reusability.
# React Router:

Utilized react-router-dom for handling navigation and routing in the application.
The main routing is defined in App.js.
# Styling:

Styling is done using Tailwind CSS for a clean and responsive design.
# API Integration:

Utilized the 'https://randomuser.me/api/' API for fetching user data.
Integrated the Rest Countries API for displaying nationality flags.

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Moheen-Shah/Listing-App-Task.git
   cd Listing-App-Task
# Install Dependencies:
npm install

# Run the Application:
npm start
