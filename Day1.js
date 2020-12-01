const pageNumbs = document.querySelector('pre').innerText.trim().split('\n')

const numy = pageNumbs.map(n => +n)

1.
for (let i = 0; i < numy.length; i++) {
    for (let j = i+1; j < numy.length; j++) {
        if(numy[i]+numy[j] == 2020) {
            console.log(numy[i]*numy[j]);
        }
    }
}

2.
for (let i = 0; i < numy.length; i++) {
    for (let j = i+1; j < numy.length; j++) {
        for (let k = j+1; k < numy.length; k++) {
            if(numy[i]+numy[j]+numy[k] == 2020) {
                console.log(numy[i]*numy[j]*numy[k]);
            }
        }
    }
}
