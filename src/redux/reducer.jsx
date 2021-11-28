import slider1 from '../../src/photos/direktkurse.png'
import slider2 from '../../src/photos/kokhuceyre.png'
import slider3 from '../../src/photos/raufsadiqov.png'
import slider4 from '../../src/photos/portfolio.png'
import slider5 from '../../src/photos/food.png'

const initialState = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
]


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default Reducer;