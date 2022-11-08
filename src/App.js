import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((publicRoute, index) => {
                            const Page = publicRoute.component;
                            let Layout = DefaultLayout;

                            if (publicRoute.layout) {
                                Layout = publicRoute.layout;
                            } else if (publicRoute.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={publicRoute.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
