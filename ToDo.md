Components:
* Hero - Implemented in Hero.js
* PillButton - PillButton.js
  * Active
  * Inactive -- annotation button -- TBD
* Synopsis - Synopsis.js
* ReadOnlyTextBox - ReadOnlyTextBox.js
* ImageGridRow - ImageRow.js - Needs elaboration.
  * Built on react-grid-gallery

Containers:
* Test Containers
  * HeroContainer
    * Test image fill
    * Test background color
    * Test overlay
  * PillButtonContainer
    * Enable injected onClick
    * Enable stacking - PillButtonStack.js
    * disable - default value?
  * SynopsisContainer
  * ImageGridRowContainer
    * Test single row
    * Test multi row
    * Enable injected onClick
    * Animation
    
Structural:
* How to have button on top of div clickable
  * add zIndex to style
* Control placement side by side, overlay, etc.

ToDo:
* Look at AbsoluteGrid - https://github.com/jrowny/react-absolute-grid