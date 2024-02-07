# RedKite ID Card Designer
Yet another attempt at creating an ID Card designer software using web technologies, and I'm guaranteed mine will be worse

The intention here is to convince myself that $250 isn't a bad price for a dedicated ID Card designer software for our new printer.  While I definitely won't be able to do all of the bells and whistles most of the design process is relatively straight forward.  You have objects you place on a canvas at specific locations with specific design features.  You have a database of data to track.  You map the database data to the elements where requested.

This seems relatively straight forward.  In fact I'm certain this can be done with minimal fuss if I just combine 3 javascript libraries.
* Fabricjs <- mostly for the built-in drag and drop features
* Pagesjs <- For the creation of the PDF that will be used to print from, this will do the paging I think...maybe.
* Mustachejs <- For dynamic mapping of values from database to the canvas made by Fabricjs and finally output to Pagesjs.

And it's even possible I only need one of those along with a framework like svelt to handle the rest.

I don't know.  I don't do a lot of javascript development.  I'm mainly a Python guy with some loose PHP skills as an add-on.  I'm probably approaching this all from the wrong direction.  But best to start, try, and fail than to constantly wonder. 

First thing is first, creating the base code for displaying the canvas, the notch, and moving basic objects around said canvas using physical units.

Second is creating the differnt kinds of objects with a loose UI

Third is creating the final UI

Fourth is creating the database mapping code (I'm thinking of firebase or sqlite depending)

Fifth is verifying printing capabilities

Sixth is distribution (Electron, Photon, web, flutter, etc.) 
