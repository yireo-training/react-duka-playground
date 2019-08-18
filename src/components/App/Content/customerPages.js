import CustomerPageDashboard from "components/Pages/CustomerPage/Dashboard";
import CustomerPageAddressBook from "components/Pages/CustomerPage/AddressBook";
import CustomerPageAccount from "components/Pages/CustomerPage/Account";
import CustomerPageAccountEdit from "components/Pages/CustomerPage/Account/Edit";
import CustomerPageAccountChangePassword from "components/Pages/CustomerPage/Account/ChangePassword";
import CustomerPageOrders from "components/Pages/CustomerPage/Orders";
import WishlistPage from "components/Pages/WishlistPage";
import DownloadsPage from "components/Pages/DownloadsPage";

export default [
  { path: "/customer", component: CustomerPageDashboard },
  { path: "/customer/addressbook", component: CustomerPageAddressBook },
  { path: "/customer/orders", component: CustomerPageOrders },
  { path: "/customer/account", component: CustomerPageAccount },
  { path: "/customer/account/edit", component: CustomerPageAccountEdit },
  { path: "/customer/account/changePassword", component: CustomerPageAccountChangePassword },
  { path: "/wishlist", component: WishlistPage },
  { path: "/downloads", component: DownloadsPage }
];
