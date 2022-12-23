

# mgpxe - KoRo Frontend Assigment

Find your favorite images instantaneously  with mgpxe

## Introduction

For this project, I spent approximately 3-4 hours building a web app using React and Styled Components. The app connects to the Unsplash API and displays a list of random images to the user upon initial load. The user can then search for a specific keyword or phrase, and the app will display only images related to that keyword or phrase.

One of the main features of this web app is that it is completely responsive. This means that it can be accessed and used on any device, including smartphones, tablets, and desktop computers.

Also if there is any type of error an error message is displayed with a refresh button to update the page.

## Difficulties
I encountered a few difficulties while working on this assignment. One of the main challenges I faced was related to the Unsplash API. I exceeded the hourly request limit a few times, which caused some delays in my testing process as I had to wait for the limit to reset. This happened because every time I typed a letter in the input a call to the api was made, I solved this by applying a debounce function which delays the call until the user stopps typing. Despite this, I was able to troubleshoot the issue and complete the assignment.

## Logo
In addition to the core functionality described above, I also created the logo for the app. I took care to ensure that the logo is original and free of any copyright issues.


## API Reference

### Get Random Items :
 Retrieve a single random photo, given optional filters.

```http
GET /photos/random
```

### Search photos :
Get a single page of photo results for a query.


```http
GET /search/photos
```

