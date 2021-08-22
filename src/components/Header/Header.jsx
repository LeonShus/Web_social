import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    console.log(props)
    return (
        <header className={classes.header}>
            <div>
                <img className={classes.logo} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEUAAAD////6+vrt7e24uLjn5+fk5OTS0tIuLi7z8/Pc3Ny7u7tra2vDw8P8/Px6enqMjIw6Ojqurq6mpqZfX181NTVCQkKQkJBJSUmampqGhobKysogICBaWlp4eHgPDw8UFBRUVFRubm4kJCSgoKAbGxsTExMvLy9GRkZmzp3bAAAFtElEQVR4nO2ccVfaShDFCVoF0ViqtraigLZPv/8nfCcnc5PszW6gwGt2+u7vn3YscnY6YWf2ziyTiRBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBC/A95WJxXLH6YfW3251FXdUrOi5ptba7PzC4exl3Xyfhq/tyY/Q0OFuejrut03Jg/X2tzM288LJbjruxEPFLAvrcONmH1zaV581abm2nHQ8TVNVvz5YvZd10Hi8tR13YarswXM9dFyHbUxZ2Ca/Pku9nIHI9l/efVqKs7BRe1I1MzZ+bg0+Sn/e161OUdz6358c1sZI5lkzS8B/FT7caZmR/m4GLSJv6XMdd3ND/MC1SkT2ZX5RqKt4sxF3g05sQnM5+DzPGZ3PcIHsRbsy35T2e1SY+wQ37RZoLMcWc2b0P+QEJ4NduS//wNL7BUMl+PtMBjWU3DEL5S8o/9xBeoQO/NjkTMolr6DOLKHERx3f3U4ZOHzfUu8R55gwr0w+yzdudc8u5aJN4jaxDCJ7OR/Cvfboq5/RRFjkc9AxWo5b5J2YbwsehXObPE2+QLBwfaRXWUqLxCEJf2c396Bsemcxx8DjLEwl74ONJCDyWsQMPMUe8u8039LwjiU+KdcoUq0LdpmzkgnyJDfDH7eay1HgRXoIEX5P17x3s/UAW6LLtP4tAT7AWuN2k3sV2otLYF168esAqUtQtkBKjgC7ORSV4jb5UnqEDRPbPkXzYCN3UyJnaO9KNndCrQiq3501Zm3I2CnnHbe6s84fXa3lm+ty9pdGGz5+H/Se7YcuPyU81bEWYIPNc+RKluBVoRPeUiQaJtYQ/2dOKBItw27s3+GX1VWuHIF+RvFGEmGfIZl9sWV26CyNrFi9k9xXAaD3X+ekbiAzbvvXCHWpwtYQXab1x0GFT884XPs+RGl0TXpsx7PgMVJ4/ORDtoaFtYGtnaa/MWpagC5cZFSKp7mvN8Bo/OcOOCgAi+qU2uVnMEFShpF6mDH5QAFANcreYHb4fIHMnDO9L8qjYxxpCvnoEFb2pzVu5aMKd5Tqa5kXroBtaLtoUFkavV3LDdH6Xlgy13SAhNbU15ilJcgWLzHxyThTSOtjBVq3lBFSi07MXgLyHQe5UII4MiDPITorOjvcuRzljPSAkTO8bV7bHk+jvLQ1Ti6Dt8pk0chMv/dKUHQ1s9J4/f+Z1MxYyEBIUCIAb3nfaK+4iQdL1bmOCqZ8/P7ngkpOC0MMGlNonlGbJTzg/h9q8DcX9nSybEY4MGbTVL89xGC3HZZENtutegBUlPKx+D32hv23EI4mJMmODzspPh/d84I9JOO/MysEDCBFerLanzfZ5Hww6pQYvetAw13fLXaBoSwgSngORtoT+41AOB6sk5gDYQaonySThreOySToA1XBvgvPw+ccA7hSNai5HkgcDn3bNo2KOeTtToxa8/vNQD4W0xciaiCtRL77CBz7U0BNavQJE5nIQwnCat4Go1dVtoUO/Ii4S+hGo1ddXknzHWehjDQeKRWZcXvPBBg3QdVNmpj6mrq0F8P7S7WT7sP66RM3w/9LI1E+kyNq6RNZTmPxov+AoJTw65ISpKvUySrZis5ac4JF+vbGvlCjRx9PBARM+ovODreGZmLj/Foa/8WHXuPPmZTRikN3tShZC0C57VdAbND1VOOdYuYmxpU5n05rz8Xj400LZo5ik9zuoNwreBeN5yuK3hAmpbpGZmHX8xXTgTPVSOuyU4KHmdXR+k227ZUAXK90yd0hEsEvLT3I38FGfdjAmv6evLPN0DGgSRu0+MTPWvmrgDbYui/URWZD86sz/QMwyau/gLQtj4UuP1Xuwgt10PUaLSPVPnXLQOsnaR9ejM/rw2DqICHb4t5BDoGa6/J2IQ1GdofOPg61S7EEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEKI4/gXu/k+NmGoM0EAAAAASUVORK5CYII=' />
            </div>
            <div className={classes.login}>
                {!props.isAuth ? 
                    <NavLink to='/login'><div>Login</div></NavLink> : <div>{props.login}</div>
                    // <NavLink to={`/profile/${props.id}`}><div>{props.login}</div></NavLink>
                }
                
            </div>

        </header>
    )
}

export default Header;