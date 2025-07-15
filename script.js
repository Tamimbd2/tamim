// --- Data ---
const portfolioData = {
    name: "Tamim.dev",
    taglineWords: ["Flutter Developer", "Digital Content Creator"],
    about: {
        paragraph1: "As a Flutter developer and digital content creator, I specialize in crafting high-performance, cross-platform mobile applications while also producing engaging, visually impactful video content. My work blends the precision of technology with the creativity of storytelling—delivering seamless, user-centric experiences that connect with audiences on both functional and emotional levels. With a passion for clean code, elegant design, and meaningful narratives, I aim to transform ideas into digital realities that inform, inspire, and innovate.",
        paragraph2: "",
        paragraph3: ""
    },
    services: [
        { title: "Mobile Apps", description: "Professional development of applications for Android and iOS.", icon: "smartphone" },
        { title: "Web Development", description: "High-quality development of sites at the professional level.", icon: "globe" },
        { title: "UI/UX Design", description: "The most modern and high-quality design made at a professional level.", icon: "layout" },
        { title: "Backend Development", description: "High-performance backend services designed for scalability and seamless user experience.", icon: "server" }
    ],
    skills: [
        {
            category: "Programming Language",
            items: [
                { name: "Dart", icon: "code" }, { name: "HTML", icon: "file-html" }, { name: "CSS", icon: "file-css" },
                { name: "JavaScript", icon: "file-javascript" }, { name: "Java", icon: "code" }, { name: "C", icon: "code" }
            ]
        },
        {
            category: "Databases",
            items: [
                { name: "MySQL", icon: "database" }, { name: "Firebase", icon: "database" }, { name: "MongoDB", icon: "database" }
            ]
        },
        {
            category: "Tool & Other",
            items: [
                { name: "Github", icon: "github" }, { name: "Netlify", icon: "cloud" }, { name: "Vercel", icon: "cloud" },
                { name: "Figma", icon: "pen-tool" }, { name: "Canva", icon: "image" }, { name: "Android Studio", icon: "code" }
            ]
        },
        {
            category: "Tools for Content Creation",
            items: [
                { name: "Adobe Premiere Pro", icon: "video" }, { name: "CapCut", icon: "video" },
                { name: "Adobe Photoshop", icon: "image" }, { name: "Canva Pro", icon: "image" }, { name: "Audacity", icon: "mic" }
            ]
        }
    ],
    projects: [
        {
            id: 1, title: "E-commerce Platform",
            description: "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration. Built with React, Node.js, Express, and MongoDB.",
            technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Stripe API", "Tailwind CSS"],
            image: "https://placehold.co/600x400/1e293b/a78bfa?text=E-commerce+App", liveUrl: "#", githubUrl: "#"
        },
        {
            id: 2, title: "Task Management App",
            description: "A responsive task management application allowing users to create, update, and delete tasks. Features drag-and-drop reordering and filtering options. Built with React and Firebase.",
            technologies: ["React", "Firebase (Firestore, Auth)", "Tailwind CSS"],
            image: "https://placehold.co/600x400/1e293b/34d399?text=Task+App", liveUrl: "#", githubUrl: "#"
        },
        {
            id: 3, title: "Personal Blog",
            description: "A modern, responsive blog platform with a content management system (CMS) integration. Features markdown support and dynamic content loading. Built with Next.js and a headless CMS.",
            technologies: ["Next.js", "GraphQL", "Headless CMS (e.g., Strapi)", "TypeScript", "Tailwind CSS"],
            image: "https://placehold.co/600x400/1e293b/facc15?text=Blog+Site", liveUrl: "#", githubUrl: "#"
        }
    ],
    contact: {
        email: "itstamim.ban@gmail.com",
        linkedin: "https://www.linkedin.com/in/MahabubTamim/",
        github: "https://github.com/Tamimbd2",
        facebook: "https://www.facebook.com/fb.tamim",
        whatsapp: "https://wa.me/+8801744463419"
    }
};

