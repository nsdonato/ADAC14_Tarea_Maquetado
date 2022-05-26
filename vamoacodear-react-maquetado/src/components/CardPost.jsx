import Button from "./Button";
const CardPost = (props) => {
    const { title, description, datePost, information } = props;

    return (
        <div className="card">
            <img src="/public/img/woods.jpg" alt="Imágen de un bosque" />
            <div className="card_container">
                <header className="card_header">
                    <h1>{title}</h1>
                    <p>
                        {description},
                        <span className="card_date">Abril 7, 2014</span>
                    </p>
                </header>
                <div className="card_main">
                    <p>
                        Mauris neque quam, fermentum ut nisl vitae, convallis maximus
                        nisl. Sed mattis nunc id lorem euismod placerat. Vivamus
                        porttitor magna enim, ac accumsan tortor cursus at. Phasellus
                        sed ultricies mi non congue ullam corper. Praesent tincidunt
                        sed tellus ut rutrum. Sed vitae justo condimentum, porta
                        lectus vitae, ultricies congue gravida diam non fringilla.
                    </p>
                </div>
                <div className="card_row">
                    <Button classNameName="card_row_btn"><b>READ MORE »</b></Button>
                    <span className="card_row_comments"><b>Comments</b>
                        <span className="card_row_comments_count tag_black">0</span></span>
                </div>
            </div>
        </div>
    )
}

export default CardPost