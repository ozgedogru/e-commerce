import { Route, Switch } from "react-router-dom/";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import ProductDetailPage from "../pages/ProductDetailPage";

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
      </Switch>
    </div>
  );
};

export default PageContent;
