import { useState } from 'react'
import Button from '../Buttons/Button'
import classes from './Pagination.module.css'

export const Pagination = ({ totalItemsCount, usersOnPage, pageOnTarget, onPageChange, pageInBox = 10 }) => {
    //Узнаем кол-во страниц
    let pagesCount = Math.ceil(totalItemsCount / usersOnPage)
    let pagesArr = []

    for (let i = 1; i <= pagesCount; i++) {
        pagesArr.push(i)
    }
    //Группируем их что бы выдавать частями по клику
    let totalBoxes = Math.ceil(pagesCount / pageInBox)
    let [boxNumber, setBoxNumber] = useState(1)
    let leftBoxNumber = (boxNumber - 1) * pageInBox + 1
    let rightBoxNumber = boxNumber * pageInBox

    let nextPage = () => setBoxNumber(boxNumber + 1)
    let prePage = () => setBoxNumber(boxNumber - 1)

    return (

        <div className={classes.pageBox}>

            {boxNumber > 1 &&
                <Button onClickFunc={prePage} buttonText='<<'/>
                // <button onClick={prePage}>prev</button>
                }

            <div className={classes.pageLine}>
                {pagesArr
                    .filter(e => e >= leftBoxNumber && e <= rightBoxNumber)
                    .map((e, index) => <span key={index} className={`${classes.pageNum}
                                                ${pageOnTarget === e
                            ? classes.target
                            : classes.point}`
                    }
                        onClick={() => { onPageChange(e) }} >{e}</span>)}
            </div>

            {totalBoxes > boxNumber &&
                <Button onClickFunc={nextPage} buttonText='>>'/>}

        </div>

    )
}