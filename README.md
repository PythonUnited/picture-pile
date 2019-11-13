# Picture Pile Collage
###### A Vue application 

Picture Pile takes a JSON array of images and creates a collage of pictures. You can use it as a separate
web application or include it in your website as a web component. The app as well as the web component
allow for a number of properties that influence the way in which the pile is rendered. Checkout the 
preview below and read the docs to see what needs to be done to get this going.

## Preview

To understand what this application is about, have a look at the demo.

| **what** | **where**
|---------------|-----------------------------------------------------------
| **Demo**      | <https://picture-pile.demo.pythonunited.com>                  
| **Demo JSON** | <https://picture-pile.demo.pythonunited.com/pictures.json>    

## Picture Pile Properties

The demo environment mentioned above will give you the ability to fiddle around with the properties below.

| **property** | **description** | **type or example**
|--------------|-------------------------------------------------------|-------------------------------------
| **src**      | Location of the JSON source                           | https://somedomain.com/pictures.json  
| **polaroid** | Whether to use polaroid pictures or not               | a boolean value
| **highlight**| Whether to show highlights or not                     | a boolean value
| **squircle** | Whether to show as squircles or not                   | a boolean value
| **rotate**   | Randomly rotates a picture between - and + this value | an integer value
| **scale**    | Randomly scales a picture between - and + this value  | an integer value
| **shadow**   | Thickness of the shadowed border of a picture         | an integer value
| **width**    | Width of the picture                                  | an integer value
| **height**   | Height of the picture                                 | an integer value


## Picture Pile JSON schema

The source of the pictures is a JSON file containing all the information needed to kickstart the application.
The JSON schema printed below shows what the JSON source should contain.

    {
        "definitions": {},
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "array",
        "items": {
            "$id": "#/items",
            "type": "object",
            "required": [
                "download_url"
            ],
            "optional" : [
                "id",
                "author",
                "width",
                "height",
                "url",
                "highlight",
                "position",
                "caption"
            ],
            "properties": {
                "id": {
                    "$id": "#/items/properties/id",
                    "type": "string",
                    "pattern": "^(.*)$"
                },
                "author": {
                    "$id": "#/items/properties/author",
                    "type": "string",
                    "pattern": "^(.*)$"
                },
                "width": {
                    "$id": "#/items/properties/width",
                    "type": "integer"
                },
                "height": {
                    "$id": "#/items/properties/height",
                    "type": "integer"
                },
                "url": {
                    "$id": "#/items/properties/url",
                    "type": "string",
                    "pattern": "^(.*)$"
                },
                "download_url": {
                    "$id": "#/items/properties/download_url",
                    "type": "string",
                    "pattern": "^(.*)$"
                },
                "caption": {
                    "$id": "#/items/properties/caption",
                    "type": "string",
                    "pattern": "^(.*)$"
                },
                "highlight": {
                    "$id": "#/items/properties/highlight",
                    "type": "boolean"
                },
                "position": {
                    "$id": "#/items/properties/position",
                    "type": "string",
                    "pattern": "top|bottom|left|right|center"
                }
            }
        }
    }

| **property** | **description**
|--------------|-----------------------------------------
| **id**           | Unused at the moment
| **author**       | Picture author
| **width**        | Original width; unused at the moment
| **height**       | Original height; unused at the moment
| **url**          | Url this picture points to
| **download_url** | Url of the picture
| **caption**      | Picture caption
| **highlight**    | Whether to highlight the picture or not
| **position**     | Adjust the picture position 
    
## Project setup

    yarn install

### Serve and start application with the Vue UI

    vue ui

### Compile and hot-reload for development

    yarn run serve

### Compile and minify for production

    yarn run build

### Compile and minify the web component for production

First adjust `.env.production` to point to the static root of the server you're
about to deploy to. Then, at the command prompt execute:

    yarn run build-component --mode production
    
Now, rsync or copy the contents of the dist folder to your server, e.g.

    rsync -avz dist/* [your server]:[your destination path]

## Use Picture Pile as a web component

When built as a component, add Picture Pile to your site by including the following scripts.


    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.9/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
    <script src="[your server]/[your path]/picture-pile.umd.min.js"></script>

The above will add [Vue](https://vuejs.org/), a [Promise Polyfill](https://www.npmjs.com/package/promise-polyfill) 
as well as the web component scripting. Adjust `[your server]` and `[your path]`. Now add the web component itself:

    <picture-pile src="https://picture-pile.demo.pythonunited.com/pictures.json"
                  polaroid="false"
                  highlight="true"
                  squircle="true"
                  shadow="5"
                  rotate="5"
                  scale="5"
                  width="6"
                  height="6"/>

Point the `src` property to your own JSON source and adjust the other properties to suit
your needs.
