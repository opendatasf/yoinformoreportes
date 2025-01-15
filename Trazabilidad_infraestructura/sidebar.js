document.addEventListener("DOMContentLoaded", () => {
    // Crear el contenedor del sidebar
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    // Obtener todos los encabezados (h1, h2 y h3) del contenido principal y de la sección de títulos
    const headers = document.querySelectorAll(".main-content h1, .main-content h2, .main-content h3, .titulos h1");

    // Crear una lista no ordenada para el índice
    const ul = document.createElement("ul");
    ul.classList.add("sidebar-list");

    // Iterar sobre los encabezados y crear enlaces dinámicos
    headers.forEach((header, index) => {
        // Asignar un ID único si no tiene uno
        if (!header.id) {
            header.id = `header-${index}`;
        }

        // Crear el elemento de lista y el enlace
        const li = document.createElement("li");
        li.classList.add(header.tagName.toLowerCase() === "h1" ? "sidebar-item-h1" : 
                         header.tagName.toLowerCase() === "h2" ? "sidebar-item-h2" : "sidebar-item-h3");

        const link = document.createElement("a");
        link.href = `#${header.id}`;
        link.textContent = header.textContent;

        // Añadir el enlace al elemento de lista
        li.appendChild(link);

        // Añadir el elemento de lista a la lista principal
        ul.appendChild(li);
    });

    // Añadir la lista al sidebar
    sidebar.appendChild(ul);

    // Insertar el sidebar en el body
    document.body.appendChild(sidebar);

    // Estilos dinámicos del sidebar (moderno y flexible)
    const style = document.createElement("style");
    style.textContent = `
      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 300px;
        height: 100vh;
        background: linear-gradient(135deg,rgb(42, 9, 189) 0%,rgb(51, 124, 252) 100%);
        padding: 20px;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
        overflow-y: auto;
        z-index: 1000;
        transition: transform 0.3s ease-in-out;
        transform: translateX(0);
        color: #fff;
        border-radius: 0 10px 10px 0; /* Suaviza los bordes derecho e inferior */
      }
      .sidebar.closed {
        transform: translateX(-100%);
      }
      .sidebar-toggle {
        position: fixed;
        top: 20px;
        left: 20px;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1100;
      }
      .sidebar-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .sidebar-item-h1 {
        font-weight: bold;
        margin: 5rem 0rem 0rem 0rem ;
        font-size: 1.5em;
      }
      .sidebar-item-h2 {
        margin: 10px 0;
        font-size: 1.2em;
      }
      .sidebar-item-h3 {
        margin: 8px 0 8px 20px;
        font-size: 1em;
      }
      .sidebar a {
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 5px 10px;
        border-radius: 5px;
        transition: background 0.3s;
      }
      .sidebar a:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    `;

    document.head.appendChild(style);

    // Crear un botón de toggle para mostrar/ocultar el sidebar
    const toggleButton = document.createElement("div");
    toggleButton.classList.add("sidebar-toggle");
    toggleButton.textContent = "☰";
    document.body.appendChild(toggleButton);

    // Obtener la clase .dashboard-river para manipular su margen izquierdo
    const dashboardRiver = document.querySelector(".dashboard-river");

    // Agregar funcionalidad al botón de toggle
    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("sidebar-hidden");
        if (sidebar.classList.contains("sidebar-hidden")) {
            sidebar.style.transform = "translateX(-100%)";
            toggleButton.style.left = "1rem";
            dashboardRiver.style.marginLeft = "1rem"; // Ajustar margen izquierdo del dashboard
        } else {
            sidebar.style.transform = "translateX(0)";
            toggleButton.style.left = "2rem";
            dashboardRiver.style.marginLeft = "250px";
    }});
});
