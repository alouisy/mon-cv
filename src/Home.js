// import { ReactComponent as MonCv } from './mon_cv.svg';
// import { ReactComponent as MonCv } from './mon_cv_2.svg';
// import { ReactComponent as MonCv } from './mon_cv_3.svg';
import { ReactComponent as MonCv } from './mon_cv_4.svg';


const Home = () => {

    return (
        <div className="cv-container">
            <h2 className="page-title"><i class="fas fa-sort-down"></i> Curriculum Vitae</h2>
            <MonCv />
        </div>
    );
}

export default Home;