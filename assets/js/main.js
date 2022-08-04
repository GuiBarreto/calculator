function getCalculator() {
    return {
        display: document.querySelector('.display'),
        
            start: function() {
                this.clickButtons()
                this.pressEnter()
            },

            pressEnter() {
                this.display.addEventListener('keyup', e => {
                    if(e.keyCode === 13) {
                        this.calculation()
                    }
                })
            },

            clearDisplay() {
                this.display.value = ''
            },

            deleteLast() {
                this.display.value = this.display.value.slice(0, -1)
            },

            calculation() {
                let mathAccount = this.display.value

                try{
                    mathAccount = eval(mathAccount);
                    this.display.value = String(mathAccount)
                }   catch(e) {
                    alert('Invalid account')
                    return
                }
            },

            
            clickButtons() {
                document.addEventListener('click', e => {
                    const el = e.target
                    
                    if(el.classList.contains('btn-num')) {
                        this.btnToDisplay(el.innerText)
                    }

                    if(el.classList.contains('btn-clear')) {
                        this.clearDisplay()
                    }

                    if(el.classList.contains('btn-del')) {
                        this.deleteLast()
                    }

                    if(el.classList.contains('btn-eq')) {
                        this.calculation()
                    }
                })
            },
            
            btnToDisplay(amount) {
                this.display.value += amount
            }
        }
}

const calculator = getCalculator()
calculator.start()