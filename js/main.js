// Function to fetch and insert HTML content
function fetchAndInsert(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // After inserting content, execute logic specific to each file
            if (elementId === 'header-placeholder') {
                // Set active class for current page in header navigation
                const currentPage = window.location.pathname.split('/').pop().split('.')[0];
                const navLinks = document.querySelectorAll('nav ul li a');
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === currentPage) {
                        link.classList.add('active');
                    }
                });

                // Generate breadcrumbs for project pages
                if (currentPage.startsWith('project')) {
                    const breadcrumbsPlaceholder = document.getElementById('breadcrumbs-placeholder');
                    breadcrumbsPlaceholder.innerHTML = generateBreadcrumbs(currentPage);
                }
            }
        });
}

// Function to generate breadcrumbs based on current page
function generateBreadcrumbs(currentPage) {
    const crumbs = ['<a href="../html/projects.html">Projects</a>']; // Link to Projects page

    // Handle each project page individually
    switch (currentPage) {
        case 'project1':
            crumbs.push('<span>Project One</span>'); // Current page (no link)
            break;
        case 'project2':
            crumbs.push('<span>Project Two</span>'); // Current page (no link)
            break;
        case 'project3':
            crumbs.push('<span>Project Three</span>'); // Current page (no link)
            break;
        default:
            break;
    }

    return crumbs.join(' <span>></span> '); // Separate crumbs with >
}

// Load header
fetchAndInsert('/html/header.html', 'header-placeholder');
// Load footer
fetchAndInsert('/html/footer.html', 'footer-placeholder');
