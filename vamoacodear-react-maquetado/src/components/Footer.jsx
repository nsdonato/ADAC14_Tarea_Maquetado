import Button from './Button';

const Footer = () => {
    return (
        <footer>
            <div>
                <Button className="footer_btn_prev footer_btn" disabled>Previous</Button>
                <Button className="footer_btn_next footer_btn">Next »</Button>
            </div>
            <span>Powered by <a className="footer_web" href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></span>
        </footer>
    )
}

export default Footer