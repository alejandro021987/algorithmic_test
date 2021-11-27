(function() {
    document.getElementById('submit').addEventListener('click',init);
    document.getElementById('input').addEventListener('focus', function() { this.value = "" });

    function init() {
        var elem = document.getElementById('input'),
            elemValue = elem.value;
        elem.value = fibonacci(elemValue);
    }
    function fibonacci(n) {
        n = parseInt(n);

        if ( n === 0 || n < 0) return [];
        if ( n === 1 ) return 0;
 		let i = 2; 
        let arrFib = [0,1];
        return calculateElements(i, n, arrFib ); 
    }
    
    function calculateElements(i, n, arrFib) {
    	console.log('i:'+i);
        if ( i >= n ) {
        	return arrFib;
        }else {
        	  const prev1 = (arrFib[i-1])? arrFib[i-1] : 0;
 	          const prev2 = (arrFib[i-2])? arrFib[i-2] : 0;
            arrFib[i] = prev1 + prev2;
            i++;
            return calculateElements(i, n, arrFib); 
        }
    
    } 
    
    
})();