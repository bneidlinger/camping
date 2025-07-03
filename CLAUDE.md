# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a camping expedition inventory management project for the "Duluth Gold Mining Expedition" scheduled for July 5, 2025. The project uses YAML format to track participants and their equipment, with a focus on power management and battery capacities.

## Project Structure

```
/mnt/c/projects/camping/
├── inventory.yaml    # Main inventory data file
├── assets/          # PNG images of inventory items
└── CLAUDE.md        # This file
```

## Key Data Structure

The `inventory.yaml` file follows this schema:

```yaml
trip_name: string
date: YYYY-MM-DD
location: string
people:
  - name: string
    role: string
    inventory:
      - name: string
        type: string
        description: string
        power_source: string (optional)
        capacity_mwh: number (optional, in milliwatt-hours)
        tags: [array of strings]
```

## Common Tasks

### Viewing Inventory Data
```bash
cat inventory.yaml
```

### Validating YAML Syntax
```bash
python3 -c "import yaml; yaml.safe_load(open('inventory.yaml'))"
```

### Searching for Specific Items
```bash
grep -i "battery" inventory.yaml
```

### Counting Total Power Capacity
```bash
grep "capacity_mwh:" inventory.yaml | awk '{sum += $2} END {print "Total capacity: " sum " mWh"}'
```

## Working with Assets

Image assets in the `/assets/` directory correspond to inventory items. When adding new items with visual representations, place PNG images in this directory using lowercase filenames.

## Data Integrity Guidelines

1. Maintain consistent field naming in inventory items
2. Use capacity_mwh for all battery capacities (in milliwatt-hours)
3. Keep tags lowercase and hyphenated (e.g., "usb-c", not "USB C")
4. Verify YAML syntax after any modifications
5. Ensure person names are unique or properly distinguished

## Notes

- The inventory includes a duplicate "Zeus" entry (lines 79-97) that may need resolution
- Some participants have placeholder "Sample Item" entries that need completion
- Power sources vary from batteries to "Pi GPIO" to "Beef treats" - maintain this flexibility