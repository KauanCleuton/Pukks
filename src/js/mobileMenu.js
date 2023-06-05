export default function mobileMenu({menu}) {
    const toggleMenu = (event) => {
        if (event.type === "touchstart") {
          event.preventDefault()
        }
        menu.classList.toggle("isActiveMenu")
    }
    return {
        toggleMenu
    }
}