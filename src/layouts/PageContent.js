import { Route, Switch } from "react-router-dom/";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import AboutPage from "../pages/AboutPage";

const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop" exact>
          <ProductListPage />
        </Route>
        <Route path="/product" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
