# Local Testing / Debugging the Cookie Banner

1. Install `npm` and `vite`

    - Install `npm`:
        - On Windows: https://nodejs.org/en/download (Note: WSL installation is quicker)
        - On WSL or Linux: `sudo apt install npm`
        - On Mac: `brew install npm`
    - Install `vite` via terminal/PowerShell: `npm install -D vite`

2. Run a mini local webserver.

    Modern browsers tend not to allow dynamic loading of page elements from local files, so a mini web server is needed when working on the cookie banner.

    If Vite is available, a simple web server can be launched for testing using this command:

    ```shell
    make server
    ```

    Once this mini web server is running, the pages can be tested by visiting `http://127.0.0.1:5173`.

    > Standard disclaimer: the Vite dev web server is not acceptable for any production hosting.

    To stop the server run:

    ```shell
    make kill
    ```
