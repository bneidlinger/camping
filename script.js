// Expedition data embedded directly (will be parsed from YAML)
const expeditionData = {
    trip_name: "Duluth Gold Mining Expedition",
    date: "2025-07-05",
    location: "Undisclosed Woodland Coordinates",
    people: [
        {
            name: "Brando and Jovita",
            role: "Wizards",
            inventory: [
                {
                    name: "Anker SOLIX C300",
                    type: "Power Station",
                    description: "Primary battery for Pi and laptop use.",
                    power_output: "300W (AC/DC/USB-C)",
                    capacity_mwh: 300000,
                    power_source: "Battery",
                    tags: ["power", "anchor", "main"],
                    image: "anker.png"
                },
                {
                    name: "Hand Warmer #1",
                    type: "Hand Warmer / Emergency Charger",
                    description: "4500 mWh unit with USB-C output.",
                    capacity_mwh: 4500,
                    power_source: "Battery",
                    tags: ["warmth", "backup", "usb-c"],
                    image: "handwarmer1.png"
                },
                {
                    name: "Hand Warmer #2",
                    type: "Hand Warmer / Emergency Charger",
                    description: "Identical to #1. Twin unit.",
                    capacity_mwh: 4500,
                    power_source: "Battery",
                    tags: ["warmth", "backup", "usb-c"],
                    image: "handwarmer2.png"
                },
                {
                    name: "Coat Warmer Battery",
                    type: "Wearable Battery",
                    description: "20000 mWh coat battery with USB-C output.",
                    capacity_mwh: 20000,
                    power_source: "Battery",
                    tags: ["clothing", "warmth", "wearable"],
                    image: "coatwarmer.png"
                },
                {
                    name: "Geiger Counter Board",
                    type: "Sensor",
                    description: "Radiation detection module.",
                    power_source: "Pi GPIO",
                    tags: ["sensor", "safety", "radiation"],
                    image: "geiger.png"
                },
                {
                    name: "Raspberry Pi Node",
                    type: "Microcomputer",
                    description: "Dedicated Pi for Geiger input, data logging.",
                    power_source: "USB-C (from SOLIX)",
                    tags: ["compute", "ai", "sensor-node"],
                    image: "pi16.png"
                },
                {
                    name: "Eleanor",
                    type: "Dog",
                    description: "Security Anjing, blue merle variant",
                    tags: ["companion", "security", "bark"],
                    power_source: "Beef treats",
                    image: "dog.png"
                },
                {
                    name: "Directed Plasma Energy Weapon",
                    type: "Tool",
                    description: "Real Lightsaber",
                    tags: ["fire", "defense", "force"],
                    power_source: "onboard mystical energy",
                    image: "plasma.png"
                },
                {
                    name: "Field Survival Kit",
                    type: "Tools",
                    description: "Box of shit",
                    power_source: "Battery, Humans",
                    tags: ["saw", "compass", "flashlight"],
                    image: "survivalkit.png"
                }
            ]
        },
        {
            name: "Benji",
            role: "Guide",
            inventory: [
                {
                    name: "Sample Item",
                    type: "Gear / Gadget / Tool",
                    description: "Short description here.",
                    power_source: "Battery / Solar / Manual",
                    capacity_mwh: 0,
                    tags: ["tag1", "tag2"]
                }
            ]
        },
        {
            name: "Matt and Apple Juice",
            role: "Moral Support - LoL Jungle",
            inventory: [
                {
                    name: "Sample Item",
                    type: "Gear / Gadget / Tool",
                    description: "Short description here.",
                    power_source: "Battery / Solar / Manual",
                    capacity_mwh: 0,
                    tags: ["tag1", "tag2"]
                }
            ]
        },
        {
            name: "Zeus",
            role: "Party Patrol and Music",
            inventory: [
                {
                    name: "Sample Item",
                    type: "Gear / Gadget / Tool",
                    description: "Short description here.",
                    power_source: "Battery / Solar / Manual",
                    capacity_mwh: 0,
                    tags: ["tag1", "tag2"]
                }
            ]
        }
    ]
};

