import { lazy, LazyExoticComponent } from "react";
// import LazyLayout from "../01-lazyload/layout/LazyLayout";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-Lazy',
        path: 'no-Lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];