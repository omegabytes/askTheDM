# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

## [Unreleased]

## [Released]

## [2.2] - 11/3/2017
- Added expected "mispronunciations" of spell and item names
- Added some utterances, removed others
- Fixed a nasty bug in spell healing and damage intents that was causing the program to exit unexpectedly
- Added welcome and help cards

## [2.1] - 09/13/2017
### Added
- Information:
	- Items
		- Armor
			- description
			- name
			- cost
			- AC
			- strength
			- type
			- weight
		- Weapons
			- name
			- cost
			- weight
			- damage
			- properties
			- description
		- Tools
			- name
			- cost
			- weight
			- description
		- Gear
			- name
			- cost
			- weight
			- description
			- capacity
		- Mounts/vehicles
			- name
			- cost
			- weight
			- description
			- carrying capacity
			- speed
		- Trade Goods
			- name
			- cost
		- Services
			- name
			- cost
		- Food, Drink, and Lodging
			- name
			- cost
			- quality
		- Trinkets
			- dice roll
			- name
			- description
		- Packs
			- name
			- cost
			- description
	- Feats
		- description
		- benefits
		- prerequisites
	- Dice rolls:
    	- modifiers (eg. 1d8+6)
    	- advantage and disadvantage on d20 rolls
    - Index search:
        - find the page in the player's handbook for almost any topic
    - UK English support

### Changed
- Exhaustion
    - now searchable by level
- Spells
    - you can now get the damage/healing amounts for spells and cantrips
- some functions refactored into alexLib.js

## [1.0] 08/14/2017
### Added
- Editions:
	- 5e
- Information:
	- Spells
		- range
		- duration
		- casting time
		- components
		- short description
		- long description
		- spell type and level
		- what's needed to cast a spell
	- Conditions
		- description
