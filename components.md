# Data layer

## Data

- List of gentlemen with the following info of each gentleman:
  - id
  - name
  - picture
  - profession
  - twitter
  - picture
  - alternativeText
  - selected

## Data manipulation

- Render different data on every gentleman card
- Toggle "selected" property gentlemen
- Delete a gentleman

# Components

## App

- Contains the gentlemen list
- Contains function "toggle"
- Contains function "select all"
- Contains function "delete"
- Sends gentlemen list to Info
- Sends function "delete" and "toggle" to Gentleman
- Sends function "select all" to Button

## Info

- Receives gentlemen list
- Display number of selected gentlemen

## Button

- Receives function to toggle "selected" property Gentleman

## Gentleman

- Receives text
- Receives images