// --- Utility Functions ---
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    // Update active nav item (simple implementation)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('text-[#5378f6]', 'font-semibold');
        item.classList.add('text-gray-300');
    });
    const activeItem = document.querySelector(`.nav-item[href="#${id}"]`);
    if (activeItem) {
        activeItem.classList.add('text-[#5378f6]', 'font-semibold');
        activeItem.classList.remove('text-gray-300');
    }
}

// --- Typewriter Effect ---
let currentWordIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBeforeDelete = 1500;

function typeWriter() {
    const taglineElement = document.getElementById('tagline-typewriter');
    if (!taglineElement) return;

    const fullWord = portfolioData.taglineWords[currentWordIndex];

    if (isDeleting) {
        currentText = fullWord.substring(0, currentText.length - 1);
    } else {
        currentText = fullWord.substring(0, currentText.length + 1);
    }

    taglineElement.innerHTML = `${currentText}<span class="animate-blink">|</span>`;

    if (!isDeleting && currentText === fullWord) {
        setTimeout(() => { isDeleting = true; }, pauseBeforeDelete);
    } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % portfolioData.taglineWords.length;
    }

    setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
}

// --- Cursor Follower ---
const cursorFollower = document.getElementById('cursor-follower');
document.addEventListener('mousemove', (e) => {
    if (cursorFollower) {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    }
});

// --- Project Card Rendering ---
async function generateProjectDescription(projectTitle, technologies, currentDescription, projectId) {
    const generatedDescriptionElement = document.getElementById(`generated-desc-${projectId}`);
    const generateButton = document.getElementById(`generate-btn-${projectId}`);

    if (generatedDescriptionElement) {
        generatedDescriptionElement.innerHTML = `<p class="text-gray-400 text-sm">Generating...</p>`;
    }
    if (generateButton) {
        generateButton.disabled = true;
        generateButton.innerHTML = `<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>Generating...`;
    }

    try {
        const prompt = `Given the following project details, generate a more detailed and engaging description (around 100-150 words) that highlights its key features and impact. Focus on the value it provides.
Project Title: ${projectTitle}
Technologies: ${technologies.join(', ')}
Current Description: ${currentDescription}`;

        const chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };

        const apiKey = ""; // Canvas will provide this at runtime
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (result.candidates && result.candidates.length > 0 &&
            result.candidates[0].content && result.candidates[0].content.parts &&
            result.candidates[0].content.parts.length > 0) {
            const text = result.candidates[0].content.parts[0].text;
            if (generatedDescriptionElement) {
                generatedDescriptionElement.innerHTML = `<h4 class="text-lg font-semibold text-blue-300 mb-2">Generated Description:</h4><p class="text-gray-300 text-sm">${text}</p>`;
            }
        } else {
            if (generatedDescriptionElement) {
                generatedDescriptionElement.innerHTML = `<p class="text-red-400 text-sm">Failed to generate description. Please try again.</p>`;
            }
            console.error("Gemini API response structure unexpected:", result);
        }
    } catch (error) {
        if (generatedDescriptionElement) {
            generatedDescriptionElement.innerHTML = `<p class="text-red-400 text-sm">Error generating description. Check console for details.</p>`;
        }
        console.error("Error calling Gemini API:", error);
    } finally {
        if (generateButton) {
            generateButton.disabled = false;
            generateButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles mr-2 inline"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>Generate Description ✨`;
        }
    }
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = ''; // Clear existing content

    portfolioData.projects.forEach(project => {
        const projectCardHtml = `
            <div class="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out border border-[#5378f6]">
                <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/333333/999999?text=Image+Error';"/>
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-white mb-3">${project.title}</h3>
                    <p class="text-gray-300 mb-4 text-base">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `<span class="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">${tech}</span>`).join('')}
                    </div>
                    <div class="flex justify-start space-x-4 mb-4">
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-[#5378f6] text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link mr-2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                            Live Demo
                        </a>
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-200 text-sm font-medium rounded-md hover:bg-gray-600 transition-colors duration-300 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.46 0 0-1 0-3 1.5a9.28 9.28 0 0 0-6 0c-2-1.5-3-1.5-3-1.5A4.8 4.8 0 0 0 2 13.5c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-5-2"/><circle cx="12" cy="12" r="10"/></svg>
                            GitHub
                        </a>
                    </div>
                    <button id="generate-btn-${project.id}" onclick="generateProjectDescription('${project.title}', ['${project.technologies.join("','")}'], '${project.description}', ${project.id})" class="w-full inline-flex items-center justify-center px-4 py-2 bg-[#5378f6] text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors duration-300 shadow-md mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles mr-2 inline"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                        Generate Description ✨
                    </button>
                    <div id="generated-desc-${project.id}" class="mt-4 p-4 bg-gray-700 rounded-lg border border-[#5378f6] hidden">
                        </div>
                </div>
            </div>
        `;
        projectsGrid.insertAdjacentHTML('beforeend', projectCardHtml);
    });

    // Attach event listeners for generated description buttons
    portfolioData.projects.forEach(project => {
        const generateButton = document.getElementById(`generate-btn-${project.id}`);
        const generatedDescDiv = document.getElementById(`generated-desc-${project.id}`);
        if (generateButton && generatedDescDiv) {
            generateButton.addEventListener('click', () => {
                generatedDescDiv.classList.remove('hidden');
                generateProjectDescription(project.title, project.technologies, project.description, project.id);
            });
        }
    });
}

