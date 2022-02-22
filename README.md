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
- 
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
The searchbar and filterbar fetch all available spots and stores them into the state. This allows users to narrow down to spots that match their search queries which look up against each spot's region, title, and description. The users search query is held in this.state.search and is updated with an onChange function which triggers on each additional input. After this.state.search is updated, the list of spots matching the search query updates this.state.tempSpots to hold the array of spots that match search query rules.

<p align="center">
  <img src="/app/assets/images/readme/pc_search_demo.gif" width="700" height="auto" />
</p>

An option variable is used to filter on all listings on the Spot Index and Map page. The option used is based on whether props passed from the searchbar component are available or depending on the params found in ownProps.match.params.

<p align="center">
  <img src="/app/assets/images/readme/pc_filter_demo.gif" width="700" height="auto" />
</p>

## Bookings

<p align="center">
  <img src="/app/assets/images/readme/pc_booking_demo.gif" width="700" height="auto" />
</p>
## Reviews

<p align="center">
  <img src="/app/assets/images/readme/pc_review_demo.gif" width="700" height="auto" />
</p>

```javascript
{
    this.state.displayPopup ? (
        <Popup key={movie.id}
            added={this.state.icon === window.check_icon}
            title={movie.title} 
            clearPopup={this.clearPopup} />
    ) : null
}
```

```javascript
const handleClearPopup = () => {
    const el = document.querySelector(".popup");
    el.id = "fade-out";
    setTimeout(() => {
        clearPopup();
    }, 600)
};
```
