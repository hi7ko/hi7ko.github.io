function startAnimation() {
    anime({
        //targets: '#animation-box',
        //opacity: 0.0,
        //easing: 'linear',
        //duration: 1000,

        targets: '#animation-box',
        keyframes: [
            {opacity: 0},
            {opacity: 1}
        ],
        easing: "linear",
        duration: 500,
        loop: true

    });
}