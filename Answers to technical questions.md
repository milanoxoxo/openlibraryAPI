### 1.How long did you spend on the coding assignment? 

Several hours

### a.What would you add to your solution if you had more time?

I will add a recommendation section to share some of my own favorite books with others

### b.If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.

Recommendation section like I said before, and also a filter to show the book according to the subject(Fiction, Poetry, Literature, English)

### 2.What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

I think the most useful feature that was added to the latest version of React was Transitions

import {startTransition} from 'react';

//It is urgent to show the user typed\
setInputValue(input);

//The set update which is not urgent could be put inside startTransition()\
startTransition(() => {
  setUserName(input);
});

### 3.How would you track down a performance issue in production? Have you ever had to do this?

Load testing is the best way to track down performance issues and productivity. I do not have much direct experience with this, However I know some way to do performance detecting. For example, use some testing website for performance testing, Check CPU and Memory Usage, Check Bots and Crawling...

### 4.How would you improve the API that you just used?

I will group all information that will alawys be used in one place and make it simple. For example, after the "search" http request send, the resonpse at least include title, author, edition, cover, publish date, subject, language, description which help people get a basic idea according to the title they typed for searching

### 5.Please describe yourself using correctly formatted JSON.

{\
"name":"Lan Mi", \
"gender":"Female", \
"city":"Toronto",\
"hobby":"meditation",\
"active": true,\
"movie":"Harry Potter",\
"food":["chinese food", "japanese food"],\
};

