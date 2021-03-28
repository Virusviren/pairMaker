# What is the Use of this NPM

To create the pairs for the application where you need to randomly make the pair and also to sometimes its hard to exclude something or want to add with the existing pair by making an exception.

# Installation

`npm i pairMaker --save`
Then...
Decision is to ask if the user wants to add the extra player in the created pairs(true) or wants to merge with the existing pairs(false)

```
pairMaker(namesArray, boolean);

```

## Return

nameArray = ["bob","tom","jerry","marley","mobile"]
boolean = true
return [["bob","jerry"],["tom","mobile"],["marley"]]

nameArray = ["bob","tom","jerry","marley","mobile"]
boolean = false
return [["bob","jerry"],["tom","mobile","marley"]]
