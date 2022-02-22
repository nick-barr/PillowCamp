# README



# <img src="https://github.com/nick-barr/PillowCamp/blob/8c3d6171fcb080491e3501612be0c3ad3b1fcb13/app/assets/images/Pillowcamp_logo.jpg" width="300" height="auto" />

[PillowCamp Live!](http://pillowcamp.herokuapp.com/#/)

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Core Features](#core-features)
- [Technical Challenges](#technical-challenges)

# Description
PillowCamp is a full stack, single-page web application inspired by Hipcamp. It is a booking service that provides access to campgrounds, open fields, cabins, and homes owned by owners who value nature.

<p align="center">
  <img src="https://github.com/nick-barr/PillowCamp/blob/main/app/assets/images/pillowcamp_thumbnail.png" width="700" height="auto" />
</p>

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

PillowCamp is built with the React framework and Redux architecture on the frontend, supported by Ruby on Rails and a PostgreSQL database on the backend. Thumbnails and videos are implemented using Active Storage and hosted by Amazon Web Services S3.

# Core Features

## Spot Details - Fetch and retried spot information from Rails backend turning HTTPs requests into JSON responses for specific spot show pages. (CR)
## Filter Spots- use 
## Bookings
## Create: Spot show page
## Search R.U.D.: Profile)"	Search for Spots held in state

## Searchbar & Filters
The searchbar and filterbar fetch all available spots and stores them into the state. This allows users to narrow down to spots that match their search queries which look up against each spots region, title, and description.  


<p align="center">
  <img src="/app/assets/images/pc_search_demo.gif" width="700" height="auto" />
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
