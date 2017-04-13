/**
 * 导航回退
 */
export function naviGoBack(navigator) {
  if (navigator && navigator.getCurrentRoutes().length > 1) {
    navigator.pop();
    return true;
  }
  return false;
}
