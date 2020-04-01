function headerTitle(route, nameDefault) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : nameDefault;
  return routeName;
}

export default {
  getHeaderTitle: (route, nameDefault) => {
    return headerTitle(route, nameDefault);
  },
  shouldHeaderBeShown: (route, found) => {
    const nameTitle = headerTitle(route, found);
    return !nameTitle === found;
  },
};
