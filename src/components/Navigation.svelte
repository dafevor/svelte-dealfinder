<script>
    let show = false;
    function showOptions() {
        show = !show;
    }
</script>
<style>
    .nav {
        width: 100%;
    }

    .nav .status-bar {
        height: 8vh;
        background: #355c97;
        opacity: 0.6;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        justify-content:flex-start;
    }

    .nav .nav-options {
        background: #282c34;
    }

    .nav .nav-hamburguer {
        background: #355c97;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .nav a {
        color: white;
        padding: 14px 16px;
        text-decoration: none;
        display: block;
    }

    .nav a:hover {
        background: #ddd;
        color: black;
    }
</style>
<nav class="nav">
    <section class="status-bar">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="nav-hamburguer" on:click={() => showOptions()}>
          <i class="fa fa-bars"></i>
      </a>
    </section>        
    
    {#if show } 
      <section class="nav-options">
          <a href="/profile">Profile</a>
          <a href="/discounts">Discounts</a>
          <a href="/account">Preferences</a>
      </section>
    {/if}
</nav>