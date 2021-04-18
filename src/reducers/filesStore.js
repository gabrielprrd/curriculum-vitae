// Images
import textIcon from '../assets/images/txt-logo.png';
import jsIcon from '../assets/images/js-logo.png';
import pdfIcon from '../assets/images/pdf-logo.png';

const INITIAL_STATE = {
  files: [
    { title: 'curriculum.txt', icon: textIcon },
    { title: 'portfolio.js', icon: jsIcon },
    { title: 'resume.pdf', icon: pdfIcon }
  ],
};

export default INITIAL_STATE;
