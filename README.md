This ReactJS application fetches user data from the 'https://randomuser.me/api/' API and implements various features as per the provided requirements.

## Project Overview

The project includes the following functionalities:

1. **Listing Component with Pagination and Filters**
   - Created a listing component that displays user data fetched from the API.
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

- **src/components/UserList.js**: Listing component with pagination, filters, and search functionality.
- **src/components/UserProfile.js**: Public profile page with user details and additional features.
- **src/App.js**: Main application component handling routing.
- **src/index.js**: Entry point of the application.

**Additional Considerations**

# Google Maps Integration: 
Added Google Maps link to easily view user locations.

# Nationality Flag Display:
Integrated Rest Countries API to display nationality flags.

## Running the Project Locally

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Moheen-Shah/Listing-App-Task.git
   cd Listing-App-Task