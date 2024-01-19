import companyLogo from './assets/image/flower1-removebg-preview.png';
import company from './assets/image/cand-removebg-preview.png';
import oLogo from './assets/image/clo-removebg-preview.png';
const Fromtext = () => {
    return <>
        <div className="container-fluid bg">
            <div className="row">
                <div className="col-lg-12 co">
                    <ul>
                        <li className="pu">home</li>
                        <li className="puo">services</li>
                        <li className="puo">about us</li>
                        <li className="puo">contact</li>
                        <li><i className="fa fa-home hi"></i>
                            logo</li>
                    </ul>
                </div>
                <div className="cc">
                    <div className="cc1">
                        <h4>THE HOUSE OF YOUR</h4>
                        <h1>DREAMS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque temporibus error quos quibusdam sit est accusantium consequuntur reprehenderit, aspernatur eos molestias expedita, nesciunt quo magnam inventore id iste, maiores reiciendis?</p>
                        <div className="btn btn-warning">read more</div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <img className="img m1" src={companyLogo} alt="flower" />
                    <img className="img m4" src={oLogo} alt="flower" />
                    <img className="img m3" src={company} alt="flower" />

                </div>
            </div>
        </div>

    </>;
};

export default Fromtext;