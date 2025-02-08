# _TEMPLATE_dev_sandbox.ajc

Technology-agnostic sandbox environment for developing implementations of programming solutions.

## Purpose

Technology-agnostic sandbox environment for developing implementations of programming solutions utilizing React.JS, mainly independent of other technologies, with exception to any technologies that are required to make the project work or frequently used in conjunction with React.JS.

Notable exception: TypeScript.

## Todos

- [ ] Todo 1
- [ ] Todo 2

## Pseudo-Directory-Structure (Optional)

```
/root
    /js
    /ts
    .gitignore
    package.json
    README.md
```

## Config-Init Log (Semi-Optional)

This mainly serves as a log of the initial configuration steps taken for the project, especially cli commands like npm package installations and configurations. While this section is optional, it saves headache medicine.

```
// Config-Init Log

CMD 01: create react app with JavaScript

i: [REDACTION]\dev_react-sandbox.ajc\js> npx create-react-app .
o:

Need to install the following packages:
create-react-app@5.0.1
Ok to proceed? (y) y

npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated fstream-ignore@1.0.5: This package is no longer supported.
npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported
npm warn deprecated uid-number@0.0.6: This package is no longer supported.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated fstream@1.0.12: This package is no longer supported.
npm warn deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

Creating a new React app in [REDACTION]\dev_react-sandbox.ajc\js.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1324 packages in 33s

268 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: js@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
npm error node_modules/@testing-library/react
npm error   @testing-library/react@"^13.0.0" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error [REDACTION]\AppData\Local\npm-cache\_logs\2025-02-07T08_19_03_101Z-eresolve-report.txt

npm error A complete log of this run can be found in: [REDACTION]\AppData\Local\npm-cache\_logs\2025-02-07T08_19_03_101Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 web-vitals@^2.1.0` failed


CMD 02: Create React App with TypeScript

i: [REDACTION]\dev_react-sandbox.ajc\ts> npx create-react-app . --template typescript
o: 

Creating a new React app in [REDACTION]\dev_react-sandbox.ajc\ts.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template-typescript...


added 1324 packages in 32s

268 packages are looking for funding
  run `npm fund` for details

Installing template dependencies using npm...
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: ts@0.1.0
npm error Found: react@19.0.0
npm error node_modules/react
npm error   react@"^19.0.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer react@"^18.0.0" from @testing-library/react@13.4.0
npm error node_modules/@testing-library/react
npm error   @testing-library/react@"^13.0.0" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry
npm error this command with --force or --legacy-peer-deps
npm error to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error [REDACTION]\AppData\Local\npm-cache\_logs\2025-02-07T08_29_06_107Z-eresolve-report.txt

npm error A complete log of this run can be found in: [REDACTION]\AppData\Local\npm-cache\_logs\2025-02-07T08_29_06_107Z-debug-0.log
`npm install --no-audit --save @testing-library/jest-dom@^5.14.1 @testing-library/react@^13.0.0 @testing-library/user-event@^13.2.1 @types/jest@^27.0.1 @types/node@^16.7.13 @types/react@^18.0.0 @types/react-dom@^18.0.0 typescript@^4.4.2 web-vitals@^2.1.0` failed


CMD 03: js> npm install web-vitals

[REDACTION]\dev_sandbox.react\js> npm install web-vitals

added 1 package, and audited 1327 packages in 2s

268 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

```