function pairMaker(namesArray, boolean) {
  const arrlen = namesArray.length;
  let teamMembers = 2;
  let teams = Math.floor(arrlen / teamMembers);
  let pairs = [];
  //Functions
  //This function is to generate the pair without merging extra person to the existing pair
  function generatePairsWithExtranameNoMerge() {
    let createTheRandomNumber = Math.floor(Math.random() * arrlen);
    let extraPlayer = namesArray[createTheRandomNumber];

    namesArray.splice(createTheRandomNumber, 1);
    let randomArr = [];
    for (let i = 0; i < arrlen - 1; i++) {
      let ranname2 = namesArray[Math.floor(Math.random() * namesArray.length)];
      randomArr.push(ranname2);
      namesArray = namesArray.filter((item) => item !== ranname2);
    }
    for (let i = 0; i < teams; i++) {
      pairs.push([]);
    }

    for (let i = 0; i < arrlen - 1; i++) {
      let pushed = false;
      while (pushed === false) {
        let randomnumber = Math.floor(Math.random() * teams);
        if (pairs[randomnumber].length != teamMembers) {
          pairs[randomnumber].push(randomArr[i]);
          pushed = true;
        }
      }
    }
    pairs.push([extraPlayer]);

    return pairs;
  }
  // this function is to merge the extra person with the existing pair
  function generatePairsWithExtranameWithMerge() {
    let createTheRandomNumber = Math.floor(Math.random() * arrlen);
    let extraPlayer = namesArray[createTheRandomNumber];

    namesArray.splice(createTheRandomNumber, 1);
    let randomArr = [];
    for (let i = 0; i < arrlen - 1; i++) {
      let ranname2 = namesArray[Math.floor(Math.random() * namesArray.length)];
      randomArr.push(ranname2);
      namesArray = namesArray.filter((item) => item !== ranname2);
    }
    for (let i = 0; i < teams; i++) {
      pairs.push([]);
    }

    for (let i = 0; i < arrlen - 1; i++) {
      let pushed = false;
      while (pushed === false) {
        let randomnumber = Math.floor(Math.random() * teams);
        if (pairs[randomnumber].length != teamMembers) {
          pairs[randomnumber].push(randomArr[i]);
          pushed = true;
        }
      }
    }

    pairs[pairs.length - 1].push(extraPlayer);

    return pairs;
  }
  // this function is to generate the pairs when the exact pairs can be formed
  function generatePairsWithPerfectPeople() {
    let randomArr = [];
    for (let i = 0; i < arrlen; i++) {
      let ranname2 = namesArray[Math.floor(Math.random() * namesArray.length)];
      randomArr.push(ranname2);
      namesArray = namesArray.filter((item) => item !== ranname2);
    }

    for (let i = 0; i < teams; i++) {
      pairs.push([]);
    }

    for (let i = 0; i < arrlen; i++) {
      let pushed = false;
      while (pushed === false) {
        let randomnumber = Math.floor(Math.random() * teams);
        if (pairs[randomnumber].length != teamMembers) {
          pairs[randomnumber].push(randomArr[i]);
          pushed = true;
        }
      }
    }
    return pairs;
  }

  if (arrlen % 2 != 0) {
    if (boolean) {
      return generatePairsWithExtranameNoMerge();
    } else {
      return generatePairsWithExtranameWithMerge();
    }
  } else {
    return generatePairsWithPerfectPeople();
  }
}

// Decision is to ask if the user wants to add the extra player in the created pairs(true)
// or wants to merge with the existing pairs(false)

module.exports.pairMaker = pairMaker;
