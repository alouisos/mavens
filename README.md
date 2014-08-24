This is my solution - story for the visualisation of the dummy data provided. 

The original focus is on the metric of popularity for every video based on the cumulative views, likes and shares of the video. An average of these three metrics along with a normalisation for the time frame measured has been used to provide the bubbles visualisation. 

The color of the bubble corresponds to a specific product acoording to the color legend. 

The size of the bubble corresponds to the popularity metric of the video. 

Clicking on every bubble gets you to a video specific page where you can have a time series visualisation of the popularity metrics for every video along with a display of the localisation of the video metrics. 

The web app detects a mobile device screen and renders a different visualisation (RickShaw Charts) for mobile devices since the web version uses Google Motion Charts which are Java based and non mobile friendly. 

Many improvements can be done based upon having access to a data API, like build AngularJS directives to access data and visualise upon fetched data with D3. 

You may see a live demonstration of the visualisation at 

http://54.227.234.21 

This is just a demo visualisation. The technology built should be a data pipeline where an API would exist and a model view controller would render the data on the front end by fetching the data from the back end. Given the time and resources I can build that. 

Thank you 

Louizos Alex

TECHNOLOGIES USED: 
NodeJS --> BackEnd, ExpressJS server <br>
HTML, CSS, JQuery, Twitter Bootstrap, Front End Javascript<br>
Amazon EC2 instance for server <br>
D3js -->  Bubbles visualization<br>
Google Motion Charts --> Timeseries visual for Desktops <br>
RickShaw Charts --> Timeseries visual for Mobile Devices <br>
Github version control <br>





