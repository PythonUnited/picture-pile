# Picture Pile

## Easy going

    vue ui
    
## Project setup

    yarn install

### Compiles and hot-reloads for development

    yarn run serve

### Compiles and minifies for production

    yarn run build

### Run your tests
    yarn run test

### Lints and fixes files

    yarn run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)

# Picture Pile Component Testing

### TODO

    openssl req -x509 -out localhost.crt -keyout localhost.key \
      -newkey rsa:2048 -nodes -sha256 \
      -subj '/CN=localhost' -extensions EXT -config <( \
       printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
