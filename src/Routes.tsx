import { FC, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoader from 'components/loaders/PageLoader';
const Home = lazy(() => import('./pages/Home'));

const Routes: FC = () => {
    return (
        <Switch>
            <Route path="/">
                <Suspense fallback={<PageLoader />}>
                    <Home />
                </Suspense>
            </Route>
        </Switch>
    );
};
export default Routes;
