// function Clock() {
//     return <p>HI - CLOCK</p>
// }

// export default Clock;


import { Component } from "react";


export class Clock extends Component {            // 1 - Project Initialization with setting the component (super and props, this.state)
    constructor(props) {
        super(props);

        this.state={
            time: new Date().toLocaleTimeString()    // .toLocaleTimeString() Возвращает сроку с представлением части со временем текущей даты (в PM и АМ, полностью ЧЧ:ММ:СС).
        }
    }

    componentDidMount() {                       // 3 - Компонент узнал с помощью componentDidMount(), что мы должны обновлять время (наше состояние) каждую секунду 
        this.timerID = setInterval(() =>        // 4 - Внyтри компонент Clock указал браузеру, что нужно настроить таймер для выхова метода tick()
        this.tick(), 1000)                      // метод tick (рандомное название дали) вызывается каждую секунду (setInterval(функция, 1000 - каждую секунду)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)             // 6 -  Если в какой-то момент захотим остановить таймер, нужна эта команда (by default)
    }

    tick() {                                    // 5 - Внтури него компонент Clock обновляет пользовательский интерфейс, вызывая setState(), т.е. обновляя наше состояние
        this.setState({
            time: new Date().toLocaleTimeString()      
        })
    }

        render() {                              // 2 - Вызвался метод render() чтобы нам отобразить первоначальное состояние (статические время, которое еще не двигалось)
            return(                             // React знает, что состояние изменилось, снова вызывая метод render()
                <div>                           
                    <p className="Time">{this.state.time}</p>
                </div>
            )
        }
        
    }
    
export default Clock;