import Popover from './components/popover/Popover';

const demoBtnOne = document.querySelector('.demo-btn_one');
const demoBtnTwo = document.querySelector('.demo-btn_two');

const title = 'Давайте не будем укрепляться в мысли, что чистый разум не скован границами';
const text = 'В своём стремлении повысить качество жизни, они забывают, что перспективное планирование, в своём классическом представлении, допускает внедрение соответствующих условий активизации.';

const popoverOne = new Popover(demoBtnOne, title, text);
const popoverTwo = new Popover(demoBtnTwo, title, text);

console.log(popoverOne, popoverTwo);
