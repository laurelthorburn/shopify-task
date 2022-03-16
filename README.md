# Shopify-Task

<a name="descsection"></a>
## Description

Welcome to my playground.

The interface will show the product’s name, description and price. Price is formatted as currency. (DONE)
The column widths do not need to equal in width. Take the approach you feel is best for the layout. (DONE)
Search results return matches and partial matches found in the name and description field. Results are case insensitive and ignore leading / trailing spaces. (DONE)
Interactions
The user can navigate and submit the search form using a keyboard or a mouse. (DONE)
When there are no search results, a message saying “No results found” is shown instead of the product grid. (DONE)
Prevent searches when there is no value in the search field. (DONE)
Data
Product information is coming from an API that returns an array of objects.  (DONE)
Price is expressed in cents. E.g. 1000 = $10.00 (DONE)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents
1. [ Description. ](#descsection)
2. [ Installation. ](#installsection)
3. [ License. ](#licensesection)
4. [ Contributing. ](#contribsection)
5. [ Tests. ](#testsection)
6. [ Questions. ](#questionssection)
7. [ Screenshots. ](#picsection)
8. [ Links. ](#linksection)
9. [ Resources/Credit. ](#creditsection)

<a name="installsection"></a>
## Installation
* Clone the repository using:
```
git clone https://github.com/laurelthorburn/shopify-task.git
```
* Ensure you are in the current working directory
* Install dependencies by opening the terminal (ctrl + j on windows) and running:
```
npm install || npm i
```

* Run the project by typing the following in your integrated terminal:
```
npm run start
```

<a name="licensesection"></a>
## License
Copyright <2022>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  <a name="contribsection"></a>
## Contributing
  
1. [Fork the repo!](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. Create a feature branch:
```
git checkout -b yourname-branch
```
3. Commit changes:
```
git commit -m 'Your changes here'
```
4. Push to the branch:
```
git push origin yourname-branch
```
5. Submit a pull request and wait for it to be approved or denied.

  <a name="testsection"></a>
## Tests

No tests at this time

  <a name="questionssection"></a>
## Creator

Laurel Thorburn

  
  <a name="picsection"></a>
  ## Screenshots
  ![Screenshot of Welcome Page Transitioning to Search Page](./media/Login.gif)


  <a name="linksection"></a>
  ## Links

  Deployed Github Page: https://true-swole-mates.herokuapp.com/
  
  <a name="creditsection"></a>
## Resources/Credit
* https://stackoverflow.com/questions/30187781/how-to-disable-a-button-when-an-input-is-empty
* https://bobbyhadz.com/blog/javascript-filter-array-of-objects-based-on-property
* https://stackoverflow.com/questions/32768494/convert-a-whole-number-amount-of-cents-to-a-readable-dollar-amount-in-javascript