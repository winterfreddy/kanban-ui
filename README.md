# kanban-ui

## Overall Architecture
The overall architecture was to have a separate folder for the backend, hence denoted as ‘kanban-api’ folder which I git cloned from the provided [kanban-api link](https://github.com/Garrett-Freddo/kanban-api) and a separate folder for the frontend, which is done in React. As for storing information/data, I looked up sources on creating a localhost mongoDB. 

## Overall Approach
My approach for this project was to look over what I have at my disposal, research and read on any articles that would help me know what I should be prepared for, like reading on how to implement drag/drop functionality. I also took some time to write down the goals in this project and draw out a mock pen/paper sketchup of what the final production would have looked like. Overall, I wanted to work from the backend and then finishing up with frontend.

## Running locally
To be able to do this locally, the .env file isn’t included with this project so you will have to create your own. I’ve created a .env file in the root directory of the kanban-api folder and it’s simply just this one line below where I have named the local MongoDB as ‘pensieve-kanban’.
```
CONNECTION_STRING="mongodb://localhost:27017/pensieve-kanban"
```
If willing to give it a different name, use this line below.
```
CONNECTION_STRING="mongodb://localhost:27017/<YOUR-CUSTOM-DB-NAME>"
```
 As for commands, always do 'npm install' in their respective folders before doing commands like ‘yarn start’ or ‘yarn startdev’ for kanban-api or ‘yarn start’ for frontend. Also, ensure that the local mongo db is running prior to running ‘yarn start’ in kanban-api. 

### Video [link](https://drive.google.com/file/d/1Xwfq70bWrYiN3Mol4HEF_3wyQ7t5oUXL/view?usp=sharing)