const d = document,
  $menu = d.getElementById("wheel-nav"),
  $menuItems = d.getElementsByClassName("wheel-item");

// console.log($menu);
// console.log($menuItems);

const wheelNav = (e) => {
  if (e.target.matches("#wheel-nav *")) {
    console.log("Estoy encima we");

    for (let item = 0; item < $menuItems.length; item++) {
      const el = $menuItems[item];

      let top = [10, 30, 70, 90, 70, 30],
        left = [50, 90, 90, 50, 10, 10];

      el.style.top = `${top[item]}%`;
      el.style.left = `${left[item]}%`;
    }
  } else {
    Array.from($menuItems).forEach((el) => {
      el.style.top = "50%";
      el.style.left = "50%";
    });
  }
};

export default wheelNav;
