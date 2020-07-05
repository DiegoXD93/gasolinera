<template>
  <header id="header">
    <div class="logo">
      <h1>{{title}}</h1>
    </div>
    <nav id="menu">
      <ul>
        <li v-for="link in links" :key="link.text">
          <router-link :to="link.url">{{link.text}}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: "pagina web",
      links: [
        { text: "inicio", url: "/" },
        { text: "nosotros", url: "/about" },
        { text: "preguntas frecuentes", url: "/faqs" },
        { text: "contacto", url: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 120px;
  border-bottom: 1px solid rgba(14, 195, 250, 0.884);

  .logo {
    flex-grow: 1;
    flex-basis: 30%;
    font-family: Helvetica;
    font-style: italic;
    font-weight: 900px;
    font-size: 35px;
    padding: 10px;
    margin-left: 20px;
    color: black;
    text-shadow: 1px 1px 0px cornsilk;
    text-transform: uppercase;

    h1 {
      font-family: Helvetica;
      font-style: italic;
      font-weight: 900px;
      font-size: 35px;
    }
  }
  #menu {
    flex-grow: 1;
    flex-basis: 60%;
    height: 100%;
    padding-right: 20px;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      list-style: none;
    }

    a {
      text-transform: uppercase;
      color: darkgray;
      padding: 15px;
      transition: all 0.3s;
    }

    a:hover {
      background: darkseagreen;
      color: white;
    }
  }
}
</style>