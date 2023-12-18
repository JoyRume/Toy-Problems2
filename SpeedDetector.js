function carSpeed(speed){
    if (speed<=70){
      console.log("OK")
      return;
    }
    
    
    const points = Math.floor((speed - 70) / 5 )
    if(points>12){
      console.error("licence suspended")
    }else {
      console.log("Points:",points)
    }
      
  }
  
  const carlimit=70;
  carSpeed(carlimit)