function diff21(n){
  if(n >= 0 && n <= 21) {
      return 21 - n
    } else if (n > 21){
      return (n - 21) * 2
    } else {
      return (21 - n)
    }
}