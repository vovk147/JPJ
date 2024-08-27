import { Link } from "react-router-dom"
import "./ContLink.scss"


const ContLink = () => {
    return (
        <div className="ContLink">
            <p className="Cont">
                <strong>Masz pytania?</strong>
                <Link className="link" to={"/Kontakt"}>Skontaktuj się z nami!</Link> Chętnie udzielimy wsparcia i pomożemy rozwiać wszelkie wątpliwości dotyczące Twojej inwestycji.
            </p>
        </div>

    )
}


export default ContLink