
            const d = document.getElementById('calc-disp');
            window.press = function(val) { d.value += val; }
            window.clearCalc = function() { d.value = ''; }
            window.evaluateCalc = function() {
                try {
                    d.value = eval(d.value);
                } catch(e) {
                    d.value = 'Error';
                }
            }
        