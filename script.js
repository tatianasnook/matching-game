    window.addEventListener('load', generateFaces)

    let numberOfFaces = 5;
    const theLeftSide = document.querySelector('#leftSide');
    const theRightSide = document.querySelector('#rightSide');
    const btn = document.querySelector('#btn')
    let numOfAttempts = document.querySelector('#attempts');
    let gameCount = 0;
    numOfAttempts.textContent = gameCount;
    
    btn.addEventListener('click', resetThePage)
    
    function generateFaces(){
      for(let i = 0; i < numberOfFaces; i++){
        let face = document.createElement('img');
        face.src = 'smile.png';

        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top  = randomTop + 'px';
        face.style.left = randomLeft + 'px';

        theLeftSide.appendChild(face)
      }

      const leftSideImages = theLeftSide.cloneNode(true);
      leftSideImages.removeChild(leftSideImages.lastChild);
      theRightSide.appendChild(leftSideImages);

      theLeftSide.lastChild.addEventListener('click', nextLevel);
      document.body.addEventListener('click', gameOver);
    }

    function nextLevel(event){
      event.stopPropagation();
      gameCount += 1;
      numOfAttempts.textContent = gameCount;
      numberOfFaces += 5;

      while(theLeftSide.firstChild){
        theLeftSide.removeChild(theLeftSide.firstChild)
      }

      while(theRightSide.firstChild){
        theRightSide.removeChild(theRightSide.firstChild)
      }
      generateFaces();
    }

    function gameOver(){
      alert('Game Over!');
      resetThePage()
      leftSideImages.lastChild.removeEventListener('click', nextLevel)
      document.body.removeEventListener('click', gameOver)
    }

    function resetThePage(){
      location.reload()
      
    } 