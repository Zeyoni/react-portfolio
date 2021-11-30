import slider1 from '../../src/photos/direktkurse.jpg'
import slider2 from '../../src/photos/kokhuceyre.png'
import slider3 from '../../src/photos/raufsadiqov.png'
import slider4 from '../../src/photos/portfolio.png'
import slider5 from '../../src/photos/food.png'

const initialState = {
    source: [
        {
            link: "https://direktkurse.com/az",
            image: slider1,
        },
        {
            link: "http://kokhuceyre.az/az",
            image: slider2,
        },
        {
            link: "https://raufsadiqov.az/az",
            image: slider3,
        },
        {
            link: "https://zeyoni.github.io/myBlog/",
            image: slider4,
        },
        {
            link: "https://zeyoni.github.io/Food/",
            image: slider5,
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