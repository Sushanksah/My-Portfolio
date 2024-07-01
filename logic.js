document.addEventListener("DOMContentLoaded", () => {
    // List
    const tabs = document.querySelectorAll(".tabtitle");
    const contents = document.querySelectorAll(".tablist");

    // NavBar 
    const navlist = document.getElementById("navlist");
    const openNav = document.querySelector("#open");
    const closeNav = document.querySelector("#close");

    openNav.addEventListener("click", () => {
        navlist.style.display = "block";
    })

    closeNav.addEventListener("click", () => {
        navlist.style.display = "none";
    })

    // list
    const hideAllContents = () => {
        contents.forEach((content) => {
            content.classList.add('hidden');
        })
    }

    const removeActiveLinks = () => {
        tabs.forEach((tab) => {
            tab.classList.remove('activelink');
        })
    }

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            removeActiveLinks();
            tab.classList.add('activelink');

            hideAllContents();
            const tabID = tab.id

            let content = document.getElementById(`${tabID}-content`);
            content.classList.remove('hidden');
        })
    })

    hideAllContents();
    contents[0].classList.remove('hidden');
    tabs[0].classList.add('activelink');

    // form
    const msg = document.querySelector(".formMsg");
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        msg.innerHTML = 'Form has been submitted successfully!';

        // Reset form fields after submission
        form.reset();
        
        setTimeout(() => {
            msg.innerHTML = '';
        }, 5000);
    });
})