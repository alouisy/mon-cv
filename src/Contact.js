const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="page-title"><i className="fas fa-sort-down"></i> Contact</h2>
            <div className="contact-list">
                <h2><a className="contact-link" href="mailto:louisylouis.axel@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> louisylouis.axel@gmail.com</a></h2>
                <h2><a className="contact-link" href="https://www.linkedin.com/in/axel-louisy-louis-95b5b7162/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> linkedin.com/in/axel-louisy-louis-95b5b7162</a></h2>
                <h2><a className="contact-link" href="https://github.com/alouisy" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> github.com/alouisy</a></h2>
                {/* <h2><a className="contact-link" href="https://www.linkedin.com/in/axel-louisy-louis-95b5b7162/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a></h2>
                <h2><a className="contact-link" href="https://github.com/alouisy" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a></h2>
                 <h2><a className="contact-link" href="mailto:louisylouis.axel@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i> E-mail</a></h2> */}
            </div>
        </div>
    );
}

export default Contact;