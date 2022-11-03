function sleepIn(weekday, vacation){
  if(!weekday || vacation) {
       return true
     } else {
       return false
     }
}

//------------------------------------------------------

function sleepIn(weekday, vacation) {
    return !weekday || vacation;
  }