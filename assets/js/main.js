function getCalculator() {
        return {
            display: document.querySelector('.display'),


            start: function() {
                alert('Initiate Calculator')
            },
            
            clickButtons() {
                document.addEventListener('click', function(e) {
                    const el = e.target

                    if(el.classList.contains('btn-num')) {
                        this.btnToDisplay()
                    }
                })
            }
        }
}

const calculator = getCalculator()
calculator.start()