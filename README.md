
# Errsole First Task

A simple express app with get /hello api upon surfing returns a json object containing "hello world!" message and status 200.


## Installation

1. Clone the repository:

```bash
  git clone https://github.com/YadamVinay369/errsole_first_task.git

```

2. Navigate to the project directory:

```bash
  cd errsole_first_task
```
3. Open the project in a code editor (e.g., VS Code):

```bash
  code .
```

4. open terminal in the vscode and type

```bash
  npm i express nodemon 
```




    
## Usage Instructions

Start the server by entering the below command in the vscode terminal.

```bash
npm run server
```

## Note

In the package.json file I have added explicitily
```bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon server.js"
    
  },
```
Now to run the server, we can simpy use the command

```bash
npm run server
```
instead of

```bash
nodemon sever.js
```
## API usage

 After starting the server, open any browser and surf the below api.

``` bash
http://localhost:5000/hello
```


## Authors

- [@ Vinay Yadam](https://www.github.com/YadamVinay369)

