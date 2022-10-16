function parrotTrouble(talking, hour){
  if(talking && hour <7 || talking && hour >20) {
    return true
  } else {
    return false
  }
}
  