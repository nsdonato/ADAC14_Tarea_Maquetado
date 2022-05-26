const Posts = () => {
    return (
        <div className="card card_popular_posts">
            <header className="card_popular_posts_header">
                <span>Popular Posts</span>
            </header>
            <ul className="card card_popular_posts_list">
                <li>
                    <div className="card_popular_posts_container">
                        <div className="card_popular_posts_img_container">
                            <img
                                src="/workshop.jpg"
                                alt="Imágen de un escritorio con útiles"
                            />
                        </div>

                        <p className="card_popular_posts_text">
                            Lorem<br />
                            Sed mattis nunc
                        </p>
                    </div>
                </li>
                <li>
                    <div className="card_popular_posts_container">
                        <div className="card_popular_posts_img_container">
                            <img
                                src="/gondol.jpg"
                                alt="Imágen de una gondola en la cima de una montaña"
                            />
                        </div>

                        <p className="card_popular_posts_text">
                            Ipsum<br />
                            Praes tinci sed
                        </p>
                    </div>
                </li>
                <li>
                    <div className="card_popular_posts_container">
                        <div className="card_popular_posts_img_container">
                            <img
                                src="/skies.jpg"
                                alt="Imágen de las nubes vista desde arriba"
                            />
                        </div>

                        <p className="card_popular_posts_text">
                            Dorum<br />Ultricies congue
                        </p>
                    </div>
                </li>
                <li>
                    <div className="card_popular_posts_container">
                        <div className="card_popular_posts_img_container">
                            <img
                                src="/rock.jpg"
                                alt="Imágen de la orilla de una montaña"
                            />
                        </div>

                        <p className="card_popular_posts_text">
                            Mingsum<br />
                            Lorem ipsum dipsum
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Posts