// Optional JS for interaction (pausing/resuming animation)
document.querySelector('.cat-container').addEventListener('click', function() {
    const arms = document.querySelectorAll('.arm');
    const tails = document.querySelectorAll('.tail');
  
    arms.forEach(arm => {
      if (arm.style.animationPlayState === 'paused') {
        arm.style.animationPlayState = 'running';
      } else {
        arm.style.animationPlayState = 'paused';
      }
    });
  
    tails.forEach(tail => {
      if (tail.style.animationPlayState === 'paused') {
        tail.style.animationPlayState = 'running';
      } else {
        tail.style.animationPlayState = 'paused';
      }
    });
  });
  