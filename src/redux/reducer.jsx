import slider1 from '../../src/photos/direktkurse.jpg'
import slider2 from '../../src/photos/kokhuceyre.png'
import slider3 from '../../src/photos/raufsadiqov.png'
import slider4 from '../../src/photos/marketplace.png'
import slider5 from '../../src/photos/bikerstore.png'

const initialState = {
    source: [
        {
            link: "https://direktkurse.com/az",
            image: slider1,
            description: "Direkt kurse",
        },
        {
            link: "http://kokhuceyre.az/az",
            image: slider2,
            description: "Kök Hüceyrə",
        },
        {
            link: "https://raufsadiqov.az/az",
            image: slider3,
            description: "Rauf Sadiqov",
        },
        {
            link: "https://react-marketplace0.netlify.app/",
            image: slider4,
            description: "React e-commerce",
        },
        {
            link: "https://zeyoni.github.io/BikerStore/",
            image: slider5,
            description: "Biker Store",
        }
    ]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default Reducer;