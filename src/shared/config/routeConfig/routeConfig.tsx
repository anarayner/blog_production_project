import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

//объект, в которым для каждого enum укажем путь до компонента
export const RoutePass: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

//объявление routes
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
       path: RoutePass.main,
       element: <MainPage/>
},
    [AppRoutes.ABOUT]: {
        path: RoutePass.about,
        element: <AboutPage/>
    },
}

