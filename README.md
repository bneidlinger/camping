# 🏔️ Duluth Gold Mining Expedition Terminal

A retro-futuristic terminal interface for managing expedition inventory and personnel for the upcoming Duluth Gold Mining Expedition (July 5, 2025).

![Terminal Interface](assets/mainpageimage.png)

## 🎮 Live Demo

Visit the expedition terminal at: [GitHub Pages URL]

## 🛠️ Features

### Terminal Interface
- **Retro CRT Design**: Complete with scanlines, phosphor glow effects, and terminal green aesthetics
- **Boot Sequence**: Authentic terminal startup animation with ASCII art
- **Interactive Command Line**: Type commands for additional functionality (`help`, `status`, `power`, `export`)

### Personnel Management
- **S.P.E.C.I.A.L. Stats**: Each expedition member has Fallout 3-style attributes
  - **S**trength, **P**erception, **E**ndurance, **C**harisma, **I**ntelligence, **A**gility, **L**uck
- **Role Assignment**: Wizards, Guide, Moral Support, Party Patrol
- **Individual Inventory Tracking**: Equipment assigned to each person

### Inventory System
- **Visual Item Display**: PNG images for each piece of equipment
- **Power Management**: Track battery capacities in mWh
- **Item Categories**: Power stations, sensors, tools, survival gear
- **Hover Preview**: See larger images when hovering over items
- **Tag System**: Organize items by functionality

### Interactive Map
- **Duluth Area Prospecting Map**: Canvas-rendered topographical display
- **Gold Deposit Markers**: Known prospecting locations marked
- **Click Detection**: Simulated radiation readings at click points
- **Terrain Features**: Lake Superior, forests, rivers, city area

### Data Management
- **Add/Edit Forms**: Add new inventory items through the terminal
- **YAML Export**: Download expedition data in YAML format
- **Persistent Storage**: All data maintained in `inventory.yaml`

## 📁 Project Structure

```
camping/
├── index.html          # Main terminal interface
├── styles.css          # Retro terminal styling
├── script.js           # Core functionality
├── inventory.yaml      # Expedition data
├── assets/            # Equipment images
│   ├── anker.png
│   ├── coatwarmer.png
│   ├── dog.png
│   ├── geiger.png
│   ├── handwarmer1.png
│   ├── handwarmer2.png
│   ├── pi16.png
│   ├── plasma.png
│   └── survivalkit.png
└── README.md          # This file
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/[username]/camping.git
```

2. Open `index.html` in a web browser
3. Wait for the boot sequence to complete
4. Navigate through the terminal interface

## 💾 Data Format

The expedition data is stored in YAML format:

```yaml
trip_name: "Duluth Gold Mining Expedition"
date: "2025-07-05"
location: "Undisclosed Woodland Coordinates"
people:
  - name: "Person Name"
    role: "Role Description"
    inventory:
      - name: "Item Name"
        type: "Item Type"
        description: "Description"
        power_source: "Power Type"
        capacity_mwh: 0
        tags: [tag1, tag2]
```

## 🎨 Design Features

- **Color Palette**: Terminal green (#00ff00), amber warnings (#ffb000), danger red (#ff0040)
- **Font**: VT323 monospace for authentic terminal feel
- **Animations**: Glitch effects, power pulses, radiation fluctuations
- **Sound**: Currently no sound (future enhancement possibility)

## 🔧 Technical Details

- **Pure Static Site**: No server required, runs entirely in browser
- **No External Dependencies**: All functionality built with vanilla HTML/CSS/JavaScript
- **GitHub Pages Ready**: Can be hosted directly from repository
- **Responsive Design**: Works on desktop and tablet sizes

## 📝 Terminal Commands

Type these in the command input at the bottom:

- `help` - Show available commands
- `status` - Check expedition status
- `power` - Display total power capacity
- `clear` - Clear terminal output
- `export` - Download inventory data

## 🏕️ Expedition Members

- **Brando and Jovita** - Wizards (Primary equipment holders)
- **Benji** - Guide
- **Matt and Apple Juice** - Moral Support / LoL Jungle
- **Zeus** - Party Patrol and Music

## ⚡ Power Infrastructure

Total expedition power capacity: **334,000 mWh**

Key power sources:
- Anker SOLIX C300: 300,000 mWh
- Coat Warmer Battery: 20,000 mWh
- Hand Warmers: 9,000 mWh combined

## 🗺️ Gold Prospecting Locations

The interactive map includes marked locations:
- Old Mine Shaft (confirmed gold)
- Creek Bend (confirmed gold)
- Hidden Valley (confirmed gold)
- Rocky Outcrop (searched, no gold)
- Abandoned Camp (searched, no gold)

## 🤝 Contributing

Feel free to submit issues or pull requests. Some ideas for enhancements:
- Additional map layers
- Equipment weight calculations
- Weather integration
- Supply consumption tracking
- Mobile responsive improvements

## 📜 License

This project is for the Duluth Gold Mining Expedition team. Handle with care and keep location coordinates undisclosed.

---

*"In the depths of Duluth's wilderness, fortune favors the prepared."* ⛏️✨