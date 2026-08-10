## Test Commands

After running setup commands below, these following commands can be used to run the automated test suite.

```
make clean
make test
make playwright-report
```

## Setup for Local Testing / Debugging the Cookie Banner

1. Install `npm`
    - On Mac
        - Using `brew`, run `brew install node`
        - If necessary, update `npm` with `brew update` and `brew upgrade`
    - On Windows
        - Install `Node` from https://nodejs.org/en/download
        - If necessary, update `npm` via PowerShell: `npm install -g npm@12.0.1`
        - Recommended: Install [GNU Make](https://gnuwin32.sourceforge.net/packages/make.htm) in order to use the `Makefile` 

            > Without `make`, Windows users may need to copy/paste commands out of `Makefile` for testing.

    - On WSL or Linux
        - Install `npm` using `nvm` (to ensure `npm >= 22`)
        - Install `nvm`:
            Instructions below are based on <https://github.com/nvm-sh/nvm#manual-install>
    
            ```shell
            export NVM_DIR="$HOME/.nvm" && (
              git clone https://github.com/nvm-sh/nvm.git "$NVM_DIR"
              cd "$NVM_DIR"
              git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
            ) && \. "$NVM_DIR/nvm.sh"
            ```
    
        > Tip: `git` may emit a `detached head` warning after this step
        > which is harmless.
    
        - Add `nvm` to `.bashrc`
            From <https://github.com/nvm-sh/nvm#git-install>
    
            ```shell
            export NVM_DIR="$HOME/.nvm"
            [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
            [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
            ```
    
        > Tip: Open a new shell, or `source ~/.bashrc` to apply the `.bashrc` changes before the next step.
    
        - Confirm `nvm` is setup
    
        > Tip: `which nvm` will have no results, because `nvm` is a bash function.
    
        ```shell
        declare -F | grep nvm
        ...lists various nvm functions...
        ```
    
        - Install `npm` (22 or higher), using `nvm`:
    
            ```shell
            nvm install 24
            ```

1. Install `vite` using our `Makefile`

    ```shell
    make clean
    make node_modules
    ```

    > Tip: `make node_modules` may output a warning about `install scripts`.
    > Ignoring it doesn't seem to hurt anything, for our purposes.

    Verify that `vite` and `vite-plugin-nunjucks` are installed:

    ```shell
    $ npm list | grep vite
    ├── vite-plugin-nunjucks@0.2.0
    └── vite@8.1.5
    ```

    > Tip: `which vite` will have no results.


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

3. Install browser engines for automated accessibility testing.

    ```
    npx playwright install
    ```

