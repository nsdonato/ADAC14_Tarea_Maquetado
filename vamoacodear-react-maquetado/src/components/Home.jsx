import Footer from "./Footer";
import Button from "./Button";
import Tags from "./Tags";
import Posts from "./Posts";
import CardProfile from "./CardProfile";
import CardPost from "./CardPost";

const Home = () => {
    return (
        <>
            <main>
                <header className="main_header">
                    <h1>MY BLOG</h1>
                    <p>Welcome to the blog of <span className="tag_black">unknown</span></p>
                </header>

                <div className="main_container">
                    <section>
                        <CardPost title='React 18' description='Migrando a React 18' />

                        <div className="card">
                            <img
                                src="/bridge.jpg"
                                alt="Imágen de una mujer cruzando un puente"
                            />
                            <div className="card_container">
                                <header className="card_header">
                                    <h1>BLOG ENTRY</h1>
                                    <p>
                                        Title description,
                                        <span className="card_date">Abril 2, 2014</span>
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
                                    <span className="card_row_comments"
                                    ><b>Comments</b>
                                        <span
                                            className="card_row_comments_count tag_black tag tag_rounded"
                                        >2</span
                                        ></span
                                    >
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside>
                        <CardProfile />
                        <Posts />
                        <Tags />
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Home