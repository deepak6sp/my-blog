---
title: "Mock date with MomentJS - Jasmine Unit Test"
cover: "https://unsplash.it/1152/300/?computer?image=0"
date: "01/04/2018"
category: "Testing"
tags:
    - Testing
---

<a href="https://momentjs.com/" target="_blank">MomentJS</a> is a great library for parsing, validating, manipulating, and formatting dates. When running Jasmine unit tests, it is easy to mock date and time with just 3 lines of code.

```
beforeEach(() => {
 const mockedDateAndTime  = ‘2017-03-02 00:00:00’;
 const today = moment(mockedDateAndTime).toDate();
 jasmine.clock().mockDate(today);
});
```

Now, Jasmine library will use the mockedDateAndTime to run all the tests, rather than today’s current date and time.