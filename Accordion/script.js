document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const section=header.parentElement;
            const content=header.nextElementSibling;
            section.classList.toggle("active");
            if(section.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
            else{
                content.style.maxHeight = null;
            }
        });
    });
});