<template>
    <div class="footer-wrapper">
        <footer class="py-3 my-4">
            <div class="my-4">
                <ul class="is-flex is-justify-content-center">
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-muted">Term</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-muted">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-muted">FAQs</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2 text-muted">About</a>
                    </li>
                </ul>
            </div>
            <div class="is-flex is-justify-content-center" style="gap: 0.5rem;">
                <span class="material-symbols-outlined">grass</span>
                <p>2025 Memo Grass</p>
            </div>
            <div class="is-flex is-justify-content-center">
                <div class="is-size-7 is-flex is-align-items-center">
                    <a href="https://github.com/citrussilver">github</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>
.footer-wrapper {
    width: 100%;
    position: fixed; 
    bottom: 0;
    z-index: -1;
}

a, d:visited, a:hover, a:focus, d:active {
    color: rgb(54, 54, 54);
    text-decoration: none;
}

</style>