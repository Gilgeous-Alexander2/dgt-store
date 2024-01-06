import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation, } from 'react-i18next';
import en from './en/translate.json';
import ru from './ru/translate.json';
import { pages } from 'next/dist/build/templates/app-page';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18next.use (HttpApi)
i18next.use(initReactI18next)
i18next.use(LanguageDetector).init({
        // if you're using a language detector, do not define the lng option

        backend: {
            loadPath: '/locales/{{lng}}/translate.json'
        },
        // resources: {
        //     en: {
        //         translation: {
        //             "header": {
        //                 "about_us": "About us",
        //                 "Catalog": "Catalog",
        //                 "News": "News",
        //                 "Video": "Video",
        //                 "Dealers": "Dealers",
        //                 "Contacts": "Contacts"
        //             },
        //             "lng": "en",
        //             "Main_page_head": {

        //             },
        //             "description": {
        //                 "part1": "Simple example",
        //                 "part2": "😉"
        //             },
        //             "userMessagesUnread_one": "You have {{count}} unread message.",
        //             "userMessagesUnread_other": "You have {{count}} unread messages."
        //         }
        //     },
        //     ru: {
        //         translation: {
        //             "header": {
        //                 "about_us": "Оhhh нас",
        //                 "Catalog": "Каталог",
        //                 "News": "Новости",
        //                 "Video": "Видео",
        //                 "Dealers": "Дилеры",
        //                 "Contacts": "Контакты"
        //             },
        //             "lng": "ru",
        //             "description": {
        //                 "part1": "Простой примерчик",
        //                 "part2": ""
        //             },
        //             "userMessagesUnread_one": "You have {{count}} unread message.",
        //             "userMessagesUnread_other": "You have {{count}} unread messages."
        //         }
        //     }
        // },
        
        fallbackLng: 'ru',
        detection: {
           order: ['localStorage','cookies'],
           caches: ['localStorage','cookies']
        } ,
        // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
        // set returnNull to false (and also in the i18next.d.ts options)
        // returnNull: false,
    });

