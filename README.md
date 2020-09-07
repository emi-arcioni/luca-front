# Luca DEMO

This App was made for demonstrative purposes.

### Requeriments

* Node.js (NPM)
* Ionic 5

### Installation and configuration

1. (Optional) In case that you don't have previously installations of Ionic CLI

    ```bash
    $ npm install -g @ionic/cli
    ```

1. Clone the repository into your local environment 
    
    ```bash
    git clone https://github.com/emi-arcioni/luca-front
    ```

1. Install the required node modules

    ```bash
    luca-front $ npm install
    ```

1. Check environment variable in src/environments/environtment.ts. The variable `apiBaseUrl` must have the URL value of the running API. For instance `http://localhost:8000`

1. Turn on development server

    ```bash
    luca-front $ ionic serve
    ```
    This command will open the browser version of the app. You can optionally compile the app to iOS (XCode required) or Android (Android Studio required):
        
    1. For iOS

        ```bash
        luca-front $ ionic capacitor build ios
        ```

    1. For Android

        ```bash
        luca-front $ ionic capacitor build android
        ```