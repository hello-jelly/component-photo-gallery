import Component from './Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
        <img class="logo" src="./assets/logo-img.png" alt="horny logo, it's a pun">
        <h1>The Horny Friends Gallery</h1>
        </header>
        `;
    }
}

export default Header;