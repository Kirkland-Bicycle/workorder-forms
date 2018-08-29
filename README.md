# Workorder Notes Templates

## What are these?
These are just basic bookmarklets written to paste a common template into the Notes field of a Lightspeed workorder.
They are very basic, but cut down on time needed by a little bit and it keeps notes looking consistent.

## How to Set Up

### Employees
Replace all Employee names and initials to match current staff.
The employee name must match the Lightspeed name that is shown on the sidebar.
If there are quotes in the name use \\" \\" to add them inside the other quotes.
The default initials (used if there is another user logged in that is not on the list) are blank but could be added.

###### Example:
```javascript
switch (employeeName) {
  case "John Smith":
    employeeInitial = "JS";
    break;
  case "John \"JJ\" Johnson":
    employeeInitial = "JJ";
    break;
  default:
    employeeInitial = "??";
}
```

### Form Template

Replace anything in the quotes to customize the wording of the text that will be inserted into the notes field.
Keep \n at the end to make a new line and just add another "...." +  to add more lines.

###### Example:
```javascript
var text =
  "New Template -- " + employeeInitial + " " + currentDate + ":\n" +
  "[ Category 1 ] : \n" +
  "[ Category 2 ] : \n" +
  "[ Category 3 ] : \n";
```

### Changing Workorder Type

Some forms will change the workorder type to match. This could include warranty and rentals.
This depends on which categories were created for a given shop and is represented with a number.
It is fairly straightforward to find a number code for workorder type:
* Open a workorder,
* Press ctrl+u to open the source code
* Search for Warranty or any workorder type (ctrl+f). This should find a list of `<option>` tags with different workorder types
* In the `<option>` tag there will be number (ex. value="12")

Now in the template just replace that number as needed.

###### Example:
###### From source code:
```html
<option value="12" style="background: #CC89A6" notranslate> Warranty Open </option>
```
###### Where to put this number:
```javascript
document.getElementById("workorder_edit_status_field").value = 12;
```

### Other additions

In my opinion these should be kept fairly simple, but a couple things could be added depending on the workflow.
The appointment form adds a "APPT - JJ" line to the hook in box. This can be changed or deleted or even added to hook out or other field.

###### Example:
```javascript
hookInText = "APPT - " + employeeInitial;
document.getElementById("hookInInputField").value += hookInText;
```


## How to Use

### Make a bookmark
Once the code is updated then it needs to be made into a bookmark.
An easy way to do this is to use [Bookmarklet Crunchinator](https://ted.mielczarek.org/code/mozilla/bookmarklet.html)

Just copy the text into the box. Name is what you want and click the button.
It will create a bookmark that you can drag to the bookmark toolbar.

### Now use them!
When a workorder is open, just press the bookmark and the text should be inserted into the notes field.
(The size of the notes field won't change until a key is pressed so just click anywhere and start typing and things should update and save.)
That's it!


## Possible Issues

The biggest issue is going to be if Lightspeed updates and changes how they name things in their code.
I had this happen once and was easily fixed by just searching the source code for the new name (I believe they had changed the name of the employee name item)
