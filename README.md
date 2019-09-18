# Supp2U Front End Repo
  [dev]

  ### Website
  https://supp2u.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/af0b6d36-b8d2-4c42-8897-33ee87738dc8/deploy-status)](https://app.netlify.com/sites/supp2u/deploys)

# Contributors

|                                      [Amber Meador](https://github.com/nek0senpa1)                                     |                                           [Taylor Blount](https://github.com/thirdeyeclub)                                             |                                          [Zechariah Drinkhall](https://github.com/Zechdrink)                                              |                                      [Julian Jay Kohlman](https://github.com/juliankohlman)                                         |                                            [Henry Neal](https://github.com/henron1)                                                           |                                                                 [Sibhat Temelso](https://github.com/sibhat)    |                                                    [Laryna Billinghurst](https://github.com/larynab)    |  
| :-----------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |:----------------------------------------------------------------------------------------------------------------------------:
|  [<img src="./supp2u\src\assets\piccooo.jpg" width = "200" />](https://github.com/nek0senpa1)  |          [<img src="https://avatars2.githubusercontent.com/u/45549491?s=400&v=4" width = "200" />](https://github.com/thirdeyeclub)          |              [<img src="./supp2u\src\assets\zac.png" width = "200" />](https://github.com/Zechdrink)               |  [<img src="./supp2u\src\assets\j.JPG" width = "200" />](https://github.com/juliankohlman)  |[<img src="./supp2u\src\assets\hen.JPG" width="245"/>](https://github.com/henron1)       |[<img src="./supp2u\src\assets\sibhat_1_m.jpg" width="200"/>](https://github.com/sibhat)       |[<img src="https://avatars1.githubusercontent.com/u/17423410?s=460&v=4" width="200"/>](https://github.com/larynab)                
|                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/nek0senpa1)                   |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/thirdeyeclub)                           |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Zechdrink)                        |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/juliankohlman)                   |[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/henron1)      |[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/sibhat)         |[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/larynab)

# Project Overview
Our goal is to build an application that will bring restaurants, and customers together by allowing businesses to showcase and advertise their delectable creations, while allowing customers to benefit from each others shared experiences via reviews, and ratings.   

## Key Features
    * Integrate with Google maps allowing users an easy to find a nearby restaurant 
    * Users can order from a restaurants online menu
    * Business owners can create an account and have their establishment appear on our map
    * Business owners can create online menus
    * Customers can leave reviews and ratings on businesses
    * An integrated payment system so users can checkout on our site

## Front End Tech Stack

    * react
    * node-sass
    * react-redux
    * yarn
    * axios
    * auth0
    * enzyme
    * moment
    * react-router-dom
    * react-spring
    * react-stripe-elements
    * react-toastify
    * reactjs-popup
    * reactstrap

# Installation Instructions
Install all dependencies by running `yarn install`

## Other Scripts

    * build - `yarn build`
    * start - `yarn start`

# Environment Variables
In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_GOOGLE_MAP_API_KEY - this is your Google API key, which can be generated in the Google Cloud Console
    *  REACT_APP_GCOORDINATES - this is your Google API key, which can be generated in the Google Cloud Console

To connect to our backend api, if you want to connect to our deployed server

    * REACT_APP_BACKEND_URL=https://supp2udev.herokuapp.com/

OR if you are launching it yourself after downloading our backend

    * REACT_APP_BACKEND_URL=http://localhost:3001/api/v1/