// Generate random S.P.E.C.I.A.L. stats for each person
function generateSpecialStats() {
    const stats = {};
    const attributes = ['S', 'P', 'E', 'C', 'I', 'A', 'L'];
    const names = ['Strength', 'Perception', 'Endurance', 'Charisma', 'Intelligence', 'Agility', 'Luck'];
    
    attributes.forEach((attr, index) => {
        stats[attr] = {
            name: names[index],
            value: Math.floor(Math.random() * 7) + 3 // 3-10 range
        };
    });
    
    return stats;
}

// Store S.P.E.C.I.A.L. stats for each person
const personStats = {};
expeditionData.people.forEach(person => {
    personStats[person.name] = generateSpecialStats();
});

// Boot sequence
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.boot-sequence').style.display = 'none';
        document.querySelector('.main-interface').style.display = 'block';
        initializeInterface();
    }, 3000);
    
    // Create image preview element
    const preview = document.createElement('div');
    preview.className = 'image-preview';
    preview.innerHTML = '<img src="" alt=""><div class="image-preview-info"></div>';
    document.body.appendChild(preview);
});

// Initialize the interface
function initializeInterface() {
    updateClock();
    setupNavigation();
    renderPersonnel();
    renderInventory();
    renderPowerGrid();
    renderMap();
    setupEditForm();
    setupCommandInput();
    animateRadiation();
    setupImageHovers();
}

// Clock update
function updateClock() {
    const clockElement = document.getElementById('clock');
    setInterval(() => {
        const now = new Date();
        clockElement.textContent = now.toTimeString().split(' ')[0];
    }, 1000);
}

// Navigation
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');
    
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`${targetSection}-section`).classList.add('active');
            
            // Re-render map when switching to map section
            if (targetSection === 'map') {
                setTimeout(() => renderMap(), 100);
            }
        });
    });
}

