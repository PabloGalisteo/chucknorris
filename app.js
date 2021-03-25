document.querySelector('.button-primary').addEventListener('click', getJokes)
const joke = document.querySelector('.joke')

function getJokes(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.icndb.com/jokes/random', true)

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText)

            let output = response.value.joke

            if(response.type === 'success') {
             return joke.innerHTML = output
                };
            } else {
                output +=  '<h2>Chuck Norris is sick</h2>'
            }
            
            
        }
        xhr.send()
    
        e.preventDefault()
    }


