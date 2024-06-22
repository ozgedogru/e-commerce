import { Route, Switch } from "react-router-dom/";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CategoryPage from "../pages/CategoryPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import ProtectedPage from "../pages/ProtectedPage";
import CreateOrderPage from "../pages/create-order-page/CreateOrderPage";
import SuccessOrderPage from "../pages/SuccessOrderPage";
import PreviousOrdersPage from "../pages/PreviousOrderPage";

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
        <Route path="/:category/:productId/:productNameSlug" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/shop/:categoryId/:gender/:title" exact>
          <CategoryPage />
        </Route>
        <Route path="/cart" exact>
          <ShoppingCartPage />
        </Route>
        <Route path="/order" exact>
          <ProtectedPage>
            <CreateOrderPage />
          </ProtectedPage>
        </Route>
        <Route path="/success" exact>
          <ProtectedPage>
            <SuccessOrderPage />
          </ProtectedPage>
        </Route>
        <Route path="/previous-orders" exact>
          <ProtectedPage>
            <PreviousOrdersPage />
          </ProtectedPage>
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
};

export default PageContent;
