[PillowCamp Live!](http://pillowcamp.herokuapp.com/#/)

# PillowCamp
<p align="center">
  <img src="/app/assets/images/pillowcamp_thumbnail.png" width="700" height="auto" />
</p>

# About
PillowCamp is a fullstack, single-page web application inspired by Hipcamp. Hipcamp is a booking service that provides access to campgrounds, open fields, cabins, and homes owned by owners who value nature. This web application clone has several features. These include allowing users to create, read, update, and destroy bookings for spots. They are able to leave reviews for spots when logged in. Additionally, there is the ability to search and filter based on pre-defined lists.  

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)

# Technologies
- React/Redux
- Ruby on Rails
- JavaScript, HTML, & SCSS
- PostgreSQL
- Node.js
- jQuery
- jBuilder
- Webpack
- Amazon Web Services S3

PillowCamp is built with the React framework and Redux architecture on the frontend, supported by Ruby on Rails and a PostgreSQL database on the backend. Media is stored and retrieved using Active Storage and hosted by Amazon Web Services S3.

# Features

## Searchbar & Filter
The `SearchBar` and `FilterBar` fetch all available spots and stores them into the state. This allows users to narrow down to spots that match their search queries which look up against each spot's `region`, `title`, and `description`. The users search query is held in `this.state.search` and is updated with an `onChange` function which triggers on each additional input. After `this.state.search` is updated, the list of spots matching the search query updates `this.state.tempSpots` to hold the array of spots that match search query rules.

<p align="center">
  <img src="/app/assets/images/readme/pc_search_demo.gif" width="700" height="auto" />
</p>

An `option` variable is used to filter on all listings on the `SpotIndex` and `Map` page. The `option` used is based on whether props passed from the `SearchBar` component are available or depending on the params found in `ownProps.match.params`.

<p align="center">
  <img src="/app/assets/images/readme/pc_filter_demo.gif" width="700" height="auto" />
</p>

## Bookings
Users are able to reserve, update, and cancel `bookings` made through PillowCamp. Logic has been added to the frontend date input to require all minimum start dates to be a day after today. Checkout dates must be at least one day ahead of the check-in date. To create a booking, a user must be logged into a current session. If a user tried to create a `booking`, a modal would pop-up depending on whether a `currentUser` was found.

Bookings can then be managed at the `Profile/:id` of each `User`. Details for an existing booking will render in a reservation form allowing users to modify check-in, check-out, and number of guests arriving. Cancellations trigger a modal to ensure that is the correct action they wanted to take.

<p align="center">
  <img src="/app/assets/images/readme/pc_booking_demo.gif" width="700" height="auto" />
</p>

## Reviews
`Reviews` belong to both `Spots` and `Users`. A user can submit a review for a spot once they are logged in. On the `Profile/:id route, users can look through their reviews across spots and delete them if desired.

<p align="center">
  <img src="/app/assets/images/readme/pc_review_demo.gif" width="700" height="auto" />
</p>

## Future Implementations
- Create additional booking logic so users cannot book dates that have already been taken for a given spots
- Add review logic so users can only review if they have a booking with a given spot and if the current date exceeds the end date of the booking
- Save searched query to state and possible move search logic to the backend
- Modify map marker logic to make it more dynamic
