export const renderNavMenu = () => {
  const linkList = [{href: "/", text: "MAIN"},{href: "/admin.html", text: "CATALOG"},{href: "/card.html", text: "CARD"}]
  const base = document.querySelector('.header__title')
  linkList.forEach(item => {
    const div = document.createElement('div')
    const a = document.createElement('a')
    a.setAttribute('href', item.href)
    a.textContent = item.text
    div.append(a)
    base.append(div)
  })
}

