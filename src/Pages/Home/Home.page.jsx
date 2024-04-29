import './Home.page.css'
import bgimage from '../../assets/img/tech/image4.jpg' ;
export function Home() {
    return <>
        
        <section>
    <div style={{
        height: "600px",
        width: "100%",
        background: `url(${bgimage})`
    }}>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
                    <div style={{
                        "maxWidth": "350px"
                    }}>
                        <h1 className="text-uppercase fw-bold text-primary">Hello Everyone,<br />fringi dictum, augue purus</h1>
                        <p className="text-primary my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </>;
}
