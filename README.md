Modest-Flexbox-Grid
===================

[Demo](http://ajkochanowicz.github.io/Modest-Flexbox-Grid)

Sass mixins for creating a simple flexbox grid with automatic breakpoints

Features
--------

- Automatic breakpoints for columns on mobile and tablet
- Mobile first
- Flexbox, prefixed.
- Lightweight, only outputs css you define
- Does not dictate classes. As a mixin-only library, you define the classes that will inherit grid properties.

Usage
-----

There are four main components:

- Container
- Row
- Column
- Offsets

### Container

The container just wraps the page with automatic breakpoints for larger screens.

    .mycontainer
      +grid-container
      
(Note the "+" is shorthand for "@include" in Sass.)

### Row

The row's responsibility is simply to group column components.

    .myrow
      +grid-row

### Column

Columns are defined as a certain number of columns out of a total possible 12.

Columns don't have to be defined as a number. If making a column 1/2, 2/3, or 1/3 wide, I recommend just passing in "half", "twothirds", "third" respectively. For example,

    .mymainpane
      +grid-column('twothirds')

    .mysidebar
      +grid-column('third')

Of course we could do

    .mymainpane
      +grid-column(8)

    .mysidebar
      +grid-column(4)
      
But our grid wouldn't automaticlaly reduce to halves on tablet. It would, however, go full-width on mobile.

### Offsets

For offsets, just pass in a 1-12 value as the second parameter to `grid-column`

    .mysidebar
      +grid-column(4, 8)
