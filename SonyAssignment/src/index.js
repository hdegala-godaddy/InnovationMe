
    console.log("Harsha I am hrere");
    import MainController from './main-controller';

    document.addEventListener('readystatechange', (event) => {
        log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
    });
    
    document.addEventListener('DOMContentLoaded', (event) => {
        log.textContent = log.textContent + `DOMContentLoaded\n`;
        MainController.init();
    });

    