// Render personnel cards
function renderPersonnel() {
    const grid = document.getElementById('personnel-grid');
    
    expeditionData.people.forEach(person => {
        const stats = personStats[person.name];
        const card = document.createElement('div');
        card.className = 'person-card';
        
        card.innerHTML = `
            <div class="person-header">
                <h3 class="person-name">${person.name}</h3>
                <span class="person-role">${person.role}</span>
            </div>
            <div class="special-stats">
                ${Object.entries(stats).map(([key, stat]) => `
                    <div class="stat">
                        <div class="stat-name">${key}</div>
                        <div class="stat-value">${stat.value}</div>
                        <div class="stat-bar">
                            <div class="stat-bar-fill" style="width: ${stat.value * 10}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="person-inventory">
                <h4 style="color: var(--terminal-amber); margin: 15px 0 10px;">Equipment:</h4>
                ${person.inventory.map(item => `
                    <div class="inventory-item">
                        ${item.image ? `<img src="assets/${item.image}" class="item-image" alt="${item.name}">` : ''}
                        <div class="item-details">
                            <div class="item-name">${item.name}</div>
                            <div class="item-type">${item.type}</div>
                            ${item.capacity_mwh ? `<div style="color: var(--terminal-blue);">Capacity: ${item.capacity_mwh.toLocaleString()} mWh</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Render inventory
function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    
    expeditionData.people.forEach(person => {
        const section = document.createElement('div');
        section.style.marginBottom = '40px';
        
        section.innerHTML = `
            <h3 style="color: var(--terminal-amber); margin-bottom: 20px; font-size: 28px;">
                ${person.name} - ${person.role}
            </h3>
        `;
        
        person.inventory.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'inventory-item';
            
            itemCard.innerHTML = `
                ${item.image ? `<img src="assets/${item.image}" class="item-image" alt="${item.name}">` : '<div style="width: 60px; height: 60px; background: var(--terminal-border); display: flex; align-items: center; justify-content: center;">?</div>'}
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-type">${item.type}</div>
                    <div class="item-description">${item.description}</div>
                    ${item.power_source ? `<div style="color: var(--terminal-blue);">Power: ${item.power_source}</div>` : ''}
                    ${item.capacity_mwh ? `<div style="color: var(--terminal-amber);">Capacity: ${item.capacity_mwh.toLocaleString()} mWh</div>` : ''}
                    <div class="item-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            section.appendChild(itemCard);
        });
        
        grid.appendChild(section);
    });
}

// Render power grid
function renderPowerGrid() {
    const container = document.getElementById('power-stats');
    let totalCapacity = 0;
    const powerItems = [];
    
    expeditionData.people.forEach(person => {
        person.inventory.forEach(item => {
            if (item.capacity_mwh) {
                totalCapacity += item.capacity_mwh;
                powerItems.push({
                    name: item.name,
                    owner: person.name,
                    capacity: item.capacity_mwh
                });
            }
        });
    });
    
    container.innerHTML = `
        <div class="power-meter">
            <h3 style="color: var(--terminal-amber); font-size: 24px;">Total Power Capacity</h3>
            <div style="font-size: 36px; margin: 10px 0;">${totalCapacity.toLocaleString()} mWh</div>
            <div class="power-bar">
                <div class="power-fill" style="width: 100%"></div>
            </div>
        </div>
        
        <h3 style="color: var(--terminal-amber); margin: 30px 0 20px; font-size: 24px;">Power Source Breakdown</h3>
        ${powerItems.sort((a, b) => b.capacity - a.capacity).map(item => `
            <div style="margin-bottom: 15px; padding: 10px; border: 1px solid var(--terminal-border);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span style="color: var(--terminal-green);">${item.name}</span>
                    <span style="color: var(--terminal-blue);">${item.owner}</span>
                </div>
                <div style="color: var(--terminal-amber);">${item.capacity.toLocaleString()} mWh</div>
                <div class="power-bar" style="height: 10px; margin-top: 5px;">
                    <div class="power-fill" style="width: ${(item.capacity / totalCapacity) * 100}%"></div>
                </div>
            </div>
        `).join('')}
    `;
}

// Render map
function renderMap() {
    const container = document.getElementById('map-container');
    
    // Clear any existing canvas
    container.innerHTML = '';
    
    // Create canvas for the map
    const canvas = document.createElement('canvas');
    canvas.className = 'map-canvas';
    canvas.width = container.offsetWidth || 800;
    canvas.height = 600;
    container.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Wait for next frame to ensure canvas is properly rendered
    requestAnimationFrame(() => {
        // Generate terrain
        drawTerrain(ctx, canvas.width, canvas.height);
        
        // Draw Duluth area features
        drawDuluthFeatures(ctx, canvas.width, canvas.height);
        
        // Add gold prospecting locations
        drawProspectingLocations(ctx, canvas.width, canvas.height);
        
        // Add legend
        drawLegend(ctx);
    });
    
    // Interactive features
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Simulate radiation detection
        const radiation = (Math.random() * 0.5).toFixed(2);
        document.getElementById('radiation-level').textContent = radiation;
        
        // Draw marker
        ctx.fillStyle = '#00ff00';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    });
}

function drawTerrain(ctx, width, height) {
    // Background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, width, height);
    
    // Grid
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    
    for (let x = 0; x < width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    
    for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

function drawDuluthFeatures(ctx, width, height) {
    // Lake Superior
    ctx.fillStyle = '#003366';
    ctx.fillRect(0, 0, width, height * 0.3);
    
    // Duluth city area
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(width * 0.1, height * 0.25, width * 0.2, height * 0.15);
    
    // Rivers
    ctx.strokeStyle = '#004488';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.3);
    ctx.quadraticCurveTo(width * 0.4, height * 0.5, width * 0.35, height);
    ctx.stroke();
    
    // Forest areas
    ctx.fillStyle = '#0a2a0a';
    for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = height * 0.3 + Math.random() * height * 0.7;
        const size = Math.random() * 30 + 10;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawProspectingLocations(ctx, width, height) {
    const locations = [
        { x: 0.6, y: 0.4, name: "Old Mine Shaft", gold: true },
        { x: 0.7, y: 0.6, name: "Creek Bend", gold: true },
        { x: 0.5, y: 0.7, name: "Rocky Outcrop", gold: false },
        { x: 0.8, y: 0.5, name: "Hidden Valley", gold: true },
        { x: 0.4, y: 0.5, name: "Abandoned Camp", gold: false }
    ];
    
    locations.forEach(loc => {
        const x = width * loc.x;
        const y = height * loc.y;
        
        // Draw location marker
        ctx.fillStyle = loc.gold ? '#ffb000' : '#666666';
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw X marks
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 5, y - 5);
        ctx.lineTo(x + 5, y + 5);
        ctx.moveTo(x + 5, y - 5);
        ctx.lineTo(x - 5, y + 5);
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#00ff00';
        ctx.font = '14px VT323';
        ctx.fillText(loc.name, x + 10, y - 10);
    });
}

function drawLegend(ctx) {
    const legendX = 20;
    const legendY = 20;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(legendX, legendY, 200, 120);
    
    ctx.strokeStyle = '#00ff00';
    ctx.strokeRect(legendX, legendY, 200, 120);
    
    ctx.fillStyle = '#00ff00';
    ctx.font = '16px VT323';
    ctx.fillText('LEGEND', legendX + 10, legendY + 20);
    
    // Legend items
    const items = [
        { color: '#ffb000', text: 'Gold Deposit' },
        { color: '#666666', text: 'Searched Area' },
        { color: '#004488', text: 'Water Source' },
        { color: '#0a2a0a', text: 'Forest' }
    ];
    
    items.forEach((item, i) => {
        ctx.fillStyle = item.color;
        ctx.fillRect(legendX + 10, legendY + 35 + i * 20, 15, 15);
        ctx.fillStyle = '#00ff00';
        ctx.fillText(item.text, legendX + 35, legendY + 45 + i * 20);
    });
}

// Edit form
function setupEditForm() {
    const container = document.getElementById('edit-form');
    
    container.innerHTML = `
        <form id="item-form">
            <div class="form-group">
                <label for="person-select">Person</label>
                <select id="person-select" required>
                    <option value="">Select person...</option>
                    ${expeditionData.people.map(p => `<option value="${p.name}">${p.name}</option>`).join('')}
                </select>
            </div>
            
            <div class="form-group">
                <label for="item-name">Item Name</label>
                <input type="text" id="item-name" required>
            </div>
            
            <div class="form-group">
                <label for="item-type">Item Type</label>
                <input type="text" id="item-type" required>
            </div>
            
            <div class="form-group">
                <label for="item-description">Description</label>
                <textarea id="item-description" rows="3" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="power-source">Power Source</label>
                <input type="text" id="power-source">
            </div>
            
            <div class="form-group">
                <label for="capacity">Capacity (mWh)</label>
                <input type="number" id="capacity" min="0">
            </div>
            
            <div class="form-group">
                <label for="tags">Tags (comma separated)</label>
                <input type="text" id="tags">
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn">ADD ITEM</button>
                <button type="button" class="btn btn-danger" onclick="clearForm()">CLEAR</button>
            </div>
        </form>
        
        <div style="margin-top: 40px; padding: 20px; border: 2px solid var(--terminal-border);">
            <h4 style="color: var(--terminal-amber); margin-bottom: 10px;">Export Data</h4>
            <button class="btn" onclick="exportData()">DOWNLOAD YAML</button>
        </div>
    `;
    
    document.getElementById('item-form').addEventListener('submit', (e) => {
        e.preventDefault();
        addItem();
    });
}

function addItem() {
    const personName = document.getElementById('person-select').value;
    const person = expeditionData.people.find(p => p.name === personName);
    
    if (!person) return;
    
    const newItem = {
        name: document.getElementById('item-name').value,
        type: document.getElementById('item-type').value,
        description: document.getElementById('item-description').value,
        power_source: document.getElementById('power-source').value,
        capacity_mwh: parseInt(document.getElementById('capacity').value) || 0,
        tags: document.getElementById('tags').value.split(',').map(t => t.trim()).filter(t => t)
    };
    
    person.inventory.push(newItem);
    
    // Refresh displays
    document.getElementById('personnel-grid').innerHTML = '';
    document.getElementById('inventory-grid').innerHTML = '';
    renderPersonnel();
    renderInventory();
    renderPowerGrid();
    
    clearForm();
    alert('Item added successfully!');
}

function clearForm() {
    document.getElementById('item-form').reset();
}

function exportData() {
    const yamlContent = `trip_name: "${expeditionData.trip_name}"
date: "${expeditionData.date}"
location: "${expeditionData.location}"
people:
${expeditionData.people.map(person => `  - name: "${person.name}"
    role: "${person.role}"
    inventory:
${person.inventory.map(item => `      - name: "${item.name}"
        type: "${item.type}"
        description: "${item.description}"
        power_source: "${item.power_source || ''}"
        capacity_mwh: ${item.capacity_mwh || 0}
        tags: [${item.tags.join(', ')}]`).join('\n')}`).join('\n')}`;
    
    const blob = new Blob([yamlContent], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory.yaml';
    a.click();
}

// Command input
function setupCommandInput() {
    const input = document.querySelector('.command-input');
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = input.value.toLowerCase();
            executeCommand(command);
            input.value = '';
        }
    });
}

function executeCommand(command) {
    const responses = {
        'help': 'Available commands: help, status, power, clear, export',
        'status': 'All systems operational. Expedition ready.',
        'power': `Total power capacity: ${calculateTotalPower().toLocaleString()} mWh`,
        'clear': () => { console.clear(); return 'Terminal cleared.'; },
        'export': () => { exportData(); return 'Data exported.'; }
    };
    
    const response = responses[command] || 'Command not recognized. Type "help" for available commands.';
    console.log(`> ${command}`);
    console.log(typeof response === 'function' ? response() : response);
}

function calculateTotalPower() {
    let total = 0;
    expeditionData.people.forEach(person => {
        person.inventory.forEach(item => {
            if (item.capacity_mwh) {
                total += item.capacity_mwh;
            }
        });
    });
    return total;
}

// Radiation animation
function animateRadiation() {
    setInterval(() => {
        const rad = (Math.random() * 0.05 + 0.01).toFixed(2);
        document.getElementById('radiation-level').textContent = rad;
    }, 5000);
}

// Setup image hovers
function setupImageHovers() {
    const preview = document.querySelector('.image-preview');
    const previewImg = preview.querySelector('img');
    const previewInfo = preview.querySelector('.image-preview-info');
    
    // Add event delegation for dynamically added images
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('item-image')) {
            const itemElement = e.target.closest('.inventory-item');
            const itemName = itemElement.querySelector('.item-name')?.textContent || 'Unknown Item';
            
            previewImg.src = e.target.src;
            previewInfo.textContent = itemName;
            preview.classList.add('active');
            
            // Position the preview
            const rect = e.target.getBoundingClientRect();
            const previewWidth = 320; // max-width + padding
            const previewHeight = 350; // estimated height
            
            let left = rect.right + 10;
            let top = rect.top;
            
            // Adjust if preview would go off screen
            if (left + previewWidth > window.innerWidth) {
                left = rect.left - previewWidth - 10;
            }
            
            if (top + previewHeight > window.innerHeight) {
                top = window.innerHeight - previewHeight - 10;
            }
            
            preview.style.left = `${left}px`;
            preview.style.top = `${top}px`;
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('item-image')) {
            preview.classList.remove('active');
        }
    });
    
    // Follow mouse movement while hovering
    document.addEventListener('mousemove', (e) => {
        if (preview.classList.contains('active')) {
            const previewWidth = 320;
            const previewHeight = 350;
            
            let left = e.clientX + 20;
            let top = e.clientY - previewHeight / 2;
            
            if (left + previewWidth > window.innerWidth) {
                left = e.clientX - previewWidth - 20;
            }
            
            if (top < 10) {
                top = 10;
            } else if (top + previewHeight > window.innerHeight - 10) {
                top = window.innerHeight - previewHeight - 10;
            }
            
            preview.style.left = `${left}px`;
            preview.style.top = `${top}px`;
        }
    });
}