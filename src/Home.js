import { ReactComponent as MonCv } from './mon_cv.svg';

const Home = () => {

    return (
        <div className="cv-container">
            <h2 className="page-title"><i className="fas fa-sort-down"></i> Curriculum Vitae</h2>
            <MonCv />
            <h3 className="download-link">Télécharger le pdf <a href="/CV_Axel_LOUISY-LOUIS_2021.pdf" download><i className="fas fa-file-pdf"></i></a></h3>
        </div>
    );
}

export default Home;