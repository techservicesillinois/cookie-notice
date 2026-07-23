# Local Testing / Debugging the Cookie Banner

1. Install `npm` using `nvm` (to ensure `npm >= 22`)

    - Install `nvm`: 
        From https://github.com/nvm-sh/nvm#manual-install

        ```shell
        export NVM_DIR="$HOME/.nvm" && (
          git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
          cd "$NVM_DIR"
          git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
        ) && \. "$NVM_DIR/nvm.sh"
        ```
    - Add `nvm` to `.bashrc`
        From https://github.com/nvm-sh/nvm#git-install

        ```shell
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
        ```

    - Install `npm` (22 or higher), using `nvm`:

        ```shell
        nvm install 24
        ```

2. Install `vite` using our `Makefile`

        ```shell
        make node_modules
        ```

3. Run a mini local webserver.

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
