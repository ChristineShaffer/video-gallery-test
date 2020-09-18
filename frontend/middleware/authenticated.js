export default function ({ store, redirect, route }) {
  if (store.state.authenticated) {
    // User is authenticated
    if (route.path === "/" || route.path === "/login") {
      // On index or login page so we should redirect
      return redirect("/videos");
    }
  } else {
    // User not authenticated
    if (route.path !== "/login") {
      // Not on login page; return to login page
      return redirect("/login");
    }
  }
}
