import Main from './components/Main';
import Header from './components/Header'
import './css/style.css';

function App() {
    const state = {
        logo: 'Component Example',
        title: 'Component Example',
        text: 'This is a basic example of an html component'
    }
    const html = `${Header()} ${Main()}`
    document.body.innerHTML = html;
}


App();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then((register) => {
            console.log(register) })
};