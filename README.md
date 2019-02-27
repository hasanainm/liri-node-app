# liri-node-app

### In this node application the user can pick between 4 command line interface's to communicate with api's and recieve information back to the user. Below are the command lines from whichever the user wishes to use.
* ```concert-this```
* ```spotify-this-song``` 
* ```movies-this``` 
* ```do-what-it-says``` 

If the user types the command line along with a artist name, song name, or movie name, javascript "switch case" will be triggered and will properly use whatever fuction was associated with the switch case which then will allow communication with api to retrive information for the user.

### Examples:
* ```concert-this```
<img width="745" alt="concert" src="https://user-images.githubusercontent.com/44953576/53467874-8d43bc80-3a1d-11e9-8798-b001fcfde6f5.png">

* ```spotify-this-song```
<img width="477" alt="spotify" src="https://user-images.githubusercontent.com/44953576/53468170-bfa1e980-3a1e-11e9-964b-e3558f0a76eb.png">

* ```movies-this```
<img width="945" alt="movie" src="https://user-images.githubusercontent.com/44953576/53468149-ac8f1980-3a1e-11e9-8c72-d242a2d02ca0.png">


```do-what-it-says```


This one will use the require "fs", which is a built in node.js module, it is useful for reading and writing a file. In this case it is reading the file and the file has a song called "I want it that way"

<img width="957" alt="do-what-it-says" src="https://user-images.githubusercontent.com/44953576/53468164-b7e24500-3a1e-11e9-9815-0a6b7cc73f5e.png">

The technologies used for this application are node.js, Javascript

And the modules used are axios, node-spotify-api, fs, moment
