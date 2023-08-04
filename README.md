# GitHubStatus
- This App shows the status of various GitHub services by obtaining or "scraping" information from githubstatus.com.
- Heavily relies on Javascript in order to function.
- Uses NPM Request to get the information need.
- After Request returns a JSON object, the information is then read and shown as output to HTML
- The browser I used does not have the Require method whereas Node.js does, and I used Node.js to test the information retrieval. So, I used Browserify in order to convert my JS file into a JS file that makes Require works with my browser. 
- There is also a refresh button along with a "Last refresh" date/time.

This App helped me in:
- Learning how to scrape information from websites using npm require
- Practicing my knowledge of parsing JSON objects for information 
- Learning more CSS styling
 
