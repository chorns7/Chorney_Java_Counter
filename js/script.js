let counter = 150; 

        
        const counterDisplay = document.getElementById('counterValue');
        const incrementButton = document.getElementById('incrementButton');
        const decrementButton = document.getElementById('decrementButton');
        const resetButton = document.getElementById('resetButton');

        
        function updateCounterDisplay() {
            counterDisplay.textContent = counter;
        }

        
        function incrementCounter() {
            counter += 3;
            updateCounterDisplay();
        }

        
        function decrementCounter() {
            counter -= 1;
            
            updateCounterDisplay();
        }

        
        function resetCounter() {
            counter = 0; 
            updateCounterDisplay();
        }

        
        incrementButton.addEventListener('click', incrementCounter);
        decrementButton.addEventListener('click', decrementCounter);
        resetButton.addEventListener('click', resetCounter);

        
        updateCounterDisplay();