const bat = document.querySelector('.bat');
const openWings = document.querySelectorAll('.open-wing')
const closedWings = document.querySelectorAll('.closed-wing')

const rollOut = () => {
    setTimeout(()=>{
        closedWings.forEach((wing) => 
            wing.style.display = "none"
        )
        openWings.forEach((wing) => 
            wing.style.display = "block"
        )
      }, 5000);

      setTimeout(()=>{
        closedWings.forEach((wing) => 
            wing.style.display = "block"
        )
        openWings.forEach((wing) => 
            wing.style.display = "none"
        )
        bat.style.animation = "spinOut 5s linear 1"
        bat.style.animationFillMode = "forwards"
      }, 10000);

      setTimeout(() => {
        bat.style.animation = "spinIn 5s linear 1"
        bat.style.animationFillMode = "forwards"
        rollOut()
      }, 16000)
}

setTimeout(()=>{
    rollOut()
  }, 1);