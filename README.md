# cra-template-kenny

An opinionated quick start Create React App template my go to dependencies and configurations

## Usage

`npx create-react-app your-project-name --template cra-template-kenny`

npx command installs the most recent stable version of CRA from npm.

--template parameter points to this template

Dev dependencies and husky settings need to be manually added after finishing installation (limitation of CRA templates). Add this at the end of the packages.json, modify if needed.

```
    "devDependencies": {
        "eslint-config-prettier": "^6.11.0",
        "eslint-config-standard": "^14.1.1",
        "eslint-config-standard-react": "^9.2.0",
        "eslint-plugin-jest": "^23.20.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-promise": "^4.2.1",
        "eslint-plugin-react": "^7.20.5",
        "eslint-plugin-standard": "^4.0.1",
        "lint-staged": "^10.2.11",
        "prettier": "^2.0.5"
    },
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "./src/*.{js,jsx,ts,tsx}": [
            "npx prettier --write",
            "eslint src/*.js --fix-dry-run"
        ]
    }
```
