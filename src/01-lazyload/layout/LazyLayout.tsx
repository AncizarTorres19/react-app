import {
    Routes,
    Route,
    NavLink,
    Navigate
} from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from '../pages';

export const LazyLayout = () => {
    return (
        <div>
            <h1>Lazy Layout Page</h1>
            <ul>
                <li>
                    <NavLink to="Lazy1">Lazy 1</NavLink>
                </li>
                <li>
                    <NavLink to="Lazy2">Lazy 2</NavLink>
                </li>
                <li>
                    <NavLink to="Lazy3">Lazy 3</NavLink>
                </li>
            </ul>


            <Routes>
                <Route path="lazy1" element={<LazyPages1 />} />
                <Route path="lazy2" element={<LazyPages2 />} />
                <Route path="lazy3" element={<LazyPages3 />} />
                <Route path="*" element={<Navigate replace to="lazy1" />} />
                {/* <Route path="*" element={<h1>Not Found</h1>} /> */}
            </Routes>
        </div>
    )
}

export default LazyLayout;
