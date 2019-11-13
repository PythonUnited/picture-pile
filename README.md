# Picture Pile

Picture Pile takes a JSON array of images and creates a pile of pictures. You can use it as a separate
web application or include it in your website as a web component. The app as well as the web component
allow for a number of properties that influence the way in which the pile is rendered.

| property | description                                           | example                                 
|----------|-------------------------------------------------------|----------------------------------------
| src      | Location of the JSON source                           | https://somedomain.com/pictures.json  
| polaroid | Whether to use polaroid pictures or not               | a boolean value
| highlight| Whether to show highlights or not                     | a boolean value
| squircle | Whether to show as squircles or not                   | a boolean value
| rotate   | Randomly rotates a picture between - and + this value | an integer value
| scale    | Randomly scales a picture between - and + this value  | an integer value
| shadow   | Thickness of the shadowed border of a picture         | an integer value
| width    | Width of the picture                                  | an integer value
| height   | Height of the picture                                 | an integer value
|||

# Preview

|                   |                                                               |
|-------------------|---------------------------------------------------------------|
| Demo              | <https://picture-pile.demo.pythonunited.com>                  |
| Demo image source | <https://picture-pile.demo.pythonunited.com/pictures.json>    |
|||

# JSON schema

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

| property     |description                    
|--------------|-----------------------------------------
| id           | Unused at the moment
| author       | Picture author
| width        | Original width; unused at the moment
| height       | Original height; unused at the moment
| url          | Url this picture points to
| download_url | Url of the picture
| caption      | Picture caption
| highlight    | Whether to highlight the picture or not
| position     | Adjust the picture position 
|||
    
# Project setup

    yarn install

### Serve and start application with the Vue UI

    vue ui

### Compiles and hot-reloads for development

    yarn run serve

### Compiles and minifies for production

    yarn run build

### Compiles and minifies the web component for production

    yarn run build-component

#### use Picture Pile as a web component



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

# Picture Pile Component Testing

# TODO

    openssl req -x509 -out localhost.crt -keyout localhost.key \
      -newkey rsa:2048 -nodes -sha256 \
      -subj '/CN=localhost' -extensions EXT -config <( \
       printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