// --- Three.js Background ---
let scene, camera, renderer, mainObject, particles, lines;
let mouseX = 0, mouseY = 0; // Normalized mouse positions for 3D interaction

function initThreeDBackground() {
    const mount = document.getElementById('three-background-container');
    if (!mount) return;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Main rotating wireframe object (Dodecahedron)
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5);
    const dodecahedronMaterial = new THREE.MeshBasicMaterial({
        color: 0x5378f6, // Main blue color
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    mainObject = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    scene.add(mainObject);

    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 3000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 25;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x5378f6, // Main blue color
        size: 0.04,
        transparent: true,
        opacity: 0.7
    });
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Abstract Glowing Lines (Grid)
    const lineGeometry = new THREE.BufferGeometry();
    const linePoints = [];
    const gridSize = 10;
    const segments = 20;
    const spacing = gridSize / segments;

    for (let i = 0; i <= segments; i++) {
        const y = -gridSize / 2 + i * spacing;
        linePoints.push(new THREE.Vector3(-gridSize / 2, y, 0));
        linePoints.push(new THREE.Vector3(gridSize / 2, y, 0));
    }
    for (let i = 0; i <= segments; i++) {
        const x = -gridSize / 2 + i * spacing;
        linePoints.push(new THREE.Vector3(x, -gridSize / 2, 0));
        linePoints.push(new THREE.Vector3(x, gridSize / 2, 0));
    }

    lineGeometry.setFromPoints(linePoints);
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x5378f6, // Main blue color
        transparent: true,
        opacity: 0.3,
        linewidth: 1
    });
    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    lines.position.z = -5;
    lines.rotation.x = Math.PI / 2;
    scene.add(lines);

    // Ambient and Directional Lights (subtle for dark theme)
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0x404040, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Handle window resize for Three.js
    window.addEventListener('resize', () => {
        if (mount) {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        }
    });

    animateThreeD(); // Start animation loop
}

function animateThreeD() {
    if (!scene || !camera || !renderer) return;

    if (mainObject) {
        mainObject.rotation.x += 0.001;
        mainObject.rotation.y += 0.001;
    }

    if (particles) {
        particles.rotation.y += 0.0001;
    }

    if (lines) {
        const positions = lines.geometry.attributes.position.array;
        const time = Date.now() * 0.0001;
        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const y = positions[i + 1];
            positions[i + 2] = Math.sin(x * 0.5 + time) * 0.2 + Math.cos(y * 0.5 + time) * 0.2;
        }
        lines.geometry.attributes.position.needsUpdate = true;
        lines.rotation.y += 0.00005;
    }

    // Camera movement based on mouse position (subtle parallax)
    camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
    requestAnimationFrame(animateThreeD);
}

// Update mouse position for 3D background
document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

// --- On Load Initialization ---
window.onload = () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    typeWriter(); // Start typewriter effect
    initThreeDBackground(); // Initialize 3D background
    renderProjects(); // Render project cards
};
