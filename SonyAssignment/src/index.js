
    /**
     * Welcome to Sony PlayStation assigment.
     * This module/file is Initial input file configured as input in web-pack.
     * 
     * ****************************************************************************************
     * Please note that before ES6 it was a common practise to use a IIFE around in each file
     * ex : 
     * (function(){
     * 
     * })();
     * This was done from polluting global namespace & scope or to prevent
     * third party api's/namespace confluting. 
     * , but after ES6 with modules and module.exoprt I have used modules to organize code.
     * You might be seeing 
     * let variable, in files but they are only for that file/module only
     * ******************************************************************************************
     * 
     * The over all design is based on mixture of both MVC and MVVM architecture style.
     * 
     * Apart from the MVC style there are services for API fetching, image caching.
     * Constants and ErrorConstants usefull for internatinalization.
     * 
     * Utilty functions for HTMLDom manipulation, 
     * ValidationUtils for parsing and validating queryString.
     * CommonUtils for debounce logic etc.
     * 
     * At the top level I have used MVC to modularize code in to Model, View, Controller.
     *
     * Though View here is a single HTML for having the static content, the dynamic content
     * such as stream item component is based on view height available.
     * 
     * The controllers are subdivided on per component or per HTML section basis.
     * Each controller has its own event handlers.
     * Main controller interacts with all other controllers using 
     * pub/sub pattern or observer/observable pattern. This could have been done using
     * Event mechanism but inorder to avoid global broadcasting of events registration
     * mechanism is used.
     * 
     * Used debounce logic for search query-param validation, to reduce throtling.
     * 
     * Models 
     * API service is used for retreving data from back-end
     * LRU cache used for images
     * 
     * 
     */
    import './styles.css';
    import MainController from './Controllers/main-controller';
    import Logger from './Services/LogService';
    
    /**
     * Add event listener for DOMContentLoaded, so that our main controller 
     * gets called only after all of the Dom content is loaded.
     */
    let load = function load(){
        window.removeEventListener("load", load, false);
        Logger.log("Dom Content Loaded ... ");
        MainController.init();
    } 
    window.addEventListener('load', function(event){
        load();
    });

    window.addEventListener('resize', function(event){
        Logger.log("Browser resized ... ");
        MainController.resize();
    });

    






