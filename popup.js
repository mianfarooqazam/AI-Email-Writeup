document.addEventListener('DOMContentLoaded', function() {
    const queryInput = document.getElementById('queryInput');
    const generateBtn = document.getElementById('generateBtn');
    const resultTextarea = document.getElementById('resultTextarea');
    const container = document.querySelector('.container');
  
    // Set the dimensions of the container based on window size
    function setContainerSize() {
      const width = Math.round(window.innerWidth * 0.5);
      const height = Math.round(window.innerHeight * 0.5);
      container.style.width = width + 'px';
      container.style.height = height + 'px';
    }
  
    // Set the container size initially and update on window resize
    setContainerSize();
    window.addEventListener('resize', setContainerSize);
  
    generateBtn.addEventListener('click', function() {
      const query = queryInput.value;
      resultTextarea.value = query;
    });
  });
  

  